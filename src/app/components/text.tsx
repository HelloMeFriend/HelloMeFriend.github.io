import React from 'react';

interface TextProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    size?: 'large' | 'medium' | 'small' | 'ms';
    className?: string;
}

const Text: React.FC<TextProps> = ({ children, style, size = 'large', className = '' }) => {
    // Define responsive text sizes - using custom sizes to match your original values
    const getSizeClasses = (size: string) => {
        switch (size) {
            case 'large':
                return 'text-xl md:text-2xl lg:text-[30px]'; // 20px -> 24px -> 30px
            case 'medium':
                return 'text-lg md:text-xl lg:text-[28px]'; // 18px -> 20px -> 28px
            case 'ms':
                return 'text-base md:text-lg lg:text-[24px]'; // 16px -> 18px -> 24px
            case 'small':
                return 'text-sm md:text-base lg:text-[20px]'; // 14px -> 16px -> 20px
            default:
                return 'text-xl md:text-2xl lg:text-[30px]';
        }
    };

    return (
        <span
            className={`
                text-black font-serif
                ${getSizeClasses(size)}
                ${className}
            `}
            style={{
                fontFamily: 'var(--font-andada-pro), serif',
                boxShadow: `
                    0px 1px 6px 0px rgba(87, 87, 87, 0.25),
                    0px 4px 16px 0px rgba(0, 0, 0, 0.25) inset
                `,
                filter: "blur(.8px) url(#filter)",
                ...style,
            }}
        >
            {children}
        </span>
    );
};

export default Text;