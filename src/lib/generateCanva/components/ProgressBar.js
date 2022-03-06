import React from "react";

const ProgressBar = ({ progress, width, height, ...rest }) => {
    const progressLength = width * progress;
    return (
        <svg width={width} height={height} {...rest}>
            <rect width={progressLength} height={height} x={0} y={0} fill="green" />
            <rect width={width - progressLength} height={height} x={progressLength} y={0} fill="grey" />
        </svg>
    );
};

export default ProgressBar;
