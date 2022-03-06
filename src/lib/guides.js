import path from "path";
import fs from "fs";

const careerGuidesPath = path.join(process.cwd(), "src", "content", "guides", "career");
const skillGuidesPath = path.join(process.cwd(), "src", "content", "guides", "skill");

const getGuides = (pathDir) => {
    const fileNames = fs.readdirSync(pathDir);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.json$/, "");
        const fullPath = path.join(pathDir, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf8");
        const parsedContent = JSON.parse(fileContent);
        return {
            id,
            ...parsedContent,
        };
    });
    return allPostsData;
};

const getCareerGuides = () => getGuides(careerGuidesPath);

const getSkillGuides = () => getGuides(skillGuidesPath);

const getGuide = (type, id) => {
    if (type === "career") {
        const fullPath = path.join(careerGuidesPath, `${id}.json`);
        const fileContent = fs.readFileSync(fullPath, "utf8");
        return JSON.parse(fileContent);
    }
    const fullPath = path.join(skillGuidesPath, `${id}.json`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(fileContent);
};

const getAllCareerGuidesIds = () => {
    const fileNames = fs.readdirSync(careerGuidesPath);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.json$/, ""),
            },
        };
    });
}

const getAllSkillGuidesIds = () => {
    const fileNames = fs.readdirSync(skillGuidesPath);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.json$/, ""),
            },
        };
    });
}

export { getCareerGuides, getSkillGuides, getGuide, getAllCareerGuidesIds,getAllSkillGuidesIds };
