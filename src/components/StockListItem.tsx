import { View, Text } from "./Themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useColorScheme } from './useColorScheme';
import React from "react";
import { Nunito } from './StyledText';
export default StockListItem;

type Stock = {
    name: string, 
    symbol: string,
    close: string,
    percent_change: string
}

type StockListItemProps = {
    stock: Stock,
}

function StockListItem({stock} : StockListItemProps) {
    const percentChange = Number.parseFloat(stock.percent_change);
    const closeChange = Number.parseFloat(stock.close);
    return (
        <Link href={`/${stock.symbol}`} asChild>
            <TouchableOpacity style={styles.mainContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>
                        <Text style= {[styles.symbol, ]}>
                            {stock.symbol}{"     "}
                            <AntDesign name="staro" size={18} color="gray" />
                        </Text>
                        <Text>{stock.name}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={percentChange < 0 ? {color: 'red'} : {color: 'green'}}>
                            {percentChange > 0 ? '+' : ''}
                            {percentChange.toFixed(2)}%
                        </Text>
                        <Text>${closeChange.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    symbol: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: Colors.light.tint,
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
        gap: 5,
    }, 
    rightContainer: {
        flex: .2,
        alignItems: 'flex-end',
    },
});