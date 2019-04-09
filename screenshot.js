let webshot = require('webshot');
let fs = require("fs");


let url = process.argv.slice(2)[0];
let file = process.argv.slice(3)[0];
let captureSelector = process.argv.slice(4)[0];

if (!url || !file) {
    console.log("Usage: node screenshot.js <url> <screenshot-file> <capture-selector (optional)>");
    process.exit(1);
}

var options = {
    streamType: "png",
    quality: 100,
    renderDelay: 4500
};

if (captureSelector) {
    options["captureSelector"] = captureSelector;
}

console.log("url = %s | file = %s | captureSelector = %s", url, file, captureSelector);
console.log("options:", options);

 webshot(url, file, options, (err) => {
    if (err) {
        throw(err);
    } else {
        console.log("webshot success")
    }
})
