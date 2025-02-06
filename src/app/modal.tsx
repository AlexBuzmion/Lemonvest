import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/src/components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
        
        <TextInput 
            style={styles.inputField}
            placeholder='Search'
            placeholderTextColor='#333333'
            autoCapitalize='none'
            numberOfLines={1}
            multiline={false}
            
        >
        
        </TextInput>
        <Pressable style={{}}>
            <Text>Cancel</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    padding: 10,
  }, 
  inputField: {
    flex: 1,
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: '#999999',
  }
});
