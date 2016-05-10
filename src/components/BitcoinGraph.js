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




export default class BitcoinGraph extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        console.log('testing')
        return (
       
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
           <View>
           	<Text>lick sack </Text>
           </View>
        </ScrollView>   
         
        )
    }
}

const styles = StyleSheet.create({
    

   

});

