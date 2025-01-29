import {View, Text} from './Themed'
import {StyleSheet} from 'react-native'
import { LineGraph, GraphPoint } from 'react-native-graph';
import timeseries from '@/assets/data/timeseries.json';
import Colors from '../constants/Colors';
import { useState } from 'react';

function StockGraph() {
    const graphPoints: GraphPoint[] = timeseries.values.map((value) => ({
        date: new Date(value.datetime),
        value: Number.parseFloat(value.close),
    }));

    const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(graphPoints[graphPoints.length - 1]);
    
    const onPointSelected = (point: GraphPoint) => {
        setSelectedPoint(point);
    }
    // console.log(JSON.stringify(graphData, null, 2))
    return (
        <View style={styles.mainContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>${selectedPoint?.value.toFixed(1)}</Text>
            <Text>{selectedPoint?.date.toDateString()}</Text>
            <LineGraph
                style={styles.graphContainer}
                points = {graphPoints}
                animated={true}
                color="#017560"
                gradientFillColors={['#0175605D', '#7476df00']}
                enablePanGesture
                onPointSelected={onPointSelected}
                enableIndicator
                indicatorPulsating
                enableFadeInMask
            />
        </View>
    )
}

export default StockGraph;

const styles = StyleSheet.create({
    mainContainer: {
    },
    graphContainer: {
        width: '100%',
        height: 300,
    }
})