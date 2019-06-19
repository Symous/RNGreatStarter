import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {}
export default class Home extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        const libs = ['React-Native', 'TypeScript', 'ESLint', 'React-Navigation', 'Dva'];
        return (
            <View style={styles.container}>
                {libs.map(item => (
                    <Text key={item} style={styles.text}>
                        {item}
                    </Text>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        margin: 5,
    },
});
