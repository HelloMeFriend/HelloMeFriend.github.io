import React from "react";

interface IconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({
  x = 0,
  y = 0,
  width = 32,
  height = 32,
  children,
  style,
  ...buttonProps
}) => (
  <button
    style={{
      display: "inline-flex",
      alignItems: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      ...style,
    }}
    {...buttonProps}
  >
    <svg width={width} height={height} viewBox={`${x} ${y} ${width} ${height}`} fill="none">
      {children}
    </svg>
  </button>
);

export default Icon;