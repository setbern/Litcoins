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

import Base from './Base';

import {mixins, colors} from '../styles';



export default class SendAmount extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
       
        return (
       
        <View style={styles.root}>
        	
        	<View style={styles.container} >
        		<Text style={styles.amount}><Icon name='usd' size={35}/> 126.36</Text>
        	</View>
        </View> 
         
        )
    }
}

const styles = StyleSheet.create({
    
    root:{
    	backgroundColor: colors.blue,
    	alignSelf: 'stretch',
    	height: 115,
    	alignItems: 'center',
    	justifyContent:'center'
    },
    container:{
    	width: 160,
    	height: 60,
    	alignItems: 'center',
    	justifyContent:'center',
    	borderColor: colors.white,
    	borderBottomWidth: 3

    },
    amount:{
    	fontSize: 35,
    	color: colors.white	
    }

   
});

