import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BaseView } from '../base'

export default class LoginView extends BaseView {

    render() {
        return <View ><Text style={styles.bigBlue}>Login</Text><Button title='login' /></View>
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
});