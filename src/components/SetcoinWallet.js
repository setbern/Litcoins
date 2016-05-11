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


import BtcDisplay from './BtcDisplay';
import Transactions from './Transactions'


export default class SetcoinWallet extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
       
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          	<BtcDisplay />
          	<Transactions/>
        </ScrollView>   
         
        )
    }
}

const styles = StyleSheet.create({
    

   contentContainerStyle:{
    
   }

});

