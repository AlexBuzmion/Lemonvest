import React, {useState} from 'react';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform,TouchableHighlight, ActivityIndicator, useColorScheme, Pressable} from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, Text } from '@/src/components/Themed';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LoginPage() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, username, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
            alert(`signed in with ${auth.currentUser?.email}` );
        }
        router.back();
    }

    return (
        <View style={[styles.container , colorScheme === 'light' ? {backgroundColor: 'white'} : {backgroundColor: '#1E1E1E'}]}>
            <View style={[styles.credentialsContainer]}>
                <View style={[{flex: .3} ,{flexDirection: 'row'}]}>
                    <Text style={[styles.headerText, styles.debug]}>Log In</Text>
                    <Pressable style={styles.closeButton} onPress={() => router.back()}>
                        <Ionicons name='close' size={30} color='gray'></Ionicons>
                    </Pressable>
                </View>
                <KeyboardAvoidingView style={[styles.inputContainer, styles.container, styles.debug]} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                    <Text style={styles.inputHeader}>Username or Email</Text>
                    <TextInput 
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize='none'
                        style={[styles.inputField]}
                        placeholder='  enter username or email'
                    />
                    <Text style={styles.inputHeader}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.inputField}
                        autoCapitalize='none'
                        placeholder='  enter password'
                        secureTextEntry={true}
                    />
                    {loading ? (
                        <ActivityIndicator size="large" color="#0000ff" /> 
                    ) : (
                            <>
                                <TouchableHighlight activeOpacity={0.6} underlayColor={'#333333'} onPress={signIn} style={styles.button} >
                                    <Text style={styles.buttonText} >Log In</Text>
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