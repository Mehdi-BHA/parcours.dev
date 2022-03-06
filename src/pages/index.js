import Goal from "../components/home/Goal";
import Header from "../components/home/Header";
import JoinUs from "../components/home/JoinUs";
import Reviews from "../components/home/Reviews";
import StartNow from "../components/home/StartNow";
import WhyWorks from "../components/home/WhyWorks";
import Layout from "../components/Layout";
import { getCareerGuides, getSkillGuides } from "../lib/guides";

const Home = ({ careerGuides, skillGuides }) => {
    return (
        <Layout>
            <Header />
            <WhyWorks />
            <Goal careerGuides={careerGuides} skillGuides={skillGuides} />
            <JoinUs />
            <Reviews />
            <StartNow />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const careerGuides = getCareerGuides();
    const skillGuides = getSkillGuides();
    return {
        props: {
            careerGuides: careerGuides.map(guide=>({...guide, author:"guidely.me team"})),
            skillGuides: skillGuides.map(guide=>({...guide, author:"guidely.me team"})),
        },
    };
};

export default Home;
