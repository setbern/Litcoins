import React, {
    PropTypes,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Switch,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Base from './Base';



import {mixins, colors} from '../styles';



export default class TransactionDetail extends Base {
   
    constructor(props) {
        super(props);
        this.state ={
            borderBottomColor: '#9c9c9c'
        }
    }
    
    onFocus(){
        this.setState({
            borderBottomColor: colors.blue
        })
    }

    render() {
        const color = {
            borderBottomColor: this.props.isFocused ? colors.blue : colors.gray
        };
        return (
       
        <View style={styles.root}>
            
            <View style={styles.container}>
                <Text style={styles.text}>To:</Text>
                <TextInput multiline={true} placeholder='email or btc address' 
                 borderBottomColor={this.state.borderBottomColor}
                onFocus={ () => this.onFocus()}
                style={styles.TextInput}/>
            </View>



            <View style={styles.container}>
                <Text style={styles.text}>Amount:</Text>
                <TextInput multiline={true} placeholder='$00.00' 
                borderBottomColor={this.state.borderBottomColor}
                onFocus={ () => this.onFocus()}
                style={styles.TextInput}/>
            </View>

           <View style={styles.container}>
                <Text style={styles.text}>Note</Text>
                <TextInput  
                multiline={true} placeholder='optional' 
                 borderBottomColor={this.state.borderBottomColor}
                onFocus={ () => this.onFocus()}
                style={styles.TextInput}/>
            </View>
        	<View style={styles.send}>
                <Text style={styles.sendText}>Send</Text>
            </View>
        </View> 
         
        )
    }
}

const styles = StyleSheet.create({
    root:{
        height: 400,
        alignItems: 'center',
        justifyContent: 'space-around',
        ...mixins.row
       
    },
    container:{
        marginBottom: 50,
       ...mixins.row,
      
        width: 250,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        
    },
    text:{
        fontSize: 20
    },
    TextInput:{
        paddingTop: 4,
        marginLeft: 4,
        height: 30, 
        width: 100, 
        borderBottomWidth: 2,
        
        flex:1,
        fontSize: 17,

        
    },
    send:{
        marginTop: 70,
        backgroundColor: colors.blue,
        width: 280,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    sendText:{
        color: colors.white,
        fontSize: 22
    }
   
   
});

