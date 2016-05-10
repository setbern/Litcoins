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

import {mixins, colors} from '../styles';

import GeneralSetting from './GeneralSetting';
import CurrencySetting from './CurrencySetting';
import CommunitySetting from './CommunitySetting';
import SettingLogout from './SettingLogout';

export default class SettingPage extends Base {
   
    constructor(props) {
        super(props);
        
    }
    
    render() {
        console.log('testing')
        return (
       
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
           <GeneralSetting/>
           <CurrencySetting />
           <CommunitySetting />
           <SettingLogout />
        </ScrollView>   
         
        )
    }
}

const styles = StyleSheet.create({
    

   contentContainerStyle:{
    backgroundColor: colors.white
   }

});

