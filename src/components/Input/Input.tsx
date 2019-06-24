import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '@/settings';

interface Props {
    placeholder: string;
    value?: string;
    onChange?: (text: string) => void;
    secure?: boolean;
    style?: object;
}
export default ({ placeholder, value, onChange, secure, style }: Props) => {
    const [secret, setSecret] = useState(secure);
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, { ...style }]}
                onChangeText={text => {
                    if (onChange) {
                        onChange(text);
                    }
                }}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secret}
            />
            {secure && (
                <Icon
                    name={secret ? 'eye' : 'eye-slash'}
                    style={styles.suffix}
                    size={18}
                    onPress={() => setSecret(!secret)}
                    color={Colors.gray}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        justifyContent: 'center',
    },
    input: {
        height: 38,
        textAlign: 'center',
    },
    suffix: {
        position: 'absolute',
        right: 0,
    },
});
