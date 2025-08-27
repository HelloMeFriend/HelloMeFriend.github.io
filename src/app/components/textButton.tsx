import React from 'react';

interface TextButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const TextButton: React.FC<TextButtonProps> = ({ children, onClick, style }) => (
    <button
        className="custom-underline"
        onClick={onClick}
        style={{
            background: 'none',
            border: 'none',
            color: 'black',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'var(--font-andada-pro), serif',
            fontSize: '30px',
            boxShadow: `
                0px 1px 6px 0px rgba(87, 87, 87, 0.25),
                0px 4px 16px 0px rgba(0, 0, 0, 0.25) inset
            `,
            ...style,
            filter: "blur(.8px) url(#filter)",
            position: 'relative',
        }}
    >
        {children}
    </button>
);

export default TextButton;
