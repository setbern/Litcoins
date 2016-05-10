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


export default class GeneralSetting extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        console.log('testing')
        return (
       
        <View style={styles.root}>
            <Text style={styles.title}>General</Text>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}><Icon color="#2196F3" size={20} name='bell'/>   Push Notification</Text>
                </View>
                <Switch  style={styles.switch} />
            </View>
        </View>
         
        )
    }
}

const styles = StyleSheet.create({
    root:{
        marginTop: 20,
        ...mixins.column,
        alignSelf: "stretch",
        marginTop: 50,
    },
    title:{
        color: colors.blue,
        fontSize: 20,
        marginLeft: 10,
    },
    container:{
        alignItems: 'center',
        justifyContent: 'space-around',
        ...mixins.row,
        marginTop: 15,
    },
    textContainer:{
        flex: .5,
        
    },
    text:{
        marginLeft: 15,
        fontSize: 20
    },
    switch:{
        marginRight: 20,
    }

    
   

});

