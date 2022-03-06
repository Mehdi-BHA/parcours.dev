import React from "react";
import Check from "../../../assets/images/check"
import ProgressBar from "./ProgressBar";

const Canva = (props) => {
    const {
        x,
        y,
        color,
        contrastTextColor,
        width,
        height,
        titleDivided,
        subtitleDivided,
        baseHeight,
        spaceBetweenLines,
        spaceBetweenTitleAndSub,
        progress,
        progressHeight,
        checked
    } = props;

    return (
        <g transform={`translate(${x},${y})`} className="canva">
            <rect x={0} y={0} width={width} height={height} fill={color} rx={5} className="canva-rect" />
            {titleDivided.map((elem, k) => {
                return (
                    <text
                        className="canva-title"
                        x={width / 2}
                        y={baseHeight / 2 + k * spaceBetweenLines}
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill={contrastTextColor}
                        key={k}
                    >
                        {elem}
                    </text>
                );
            })}
            {subtitleDivided.map((elem, k) => {
                return (
                    <text
                        className="canva-subtitle"
                        x={width / 2}
                        y={spaceBetweenTitleAndSub + baseHeight / 2 + (titleDivided.length + k) * spaceBetweenLines}
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill={contrastTextColor}
                        key={k}
                    >
                        {elem}
                    </text>
                );
            })}
            {checked && <Check width={30} height={30} x={width-40} y={10} />}
            {progress && (
                <ProgressBar
                    progress={progress}
                    width={width}
                    height={progressHeight}
                    x={0}
                    y={height - progressHeight}
                />
            )}
        </g>
    );
};

export default Canva;
