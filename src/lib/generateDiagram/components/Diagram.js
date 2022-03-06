import React from "react";

const Diagram = (props) => {
    const {
        containerWidth,
        containerHeight,
        left,
        right,
        parent,
        spaceBetweenCanvas,
        childrenWidth,
        verticalSpaceBetweenCanvas,
        parentWidth,
        rightHeight,
        leftHeight,
    } = props;

    const { component: CanvaParent } = parent;

    return (
        <g
            transform={`translate(${props.x},${props.y})`}
            width={containerWidth}
            height={containerHeight}
            fill="none"
            {...props}
        >
            {/* left children */}
            {/* {left.map((elem, k) => (
                    <path
                        key={k}
                        d={`M${childrenWidth} ${
                            left
                                .slice(0, k)
                                .reduce(
                                    (prev, acc) => prev + acc.height + 20,
                                    0
                                ) +
                            elem.height / 2
                        } L${childrenWidth + spaceBetweenCanvas + 10} ${
                            containerHeight / 2
                        }`}
                        stroke="white"
                        fill="transparent"
                    />
                ))} */}
            <g
                transform={`translate(0,${
                    leftHeight < containerHeight
                        ? (containerHeight - leftHeight) / 2
                        : 0
                })`}
            >
                {left.map((elem, k) => {
                    const { component: Canva } = elem;
                    return (
                        <Canva
                            key={k}
                            x={0}
                            y={left
                                .slice(0, k)
                                .reduce(
                                    (prev, acc) =>
                                        prev +
                                        acc.height +
                                        verticalSpaceBetweenCanvas,
                                    0
                                )}
                        />
                    );
                })}
            </g>
            {/* parent canva */}
            <CanvaParent
                icon={true}
                x={childrenWidth + spaceBetweenCanvas}
                y={containerHeight / 2 - parent.height / 2}
            />
            {/* right children */}
            <g
                transform={`translate(0,${
                    rightHeight < containerHeight
                        ? (containerHeight - rightHeight) / 2
                        : 0
                })`}
            >
                {right.map((elem, k) => {
                    const { component: Canva } = elem;
                    return (
                        <Canva
                            key={k}
                            x={
                                childrenWidth +
                                parentWidth +
                                spaceBetweenCanvas * 2
                            }
                            y={right
                                .slice(0, k)
                                .reduce(
                                    (prev, acc) =>
                                        prev +
                                        acc.height +
                                        verticalSpaceBetweenCanvas,
                                    0
                                )}
                        />
                    );
                })}
            </g>
        </g>
    );
};

export default Diagram;
