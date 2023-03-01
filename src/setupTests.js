const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');


const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const jsdom = new JSDOM(html);

global.document = jsdom.window.document;
global.window = jsdom.window;
