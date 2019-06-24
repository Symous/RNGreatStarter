import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '@/settings';

interface ButtonProps {
    title?: string;
    icon?: any;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    hintColor?: string;
    titleStyle?: object;
    style?: object;
}
export default ({
    title,
    icon,
    loading = false,
    disabled = false,
    onPress,
    hintColor = 'white',
    titleStyle,
    style,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            disabled={disabled || loading}
            onPress={onPress}
        >
            {
                <View style={styles.content}>
                    {loading ? <ActivityIndicator color={hintColor} /> : icon || null}
                    <Text style={[styles.text, { color: hintColor }, titleStyle]}>{title}</Text>
                </View>
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});
