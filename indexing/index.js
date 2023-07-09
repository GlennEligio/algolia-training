const algoliasearch = require("algoliasearch");
const client = algoliasearch("V41OTE1K6R", "7ebbd57334fb6fe076f24a4d66c32a72");

const index = client.initIndex("glenn_movies");

// saving multiple records in index
// const movies = require("./movies.json");
// index.saveObjects(movies).then(() => console.log("That's all folks"));

// updating single record
// const spidermanNWH = require("./SpiderManNWH.json");
// index.saveObjects([spidermanNWH]).then(() => console.log("That's all folks"));

// updating index settings
index.setSettings({ attributesForFaceting: ["genres"] });
