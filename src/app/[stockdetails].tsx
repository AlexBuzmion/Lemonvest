import { View, Text } from '@/src/components/Themed';
import { Stack, useLocalSearchParams } from 'expo-router';
import top5 from '@/assets/data/top5.json';
import StockListItem from '../components/StockListItem';
import StockGraph from '../components/StockGraph';

export default StockDetails;

function StockDetails() {
    const {stockdetails} = useLocalSearchParams<{stockdetails: string}>();
    const stock = top5[stockdetails as keyof typeof top5];

    if (!stock) {
        return <Text>Stock {stockdetails} not found</Text>;
    }

    return (
        <View style={{ padding: 10 }}>
            <Stack.Screen options={{ title: stock.symbol}} />
            <StockListItem stock={stock} />
            <StockGraph />
        </View>
    );
}

