import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Input from '@/components/Input';
import { connect } from 'react-redux';

interface Props {
    dispatch: any;
    navigation: any;
}
class Login extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    login = () => {
        const { dispatch, navigation } = this.props;
        dispatch({
            type: 'userModel/login',
            payload: {
                username: 'rngs',
                password: '999',
            },
            callback: () => {
                navigation.navigate('Home');
            },
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Input placeholder="请输入用户名(rngs)" />
                <Input placeholder="请输入密码(999)" />
                <Button title="登录" onPress={this.login} />
            </View>
        );
    }
}

function mapStateToProps({ userModel }: any) {
    return {
        user: userModel,
    };
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
