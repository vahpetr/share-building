const compute = require("./share-building.js");

const start = Date.now();
compute(Array(7e6).fill("1.423"));

console.log(`Total execute time: ${Date.now() - start} ms`)

const memoryUsage = process.memoryUsage();
console.log(`Total allocated memory: ${Math.round((memoryUsage["rss"] / 1024 / 1024) * 100) / 100} mb`);
console.log(`Total heap: ${Math.round((memoryUsage["heapTotal"] / 1024 / 1024) * 100) / 100} mb`);
console.log(`Total heap used: ${Math.round((memoryUsage["rss"] / 1024 / 1024) * 100) / 100} mb`);
