import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
    placeholder: string;
    value?: string;
    onChange?: (text: string) => void;
    style?: object;
}
export default (props: Props) => {
    const { placeholder, value, onChange, style } = props;
    return (
        <TextInput
            style={[styles.container, { ...style }]}
            onChangeText={text => {
                if (onChange) {
                    onChange(text);
                }
            }}
            value={value}
            placeholder={placeholder}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 200,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#bdbdbd',
        textAlign: 'center',
    },
});
