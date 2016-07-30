var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
 
pageMod.PageMod({
  include: "*.github.com",
  contentScriptFile: [self.data.url("jquery-3.1.0.min.js"), self.data.url("my-script.js")]
});