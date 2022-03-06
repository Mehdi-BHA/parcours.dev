const canvaProps = {
    color: "#82838D",
    contrastTextColor:"black",
    width: 300,
    baseHeight: 50,
    spaceBetweenLines: 20,
    spaceBetweenTitleAndSub: 10,
    progressHeight: 10,
    iconHeight: 70,
    iconTransform: 40,
};

const lineHeight = 60;
const strokeWidth = 2;
const color = "white";
const cardWidth = 300;
const spaceBetweenCards = 50;
const width = cardWidth * 3 + spaceBetweenCards * 2;
const mobileWidth = cardWidth * 2 + spaceBetweenCards;
const arcLength = 20;
const drawingProps = { cardWidth,lineHeight, strokeWidth, color, width, mobileWidth, arcLength,spaceBetweenCards };

const rectsProps = [
    { x: 0, y: lineHeight * 1.5, title: "frontend", subtitle: "Guide pour devenir développeur front-end en 2022" },
    {
        x: cardWidth + spaceBetweenCards,
        y: lineHeight * 1.5,
        title: "backend",
        subtitle: "Guide pour devenir développeur back-end en 2022",
    },
    {
        x: cardWidth * 2 + spaceBetweenCards * 2,
        y: lineHeight * 1.5,
        title: "devops",
        subtitle: "Guide pour devenir expert devops en 2022",
    },
];

const mobileRectsProps = [
    { title: "frontend", x: 0, y: lineHeight * 2 },
    { x: cardWidth / 2 + spaceBetweenCards / 2, y: lineHeight * 3, title: "backend" },
    { x: cardWidth + spaceBetweenCards, y: lineHeight * 2, title: "devops" },
];

export { canvaProps, drawingProps, rectsProps,mobileRectsProps };
