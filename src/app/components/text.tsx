import React from 'react';

interface TextProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    size?: 'large' | 'medium' | 'small';
}

const Text: React.FC<TextProps> = ({ children, style, size = 'large' }) => (
    <span
        style={{
            color: 'black',
            fontFamily: 'var(--font-andada-pro), serif',
            fontSize:
                size === 'large' ? '30px' :
                size === 'medium' ? '28px' :
                '20px',
            ...style,
            boxShadow: `
                0px 1px 6px 0px rgba(87, 87, 87, 0.25), /* Outside shadow */
                0px 4px 16px 0px rgba(0, 0, 0, 0.25) inset /* Inner shadow */
            `,
            filter: "blur(.8px) url(#filter)",
        }}
    >
        {children}
    </span>
);

export default Text;