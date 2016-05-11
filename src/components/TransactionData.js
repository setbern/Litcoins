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





export default class TransactionData extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
       
        <View style={styles.root}>
          <View style={[styles.Iconcontainer, styles.container]}>
			<View style={styles.icon}>
				<Icon name='plus' size={18} color="#2196F3"/>
			</View>
          </View>
          <View style={[styles.Amountcontainer,styles.container]}>
			<Text style={styles.text}>$54.50</Text>
          </View>
          <View style={[styles.Typecontainer,styles.container]}>
			<Text style={styles.text}>Unlock</Text>
          </View>
          <View style={[styles.Timecontainer,styles.container]}>
			<Text style={styles.text}>2:19 PM</Text>          		
          </View>

        </View>  
         
        )
    }
}

const styles = StyleSheet.create({
    

  
   root:{
   	...mixins.row,
   	alignItems: 'center',
    justifyContent: 'space-around',
   },
   container:{
   		
   		alignItems: 'center',
        justifyContent: 'center',
        height: 80,
   },
   Iconcontainer:{
   	flex:1
   },
   Amountcontainer:{
    flex:1
	},
   Typecontainer:{
   	 flex:2
   	},
   Timecontainer:{
   	flex:1,
   	marginRight: 20
   },

   icon:{
   	height: 30,
   	width: 30,
   	borderRadius: 100,
   	
   	borderColor: colors.blue,
   	borderWidth: 3,
   	alignItems: 'center',
    justifyContent: 'space-around',
   },
   text:{
   	fontSize: 15,
   	color: colors.lightGrey
   }

});

