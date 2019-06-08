import React, { Component } from 'react';
import { Text} from 'react-native';
import { BaseView } from '../base'

export default class DashboardView extends BaseView {

    render() {
        return <Text style={{color:'green'}}>Welcome to sportsupon</Text>
        
    }
}