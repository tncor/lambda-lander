
const express = require('express')
const request = require('request')
const app = express()


// ------------------------
app.all('/do', function (req, res) {
  console.log('Executing /' + req.method + " " + req.query.target)
  req.pipe(request(req.query.target)).on("end", function(){
    console.log('Redirecting to ' + req.query.redirect)
    res.redirect(req.query.redirect)
  })
})

// ------------------------
var server = app.listen(process.env.PORT, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App is listening at http://%s:%s', host, port);
});
