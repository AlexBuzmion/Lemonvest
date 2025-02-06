import { View, Text } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function MarketCapTab() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'MarketCap' }} />
            <Text>MarketCap
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})