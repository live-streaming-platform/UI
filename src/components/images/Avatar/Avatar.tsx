import React from 'react';
import './style.css'

type AvatarImageProps = {
    image?: any
    type?: 'sm' | 'lg'
}

const Avatar = ({image, type = 'sm'}: AvatarImageProps) => {
    return (
        <div className={`avatar-image ${type}`}>
        </div>
    );
};

export default Avatar;