import React from 'react';
import { Image } from 'react-native';
import { Colors } from '@/settings';

interface AvatarProps {
    // TODO: require引入的资源使用number类型？
    img?: number;
    size?: number;
    style?: object;
}
export default ({ img, size = 60, style }: AvatarProps) => {
    const styles = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: Colors.gray,
    };
    return <Image source={img || require('./images/default_avatar.png')} style={[styles, style]} />;
};
