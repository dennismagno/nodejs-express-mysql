const sql = require("./db.js");

// constructor
const YTUrl = function(video) {
  this.yturl = video.yturl;
};

YTUrl.getNextVideo = result => {
  sql.query("SELECT Id, yturl FROM `videos` ORDER BY datetime, id LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    sql.query('UPDATE `videos` Set datetime = NOW() WHERE Id = ' + res[0]['Id'] + ' ;');
    console.log("yturl: ", res);
    result(null, res[0]['yturl']);
  });
};


module.exports = YTUrl;
