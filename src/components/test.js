import React, {
    PropTypes,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Switch,
    ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Base from './Base';

import {mixins, colors} from '../styles';


import SendAmount from './SendAmount';
import TransactionDetails from './TransactionDetails';


export default class test extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        console.log('testing')
        return (
       
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
           <Text>TEstomg</Text>

        </ScrollView>   
         
        )
    }
}

const styles = StyleSheet.create({
    

   contentContainerStyle:{
    
   }

});

