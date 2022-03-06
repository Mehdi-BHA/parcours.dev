import React from "react";
import { canvaProps } from "../../constants/canvas";
import generateCanva from "../generateCanva";
import Diagram from "./components/Diagram";

const generateDiagram = (props) => {
    const {
        content,
        params
    } = props;
    console.log("diagram", content)

        const childrenLength = content.children.length;
        
        // content
        const middleIndex = Math.round(childrenLength / 2);
        
        // Handle content
        const left = content.children.slice(0, middleIndex).map((elem) => {
            return generateCanva({ ...elem, ...canvaProps, width: params.children.width });
        });
        const right = content.children
        .slice(middleIndex, childrenLength)
        .map((elem) =>
        generateCanva({ ...elem, ...canvaProps, width: params.children.width })
        );
        const parent = generateCanva({
            ...content.parent,
            ...canvaProps,
            width: params.parent.width,
        });
        
        // Container dimensions
        const containerWidth =
    
        params.children.width * 2 + params.parent.width + params.spacing.betweenCanvas * 2;

    const leftHeight =
        left.reduce((prev, acc) => prev + acc.height, 0) +
        (left.length > 1 ? left.length - 1 : 0) * params.spacing.verticalBetweenCanvas;

    const rightHeight =
        right.reduce((prev, acc) => prev + acc.height, 0) +
        (right.length > 1 ? right.length - 1 : 0) * params.spacing.verticalBetweenCanvas;

    const containerHeight = Math.max(leftHeight, rightHeight, parent.height);
    
    return {
        height: containerHeight,
        component: (props) => (
            <Diagram
                containerWidth={containerWidth}
                containerHeight={containerHeight}
                left={left}
                right={right}
                parent={parent}
                spaceBetweenCanvas={params.spacing.betweenCanvas}
                childrenWidth={params.children.width}
                verticalSpaceBetweenCanvas={ params.spacing.verticalBetweenCanvas}
                parentWidth={params.parent.width}
                rightHeight={rightHeight}
                leftHeight={leftHeight}
                {...props}
            />
        ),
    };
};

{
    /* All lines */
}
{
    /* {left.map((elem, k) => (
        <path
                        key={k}
                        d={`M${canvaWidth} ${
                            left.slice(0, k).reduce((prev, acc) => prev + acc.height + 20, 0) + elem.height / 2
                        } L${canvaWidth + spaceBetweenCanvas + 10} ${containerHeight / 2}`}
                        stroke="white"
                        fill="transparent"
                    />
                ))}
                {right.map((elem, k) => (
                    <path
                        key={k}
                        d={`M${2 * canvaWidth + 2 * spaceBetweenCanvas} ${
                            right.slice(0, k).reduce((prev, acc) => prev + acc.height + 20, 0) + elem.height / 2
                        } L${2 * canvaWidth + spaceBetweenCanvas - 10} ${containerHeight / 2}`}
                        stroke="white"
                        fill="transparent"
                    />
                ))} */
}

export default generateDiagram;
