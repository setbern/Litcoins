import React, {
    StyleSheet
} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import BitcoinGraph from './components/BitcoinGraph';
import SettingPage from './components/SettingPage';
import SendBTCDetail from './components/SendBTCDetail';
// components



const scenes = Actions.create(
    <Scene key='root'>

    	<Scene key="SendBTCDetail"
        	inital={true}
        	key='sendBTCDetail'
        	component={SendBTCDetail}
        	
        />  
        <Scene key='SettingPage' 
           
            key='settingPage'
            component={SettingPage} 
            hideNavBar
          
        /> 
        
       
    </Scene>
);

export default scenes;