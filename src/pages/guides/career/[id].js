import React from "react";
import Guide from "../../../components/Guide";
import { getAllCareerGuidesIds, getGuide } from "../../../lib/guides";

const CareerGuide = ({ data }) => {
    return <Guide data={data} />;
};

export const getStaticPaths = async () => {
    const paths = getAllCareerGuidesIds();
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const data = getGuide("career", params.id);
    return {
        props: {
            data,
        },
    };
};

export default CareerGuide;
