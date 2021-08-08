route = require("./routes");

module.exports = (app, router) => {
    route.appRoute(router);  // No need to use app. here because the router is already inside the app.
};





     //  Example for Assignment  \\

// customerroute = require("./customerroutes");
// adminroute = require("./adminroutes");

// module.exports = (app, router) => {
//     customerroute.appRoute(router);
//     adminroute.appRoute(router);
// };