import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { TouchableOpacity, Image} from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/components/useColorScheme';
import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import RegisterCTA from '@/src/components/RegisterCTA';
import { View } from '@/src/components/Themed';
import { Ionicons } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, true),
        }}>
        <Tabs.Screen
            name="(market)"
            options={{
                title: 'Market',
                headerTitleStyle: { display: 'none' },
                tabBarIcon: ({ color }) => <TabBarIcon name='line-chart' color={color} />,
                // headerRight: () => (
                //     <Link href="/login" asChild>
                //         <Pressable>
                //             {({ pressed }) => (
                //                 <Image 
                //                 source={require('@/assets/images/Lemonvest-icon.png')} 
                //                 style={{ width: 50, height: 50,  alignContent: 'flex-start', backgroundColor: 'red', flex: 1, opacity: pressed ? 0.5 : 1 } } 
                //                 resizeMode='contain'
                //                 />
                //             )}
                //         </Pressable>
                //     </Link>
                // ),
                headerLeft: () => (
                    <Link href="/login" asChild>
                        <TouchableOpacity>
                            <Image 
                                style={{ width: 44, height: 44, marginLeft: 5}}
                                source={require('@/assets/images/Lemonvest-icon.png')} 
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </Link>
                ),
                headerRight: () => (
                    <Link asChild href='/modal'>
                        <TouchableOpacity style={{ marginRight: 10}}>
                            <Ionicons name="search" size={30} color='gray'/>
                        </TouchableOpacity>
                    </Link>
                )
            }}
        />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
    </Tabs>
  );
}
