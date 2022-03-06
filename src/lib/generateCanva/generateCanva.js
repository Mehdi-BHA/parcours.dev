import _ from "lodash";
import Canva from "./components/Canva";
import { divideStringIntoLines } from "../../utils/strings";

const generateCanva = ({ title, subtitle, ...rest }) => {
    const titleDivided = divideStringIntoLines(_.upperFirst(title), Math.floor(rest.width / 10));
    const subtitleDivided = subtitle ? divideStringIntoLines(_.upperFirst(subtitle), Math.floor(rest.width / 10)) : [];

    const height =
        rest.baseHeight +
        rest.spaceBetweenLines * (titleDivided.length - 1) +
        rest.spaceBetweenLines * subtitleDivided.length +
        rest.spaceBetweenTitleAndSub * (subtitle ? 1 : 0) +
        rest.progressHeight * (rest.progress ? 1 : 0) 

    return {
        height,
        component: (props) => (
            <Canva {...rest} height={height} titleDivided={titleDivided} subtitleDivided={subtitleDivided} {...props} />
        ),
    };
};

export default generateCanva ;
