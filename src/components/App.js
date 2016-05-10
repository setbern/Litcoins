import React, {
    PropTypes,
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import {
    Actions,
    Scene,
    Router
} from 'react-native-router-flux';
import Base from './Base';

// routes
import scenes from '../scenes';



export default class App extends Base {
   
    render() {
       
        return (
            <Router style={styles.router} scenes={scenes} />
        );
    }
}

const styles = StyleSheet.create({

    router:{
        backgroundColor: '#FFFFFF'
    }
});