var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || 3333;

var corsProxy = require("cors-anywhere");

corsProxy
  .createServer({
    originWhitelist: [],
    // requireHeader: ["origin", "x-requested-with"],
    // removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
