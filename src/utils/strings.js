import _ from "lodash"

const divideStringIntoLines = (str, lineLength) => {
    const words = str.split(" ");
    let line = "";
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (`${line} ${words[i]}`.trim().length > lineLength) {
            result.push(line.trim());
            line = "";
        }
        line = line + " " + words[i];
        if (i === words.length - 1) {
            result.push(line.trim());
        }
    }
    return result;
};

const handleDisplayName = (firstName,lastName) => {
    const fullName = `${firstName.trim()} ${lastName.trim()}`
    return fullName.split(' ').map(word=>_.upperFirst(word)).join(' ')
}

export { divideStringIntoLines , handleDisplayName};
