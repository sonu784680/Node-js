const fs = require("fs");
const path = require("path");
const rootdir = require("../utils/path");
//fake database
let requestItems = [];

module.exports = class Home {
  constructor(housename) {
    this.housename = housename;
  }

  save() {
    this.id = Math.random().toString();
    requestItems.push(this);
    const homeDatapath = path.join(rootdir, "data", "homes.json");
    fs.writeFile(homeDatapath, JSON.stringify(requestItems), (error) => {
      console.log("file write concluded", error);
    });
  }
  static fetchAll(callback) {
    const homeDatapath = path.join(rootdir, "data", "homes.json");
    fs.readFile(homeDatapath, (err, data) => {
      console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
