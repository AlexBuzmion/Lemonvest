import { View, Text } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Change24HTab() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: '24H Change' }} />
            <Text>Change24H</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})