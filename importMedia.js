const fs = require("fs");
const path = require("path");

const imagesFolder = "./src/media/Images/";
const videoFolder = "./src/media/Video/";
const outputFile = "./src/mediaList/mediaList.js";

const imgFiles = fs.readdirSync(imagesFolder);
const videoFiles = fs.readdirSync(videoFolder);

let importStr = "";
let assetList = "const assetList = [";

imgFiles.forEach(item => {
    if(item.indexOf(".png") > 0) {
        importStr += `import "../media/images/${item}";\n`;
        importStr += `import "../media/images/${item.replace(".png", ".jpg")}";\n`;
        assetList += `{
            image: "assets/images/${item}",
            thumb: "assets/images/${item.replace(".png", ".jpg")}",
            seed: ${Math.random()},
        },
        `;
    }
});


videoFiles.forEach(item => {
    if(item.indexOf(".mp4") > 0) {
        importStr += `import "../media/video/${item}";\n`;
        importStr += `import "../media/images/${item.replace(".mp4", ".png")}";\n`;
        importStr += `import "../media/images/${item.replace(".mp4", ".jpg")}";\n`;
        assetList += `{
            video: "assets/video/${item}",
            image: "assets/images/${item.replace(".mp4", ".png")}",
            thumb: "assets/images/${item.replace(".mp4", ".jpg")}",
            seed: ${Math.random()},
        },
        `;
    }
});
assetList += "];";

const fileContent = `
    ${importStr}
    ${assetList}

    export default assetList;
`

fs.writeFileSync(outputFile, fileContent);
