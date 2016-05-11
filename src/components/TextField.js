import React, {
    PropTypes,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Base from './Base';
import Icon from 'react-native-vector-icons/Ionicons';
import TextFieldUnderline from './TextFieldUnderline';
import TextFieldHint from './TextFieldHint';

import * as fonts from '../fonts';

import {mixins, colors} from '../styles';

const {
    any,
    bool,
    func,
    object,
    oneOf,
    string
} = PropTypes;

export default class TextField extends Base {
    static propTypes = {
        autoCapitalize: oneOf(['none', 'sentences', 'words', 'characters']),
        autoCorrect: bool,
        autoFocus: bool,
        hintText: string,
        keyboardType: oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']),
        onChangeText: func,
        onSubmitEditing: func,
        name: string.isRequired,
        placeholder: string,
        returnKeyType: oneOf(['default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call']),
        secureTextEntry: bool,
        style: object,
        value: any
    }
    static defaultProps = {
        returnKeyType: 'next',
        autoCorrect: false,
        autoCapitalize: 'none',
        type: 'TextField'
    }
    static contextTypes = {
        update: func,
        values: object
    }
    constructor(props, context) {
        super(props, context);
        this.autoBind('handleBlur', 'handleChangeText', 'handleFocus', 'handleSubmitEditing', 'renderHint');
        this.state = {
            isFocused: false,
            value: props.value
        };
    }
    handleBlur(e) {
        this.setState({ isFocused: false });
        if(this.props.onBlur) {
            this.props.onBlur(e);
        }
    }
    handleFocus(e) {
        this.setState({ isFocused: true });
        if(this.props.onFocus) {
            this.props.onFocus(e);
        }
    }
    handleChangeText(value) {
        this.setState({value});
        if(this.props.onChangeText) {
            this.props.onChangeText(value);
        }
    }
    handleSubmitEditing(e) {
        // const text = e.nativeEvent.text;

        // if(this.props.onSubmitEditing) {
        //     this.props.onSubmitEditing(text);
        // }
    }
    renderHint() {
        if(this.props.hintText !== undefined) {
            return <TextFieldHint show={true} text={this.props.hintText} />
        }
    }
    render() {
        let iconElement;
        const {
            autoCapitalize,
            autoCorrect,
            autoFocus,
            icon,
            keyboardType,
            multiline,
            name,
            placeholder,
            secureTextEntry,
            style,
            type
        } = this.props;

        if(icon) {
            iconElement = <Icon name={icon} style={styles.icon}/>
        }

        return (
            <View style={[styles.root, style]}>
                {iconElement}
                <View style={{...mixins.column}}>
                    {this.renderHint()}
                    <TextInput
                        autoCapitalize={autoCapitalize}
                        autoCorrect={autoCorrect}
                        autoFocus={autoFocus}
                        keyboardType={keyboardType}
                        multiline={multiline}
                        name={name}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChangeText}
                        onFocus={this.handleFocus}
                        onSubmitEditing={this.handleSubmitEditing}
                        placeholder={placeholder}
                        placeholderTextColor={colors.gray}
                        secureTextEntry={secureTextEntry}
                        style={[styles.input]}
                        type={type}
                        value={this.state.value}
                    />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        ...mixins.row,
        alignItems: 'center',
        margin: 8
    },
    input: {
        ...fonts.text,
        width: 256,
        height: 24,
        fontSize: 16
    },
    icon: {
        fontSize: 24,
        color: colors.gray,
        marginRight: 16,
        marginTop: -16
    }
});