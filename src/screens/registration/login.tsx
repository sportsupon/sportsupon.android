import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View,TextInput } from 'react-native';
import { BaseView } from '../base'

export default class LoginView extends BaseView {

    render() {
        return <View style={styles.container}>
        <TextInput/>
        <TextInput/>
        <Text style={styles.bigBlue}>Login</Text><TouchableHighlight >
        <Text>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.regButtonMargin}><Text>Register</Text></TouchableHighlight></View>
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    regButtonMargin:{
       marginTop: 5,
    },
    container:{
      padding: 5,
    }
});