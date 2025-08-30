import React from 'react';
import TextButton from '../textButton';

interface NavbarProps {
    onClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClick }) => (
    <div className="w-full flex flex-row justify-between items-start">
            <TextButton onClick={onClick}>About Me</TextButton>
            <TextButton onClick={onClick}>Experience</TextButton>
          </div>
);

export default Navbar;
