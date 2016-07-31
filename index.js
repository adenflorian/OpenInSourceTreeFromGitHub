var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
 
pageMod.PageMod({
  include: "*.github.com",
  contentScriptFile: [self.data.url("jquery-2.2.4.min.js"), self.data.url("my-script.js")]
});