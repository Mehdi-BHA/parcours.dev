import React from "react";
import generateDiagram from "../lib/generateDiagram";
import SVGContainer from "./SVGContainer";

const Guide = ({ data }) => {
    const params = {
        spacing: {
            betweenCanvas: 50,
            betweenDiagrams: 40,
            verticalBetweenCanvas: 5,
        },
        parent: { width: 300 },
        children: { width: 250 },
    };

    const diagrams = data.guide.map((elem) =>
        generateDiagram({ content: elem, params: params })
    );

    const width =
        params.children.width * 2 +
        params.spacing.betweenCanvas * 2 +
        params.parent.width;
    const height =
        params.spacing.betweenDiagrams *
            (diagrams.length > 1 ? diagrams.length - 1 : 0) +
        diagrams.reduce((acc, current) => acc + current.height, 0);

    const positions = diagrams.map((elem, k) => {
        const max = 20;;
        return Math.floor(Math.random() * max * ((k % 2) * 2 - 1));
    });console.log(positions)
    return (
        <SVGContainer
            style={{
                display: "block",
                margin: "0 auto",
                // border: "1px solid red",
            }}
            width={width}
            height={height}
            padding={100}
        >
            {diagrams.map((elem, k) => {
                const { component: Diagram } = elem;
                return (
                    <Diagram
                        key={k}
                        x={positions[k]}
                        y={diagrams
                            .slice(0, k)
                            .reduce(

                            
                                (acc, current) =>
                                    acc +
                                    current.height +
                                    params.spacing.betweenDiagrams,
                                0
                            )}
                    />
                );
            })}
        </SVGContainer>
    );
};

export default Guide;
