import React, {useState} from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView,TouchableHighlight, ActivityIndicator, useColorScheme, Pressable} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { View, Text } from '@/src/components/Themed';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpPage() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, username, password);
            alert(`signed up with ${response.user.email} successfully`);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
            return;
        } finally {
            setLoading(false);
        }
        router.back();
    }

    return (
        <View style={[styles.container, colorScheme === 'light' ? {backgroundColor: 'white'} : {backgroundColor: '#1E1E1E'}]}>
            <View style={[styles.credentialsContainer]}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'} }>
                    <Text style={styles.headerText}>Sign Up</Text>
                    <Pressable 
                        style={styles.closeButton}
                        onPress={() => router.back()}
                    > 
                        <Ionicons name='close' size={30} color='gray'></Ionicons>
                    </Pressable>
                </View>
                <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                    <Text style={styles.inputHeader}>Username or Email</Text>
                    <TextInput 
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize='none'
                        style={[styles.inputField]}
                        placeholder=' enter username or email'
                    />
                    <Text style={styles.inputHeader}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.inputField}
                        autoCapitalize='none'
                        placeholder=' enter password'
                        secureTextEntry={true}
                    />
                    <Text style={styles.inputHeader}>Confirm Password</Text>
                    <TextInput
                        value={confPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.inputField}
                        autoCapitalize='none'
                        placeholder=' confirm password'
                        onFocus={placeholder=>''}
                        secureTextEntry={true}
                    />
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" /> 
                    ) : (
                            <>
                                <TouchableHighlight activeOpacity={0.6} underlayColor={'#333333'} onPress={signUp} style={styles.button} >
                                    <Text style={styles.buttonText} >Sign Up</Text>
                                </TouchableHighlight>
                            </>
                        )
                    }
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    credentialsContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        maxWidth: 430,
        maxHeight: 380,
        borderRadius: 12,
        margin: 40,
        borderColor: '#333333',
        borderWidth: .5
    },
    headerText: {
        flex: 1,
        fontSize:24,
        paddingTop: 30,
        paddingLeft:  30,
        textAlign: 'left',
        justifyContent: 'center'
    }, 
    inputField: {
        width: '100%',
        height: 40,
        borderWidth: .5,
        borderRadius: 10,
        backgroundColor: '#999999'
    }, 
    button: {
        alignSelf: 'center',
        width: '100%',
        fontSize: 20,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#FAD300',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
    inputHeader: {

        textAlign: 'left',
    },
    closeButton: {
        color: 'white', 
        padding: 20,
        justifyContent: 'flex-start',
    },
    inputContainer: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        justifyContent:'space-evenly',
        // justifyContent: 'center',
        alignItems: 'flex-start',
    },
    debug: {
        // borderWidth: .5,
        // borderColor: 'cyan',
        // borderStyle: 'dashed',
    },
})