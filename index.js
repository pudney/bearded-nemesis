var server = require("./httpServer");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//Setup request handlers.  Not sure I like this.  Seems like there should be a looser coupling way of doing this.
var handle = {}
handle["/"] = requestHandlers.start; 
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

//Start the server
server.start(router.route, handle);