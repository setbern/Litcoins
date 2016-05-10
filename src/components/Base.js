import React from 'react-native';

export default class Base extends React.Component {
    autoBind(...methods) {
        methods.forEach(method => this[method] = this[method].bind(this))
    }
}