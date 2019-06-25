import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { connect } from 'react-redux';
import { Colors } from '@/settings';

const AVATAR_SIZE = 60;

interface Props {
    dispatch: any;
    navigation: any;
    userModel: any;
    loading: boolean;
}
interface State {
    name: string;
    username: string;
    password: string;
}
class Login extends Component<Props, State> {
    static navigationOptions = {
        header: null,
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: '',
        };
    }

    login = () => {
        const { dispatch, navigation } = this.props;
        const { username, password } = this.state;
        dispatch({
            type: 'userModel/login',
            payload: {
                username,
                password,
            },
            callback: (isSuccess: boolean) => {
                if (isSuccess) navigation.navigate('Home');
                else Alert.alert('注意', '登录失败了...');
            },
        });
    };

    register = () => {
        Alert.alert('注意', '不允许你进行注册...');
    };

    switchStatus = () => {
        const { dispatch, userModel } = this.props;
        dispatch({
            type: 'userModel/changeLoginStatus',
            payload: {
                status: userModel.status === 'register' ? 'logout' : 'register',
            },
        });
    };

    render() {
        const { userModel } = this.props;
        const registering = userModel.status === 'register';
        const { name, username, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                    <Text>
                        <Text style={styles.highlightText}>RN</Text>.
                        <Text style={styles.highlightText}>G</Text>reat.
                        <Text style={styles.highlightText}>S</Text>tarter
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <Avatar
                        size={AVATAR_SIZE}
                        img={registering ? null : require('./images/avatar.png')}
                        style={styles.avatar}
                    />
                    {registering && (
                        <Input
                            placeholder="你的名字是？"
                            value={name}
                            onChange={text => this.setState({ name: text })}
                        />
                    )}
                    <Input
                        placeholder="用户名(rngs)"
                        value={username}
                        onChange={text => this.setState({ username: text })}
                    />
                    <Input
                        placeholder="登录密码(999)"
                        value={password}
                        onChange={text => this.setState({ password: text })}
                        secure
                    />
                    <Button
                        style={styles.button}
                        title={registering ? '注册' : '登录'}
                        onPress={registering ? this.register : this.login}
                    />
                </View>
                <Text onPress={this.switchStatus} style={styles.link}>
                    {registering ? '返回登录' : '用户注册'}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ userModel, loading }: any) {
    return {
        userModel,
        loading: loading.models.userModel,
    };
}

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
    },
    logoContainer: {
        marginBottom: 80,
        alignItems: 'center',
    },
    logo: {
        height: 45,
        width: 45,
    },
    formContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        shadowColor: 'gray',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        width: '85%',
        maxWidth: 400,
        height: 230,
    },
    button: {
        height: 34,
        position: 'absolute',
        bottom: -17,
        borderRadius: 17,
    },
    avatar: {
        position: 'absolute',
        top: -AVATAR_SIZE / 2,
    },
    link: {
        marginTop: 50,
        fontWeight: 'bold',
    },
    highlightText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
