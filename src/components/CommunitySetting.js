
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


export default class CommunitySetting extends Base {
   
   
    
    render() {
        console.log('testing')
        return (
       
       <View style={styles.root}>
        <Text style={styles.titile}>Community</Text>
        <View style={styles.container}>
            <Text style={styles.text}>Share (Free BTC)</Text>
            <Icon style={styles.icon} name='share-alt' color="#2196F3" size={24} />
        </View>
        <View style={[styles.container, styles.borderTopAndBottom]}>
            <Text style={styles.text}>Facebook Group</Text>
            <Icon style={styles.icon} name='share-alt' color="#2196F3" size={24} />
        </View>
        <View style={[styles.container, styles.borderBottom]}>
            <Text style={styles.text}>Contact</Text>
            <Icon style={styles.icon} name='envelope' color="#2196F3" size={24} />
        </View>
       </View>
         
        )
    }
}

const styles = StyleSheet.create({
    
    root:{
        marginTop: 20,
        ...mixins.column

    },
    titile:{
         marginLeft: 15,
         color: colors.blue,
         fontSize: 17,
         marginBottom: 13
    },
    container:{
        height: 50,
        
        ...mixins.row,
         alignItems: 'center',
        justifyContent: 'space-between',

        
       
    },
    text:{
        marginLeft: 15,
        fontSize: 16
    },
    icon:{
        marginRight: 10
    },
    borderTopAndBottom:{
         borderColor: '#e3e3e3',
        borderTopWidth: 3,
        borderBottomWidth: 3,
    },
    borderBottom:{
        borderBottomWidth: 5,
        borderColor: '#e3e3e3',

    }
   

});

