import { View, Text } from '@/src/components/Themed';
import { Link } from 'expo-router';
import { Image, Pressable, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Color from '@/src/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
export default function RegisterCTA() {
    return (
        <View style={styles.container}>
            
            <Link asChild href='/login'>
                <TouchableOpacity>
                    <Ionicons name="lock-closed-outline" size={28} color='gray'/>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        justifyContent: 'center',
        marginRight: 5,
        height: 50,
        width: 50,
        // borderWidth: .2, 
        // borderColor: 'cyan',
        // borderStyle: 'dashed',
    },
})