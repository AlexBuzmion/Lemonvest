import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { useRouter } from 'expo-router';

export default function Favorites() {


  return (
    <View style={styles.container}>
      <Text>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
