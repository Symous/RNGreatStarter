import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';

interface Props {
    title: string;
}
const HookCounter = ({ title }: Props) => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Button
                title={`Click ${count} times`}
                onPress={() => {
                    setCount(count + 1);
                }}
            />
        </View>
    );
};

export default HookCounter;
