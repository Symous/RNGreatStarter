import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ComponentCounter from '@/components/ComponentCounter';
import HookCounter from '@/components/HookCounter';

interface Props {}
export default class Home extends Component<Props> {
    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <ComponentCounter title="ComponentCounter" />
                <HookCounter title="Hook Counter" />
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
});
