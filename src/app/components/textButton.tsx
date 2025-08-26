import React from 'react';

interface TextButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const TextButton: React.FC<TextButtonProps> = ({ children, onClick, style }) => (
    <button
        onClick={onClick}
        style={{
            background: 'none',
            border: 'none',
            color: 'black',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-andada-pro), serif', // Use Andada SC
            fontSize: '60px',
            ...style,
            filter: "blur(.8px) url(#filter)",
        }}
    >
        {children}
    </button>
);

export default TextButton;