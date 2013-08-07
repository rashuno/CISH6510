var express = require('express'),
    path = require('path'),
    http = require('http'),
    util = require('util'),
    drafts = require('./routes/drafts');

 
var app = express();
 
 
//Always Call Configure Before Anything Else..!!!!  Hard Lesson Learned!  ugh!
app.configure(function () {
	  app.set('port', process.env.PORT || 3000);
    //app.use(rawBody);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// Allow CORS 
// res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  next();
 
});
 

 /* Debug 
app.post('/drafts/addDraft', function(req, res) {
  //console.log(req.is('text/*'));
  console.log(req.is('json'));
  //console.log('RB: ' + req.rawBody);
  console.log('B: ' + JSON.stringify(req.body));
  res.send('got it');
});
*/ 


app.get('/drafts', drafts.findAll);
app.get('/drafts/:id', drafts.findById);   
app.post('/drafts/addDraft', drafts.addDraft);
app.put('/drafts/:id', drafts.updateDraft);   
app.delete('/drafts/:id', drafts.deleteDraft);   


app.options('/drafts/addDraft', function(req, res) {
    // At this point, the `allowCrossDomain()` middleware will already have
    // taken care of the CORS stuff, so just return OK.
    res.send(200);
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
 
//app.listen(3000);
//console.log('Listening on port 3000...');