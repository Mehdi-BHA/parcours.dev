import React from "react";

const SVGContainer = ({ children, padding, width, height, ...rest }) => {
    return (
        <svg
            {...rest}
            width={width + padding * 2}
            height={height + padding * 2}
        >
            <g transform={`translate(${padding},${padding})`}>{children}</g>
        </svg>
    );
};

export default SVGContainer;
