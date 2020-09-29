module.exports = app => {
    const yturl = require("../controllers/url.controller.js");

    // Retrieve all Customers
    app.get("/yturl", yturl.findAll);
  };
  