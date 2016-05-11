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





export default class BtcDisplay extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
       
        <View style={styles.root}>
        	<View style={styles.container}>
        		<View style={styles.btcContainer}>
        			<Icon name='btc' color='#ffffff'size={90}/>
        		</View>
        	</View>
        	<View style={styles.textContainer}>
        		<Text style={styles.text}>Balance:</Text>
        		<Text style={styles.text}>0.4723</Text>
        		
        		<Text style={styles.text}>/$156.89</Text>
        	</View>
        </View>  
         
        )
    }
}

const styles = StyleSheet.create({
    

  
   root:{
   	backgroundColor: colors.blue,
   	flex:1,
   	height: 290,
   	alignItems:'center',
   	justifyContent: 'center'
   },
   container:{
   	width: 170,
   	height:170,
   	borderRadius: 100,
   	backgroundColor: colors.white,
   	borderColor: colors.yellow,
   	borderWidth: 8,
   	alignItems:'center',
   	justifyContent: 'center'
   },
   btcContainer:{
   	width: 115,
   	height: 115,
   	borderRadius: 100,
   	backgroundColor: colors.yellow,
   	alignItems:'center',
   	justifyContent: 'center'

   },
   textContainer:{
   	...mixins.row,
   	
   	width: 320,
   	alignItems:'center',
   	justifyContent: 'center',
   	marginTop: 30

   },
   text:{
   	fontSize: 25,
   	color: colors.white,
   	marginRight: 3
   }

});

