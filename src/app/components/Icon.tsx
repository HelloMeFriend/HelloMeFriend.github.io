import React, { useEffect, useRef } from "react";

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
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.setProperty("--path-length", `${length}`);
    }
  }, []);

  return (
    <button
      className="group" // enables hover-based CSS animations
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
      <svg
        width={width}
        height={height}
        viewBox={`${x} ${y} ${width} ${height}`}
        fill="none"
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            typeof child.type === "string" &&
            child.type === "path"
          ) {
            return React.cloneElement(child as React.ReactElement<React.SVGProps<SVGPathElement>>, {
              ref: pathRef,
              className: "icon-stroke-hover",
            });
          }
          return child;
        })}
      </svg>
    </button>
  );
};

export default Icon;
