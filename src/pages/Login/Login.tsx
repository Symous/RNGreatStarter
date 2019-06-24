import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { connect } from 'react-redux';
import { Colors } from '@/settings';

const AVATAR_SIZE = 60;

interface Props {
    dispatch: any;
    navigation: any;
    loading: boolean;
}
interface State {
    registering: boolean;
    name: string;
    userName: string;
    password: string;
}
class Login extends Component<Props, State> {
    static navigationOptions = {
        header: null,
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            registering: false,
            name: '',
            userName: '',
            password: '',
        };
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
        const { registering, name, userName, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('./images/logo.png')} style={styles.logo} />
                    <Text>RN.Great.Starter</Text>
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
                        value={userName}
                        onChange={text => this.setState({ userName: text })}
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
                        onPress={this.login}
                    />
                </View>
                <Text
                    onPress={() => this.setState({ registering: !registering })}
                    style={styles.link}
                >
                    {registering ? '返回登录' : '用户注册'}
                </Text>
            </View>
        );
    }
}

function mapStateToProps({ userModel, loading }: any) {
    return {
        user: userModel,
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
});
