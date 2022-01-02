const pkg = require("./package.json");
const common = require("../../common");
const config = common.getConfig(pkg.name, require("./config"));
console.log("config", config);

module.exports = config;
