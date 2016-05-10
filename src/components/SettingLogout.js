
import React, {
    PropTypes,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Radio, {RadioButton} from 'react-native-simple-radio-button'


import Base from './Base';

import {mixins, colors} from '../styles';





export default class SettingLogout extends Base {
   
   
    
    render() {
    	
        return (
       
       <View style={styles.root}>
            <Text style={styles.text}>Logout</Text>
       </View>
         
        )
    }
}

const styles = StyleSheet.create({
    
	root:{
      
	   flex: 1,
       alignSelf: 'stretch',
       alignItems: 'center',
       justifyContent: 'center',
       height: 50


	},
    text:{
        color: colors.blue
    }
	
   

});

