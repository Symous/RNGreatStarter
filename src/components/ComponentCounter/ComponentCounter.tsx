import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

interface Props {
    title: string;
    //  字符串索引签名，表示接口可以有任意数量的属性，只要他们不是之前定义的就好
    [propName: string]: any;
}

interface State {
    count: number;
}

export default class ComponentCounter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { count } = this.state;
        const { title } = this.props;
        return (
            <View>
                <Text style={styles.title}>{title}</Text>
                <Button
                    title={`Click ${count} times`}
                    onPress={() => {
                        this.setState({
                            count: count + 1,
                        });
                    }}
                />
            </View>
        );
    }
}
