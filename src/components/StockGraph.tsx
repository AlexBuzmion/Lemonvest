import {View, Text} from './Themed'
import {Platform, StyleSheet} from 'react-native'
import { LineGraph, GraphPoint } from 'react-native-graph';
import timeseries from '@/assets/data/timeseries.json';
import Colors from '../constants/Colors';
import { useState } from 'react';
import Svg, { Line } from 'react-native-svg';

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
            { Platform.OS === 'web' ? (
                    <Svg width="100%" height="200">
                        {graphPoints.map((point, index) => (
                            <Line
                            key={index}
                            x1={index * 20}
                            y1={200 - point.value}
                            x2={(index + 1) * 20}
                            y2={200 - graphPoints[index + 1]?.value || 200 - point.value}
                            stroke="#017560"
                            strokeWidth="2"
                            />
                        ))}
                    </Svg>
                ) : (
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
                    )
            }
            
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