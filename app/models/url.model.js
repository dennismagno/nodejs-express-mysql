const sql = require("./db.js");

// constructor
const YTUrl = function(video) {
  this.yturl = video.yturl;
};

YTUrl.getNextVideo = result => {
  sql.query("SELECT yturl FROM `videos` ORDER BY watched LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("yturl: ", res);
    result(null, res[0]);
  });
};


module.exports = YTUrl;
