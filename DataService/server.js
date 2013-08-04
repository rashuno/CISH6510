var express = require('express'),
    drafts = require('./routes/drafts');
 
var app = express();
 
 // Allow CORS 
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
 
});

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/drafts', drafts.findAll);
app.get('/drafts/:id', drafts.findById);
app.post('/drafts', drafts.addDraft);
app.put('/drafts/:id', drafts.updateDraft);
app.delete('/drafts/:id', drafts.deleteDraft);



 
app.listen(3000);
console.log('Listening on port 3000...');