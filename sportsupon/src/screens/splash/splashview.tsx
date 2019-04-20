import React, { Component } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import R from 'res/R'
import { BaseView } from '../base'

export default class SplashView extends BaseView {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2500)
    }

    render() {
        const { colors } = R
        console.log(colors.statusbar)
        return <SafeAreaView style={{ flex: 1, backgroundColor: colors.statusbar }}>
            <StatusBar
                backgroundColor={colors.statusbar} barStyle="light-content"
            />

        </SafeAreaView>
    }
}