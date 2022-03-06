import React from "react";
import CanvaIcon from "./CanvaIcon";
import CanvaNoIcon from "./CanvaNoIcon";

const Canva = (props) => {
    const { icon } = props;
    if (icon) {
        return <CanvaIcon {...props} />;
    }
    return <CanvaNoIcon {...props} />;
};

export default Canva;
