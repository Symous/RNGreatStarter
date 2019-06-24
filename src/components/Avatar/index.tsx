import React from 'react';
import { Image } from 'react-native';
import { Colors } from '@/settings';

interface AvatarProps {
    // TODO: 这里不应该使用any类型
    img?: any;
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
