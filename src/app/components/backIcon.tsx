import React from 'react';
import Icon from './Icon';

interface BackIconProps {
    onClick?: () => void;
}

const BackIcon: React.FC<BackIconProps> = ({ onClick }) => (
    <Icon
        width={50}
        height={50}
        onClick={onClick}
        className="absolute z-30 cursor-pointer"
    >
        <path d="M25 3.75 a21.25 21.25 0 1 0 21.25 21.25 A21.2325 21.2325 0 0 0 25 3.75 Z m0 37.5 a16.25 16.25 0 1 1 16.25 -16.25 A16.2175 16.2175 0 0 1 25 41.25 Z M29.125 14.375 a2.4175 2.4175 0 0 0 -3.5 0 L18.5 21.5 a4.98 4.98 0 0 0 0 7.125 L25.625 35.75 a2.475 2.475 0 0 0 3.5 -3.5 l-7 -7.25 L29.25 17.875 C30.125 17 30.125 15.375 29.125 14.375 Z" stroke="rgb(30,30,30)" strokeWidth="1.5" fill="black" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
);

export default BackIcon;
