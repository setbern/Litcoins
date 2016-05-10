
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Radio, {RadioButton} from 'react-native-simple-radio-button'


import Base from './Base';

import {mixins, colors} from '../styles';





export default class CurrencySetting extends Base {
   
   
    
    render() {
    	var radio_props = [
		  {label: '', value: 0 }
		 
		];
        console.log('testing')
        return (
       
       <View style={styles.root}>
         	<View style={styles.container}>
            <View style={styles.textContainer}>
             	<Text style={styles.text}><Icon color="#2196F3" size={24} name="dollar"/>   Default Currency
              </Text>
            </View> 	
         	</View >

         	<View style={styles.container}>
            <View style={styles.textContainer}>
             	<Text style={styles.text}><Icon color="#2196F3" size={24} name="bitcoin"/>   Bitcoin
              </Text>
            </View>
           	<Radio  radio_props={radio_props} initial={0} buttonColor={'#2196F3'} />      		
         	</View>

         	<View style={styles.container}>
            <View style={styles.textContainer}>
             	<Text style={styles.text}><Icon color="#2196F3" size={24} name="dollar"/>   Satoshi
              </Text>
            </View>
           	<Radio radio_props={radio_props} initial={0} buttonColor={'#2196F3'} />      		
         	</View>
       </View>
         
        )
    }
}

const styles = StyleSheet.create({
    
	root:{
        marginTop: 10,
        height: 159,		
		...mixins.column,
		borderColor: '#e3e3e3',
		borderTopWidth: 5,
		borderBottomWidth: 5,
		

	},
	container:{
        alignItems: 'center',
        justifyContent: 'space-around',
        ...mixins.row,
        marginTop: 15,
	},
  textContainer:{
    flex: 3,
    
  },
	text:{
		 marginLeft: 15,
        fontSize: 20
	}
   

});

