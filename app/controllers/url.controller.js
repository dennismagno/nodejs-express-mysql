const YTUrl = require("../models/url.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    YTUrl.getNextVideo((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};