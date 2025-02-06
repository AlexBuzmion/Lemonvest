import { StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions, 
    typeof Navigator, 
    TabNavigationState<ParamListBase>, 
    MaterialTopTabNavigationEventMap
>(Navigator);

export default function MarketTopTabs() {
    return (
        <MaterialTopTabs>
        </MaterialTopTabs>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
