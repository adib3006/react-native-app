import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, Alert, Pressable, ScrollView } from 'react-native';
import photo from '../assets/cuate.png';
import pass from '../assets/pass.png';
import google from '../assets/google.png';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = () => {
        if(email.length <= 0){
            Alert.alert('Email required');
            return;
        }
        if(password.length <= 0){
            Alert.alert('Password Required');
            return;
        }
        navigation.navigate('Access');
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.img}>
                <Image source={photo} />
            </View>
            <View style={styles.centerSection}>
                <Text style={{ fontSize: 18, fontWeight: '800' }}>Login</Text>
                <View style={styles.email}>
                    <Text style={{ marginTop: 5, color: '#282828', opacity: 0.5 }}>@</Text>
                    <TextInput
                        onChange={text => setEmail(text)}
                        style={styles.input}
                        placeholder="E-mail ID"
                    />
                </View>
                <View style={styles.password}>
                    <Image source={pass} style={{ width: 12, height: 16, marginTop: 6 }} />
                    <TextInput
                        onChange={text => setPassword(text)}
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ marginTop: 10, marginBottom: 44 }}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#161616', textAlign: 'right', opacity: 0.4 }}>Forgot password</Text>
                </View>
                <Pressable style={styles.button} onPress={onSubmit}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 44, marginBottom: 35 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black', opacity: 0.2 }} />
                    <View>
                        <Text style={{ textAlign: 'center', marginHorizontal: 6, opacity: 0.5, fontSize: 14, fontWeight: '400' }}>OR</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black', opacity: 0.2 }} />
                </View>
                <Pressable style={styles.buttonGoogle} onPress={() => Alert.alert('Google pressed')}>
                    <Image style={{ width: 22, height: 22, marginRight: 12 }} source={google} />
                    <Text style={styles.textGoogle}>Login with Google</Text>
                </Pressable>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 56 }}>
                    <Text style={{ color: '#BDBDBD', fontSize: 14, fontWeight: '400', marginRight: 5 }}>Don’t have account?</Text>
                    <Text style={{ color: '#282828', fontSize: 16, fontWeight: '700' }}>Sign Up</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        marginTop: 65,
        width: '100%'
    },
    img: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    centerSection: {
        marginTop: 37
    },
    email: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 15
    },
    password: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 21
    },
    input: {
        paddingBottom: 10,
        width: '93%',
        borderBottomWidth: 1,
        marginLeft: 9,
        fontSize: 14,
        fontWeight: '600',
        color: '#282828',
        borderColor: '#cccccc'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '700',
        color: 'white',
    },
    buttonGoogle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        width: '100%',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#999999',
        marginBottom: 35
    },
    textGoogle: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '700',
        color: '#3C2700',
    },
});

export default Login;