import React, {
    StyleSheet
} from 'react-native';
import {Actions, NavBar, Scene, Router} from 'react-native-router-flux';

import BitcoinGraph from './components/BitcoinGraph';
import SettingPage from './components/SettingPage';
import SendBTCDetail from './components/SendBTCDetail';
import lit from './components/lit';
import test from './components/test';
import SetcoinWallet from './components/SetcoinWallet';
// components



const scenes = Actions.create(
   
    <Scene  key='root'>
       
         
        <Scene key="SendBTCDetail"
            
            key='sendBTCDetail'
            component={SendBTCDetail}
            initial={true}

            
        />  
        <Scene key='Setcoinwallet'
            component={SetcoinWallet}
            hideNavBar={true}
            />

        <Scene key='SettingPage' 
           
            key='settingPage'
            component={SettingPage} 
            hideNavBar
            
        /> 
        

       
    </Scene>
  
);

export default scenes;