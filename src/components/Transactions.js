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
import Icon from 'react-native-vector-icons/FontAwesome';

import {mixins, colors} from '../styles';

import TransactionData from './TransactionData';




export default class BtcDisplay extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
       
        <View style={styles.root}>
          <Text style={styles.title}>Transactions</Text>
          <View>
          	<TransactionData />
            <TransactionData />
            <TransactionData />
            <TransactionData />
            <TransactionData />



          </View>  

        </View>  
         
        )
    }
}

const styles = StyleSheet.create({
    

  
   root:{
   	flex:1,

   },
   title:{
    marginLeft: 17,
    color: colors.blue,
    fontSize: 20,
    marginTop: 15
   }
   

});

