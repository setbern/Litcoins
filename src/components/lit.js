import React, {
    PropTypes,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Base from './Base';

import {mixins, colors} from '../styles';



export default class NavBar extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
       
        return (
       
        <View style={styles.root}>
        	
        	<Text>what whta</Text>
        </View> 
         
        )
    }
}

const styles = StyleSheet.create({
    
    root:{
        backgroundColor: colors.blue,
        
    },
   
   
});

