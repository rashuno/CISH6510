var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('DraftManager', server, {safe: true});
 
db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'DraftManagerDB' database");
        db.collection('drafts', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'drafts' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});
 
exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving draft: ' + id);
    db.collection('drafts', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {

    //console.log(res);
    //console.log(req);

    console.log('Retrieving All Drafts')

    db.collection('drafts', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
exports.addDraft = function(req, res) {

    req.accepts('application/json');  
    console.log("exports.addDraft  -  req.body");
    console.log(req.body);

    var draft = req.body;   

    console.log('Adding Draft: ' + JSON.stringify(draft));

    db.collection('drafts', function(err, collection) {
        collection.insert(draft, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
  
}
 
exports.updateDraft = function(req, res) {
    var id = req.params.id;
    var draft = req.body;
    console.log('Updating Draft: ' + id);
    console.log(JSON.stringify(draft));
    db.collection('drafts', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, draft, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(draft);
            }
        });
    });
}
 
exports.deleteDraft = function(req, res) {
    var id = req.params.id;
    console.log('Deleting Draft: ' + id);
    db.collection('wines', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    /*
        var d = new Date();
        d.getTime();

    */

    var drafts = [
    { 
        name: "Joes Test Draft",
        dateCreated: "8-1-2013",
        leagueName: "East Coast Fantasy League",
        leagueGuid: "rashuno-1375587432453",
        ownerId : "rashuno"


    },
    {
        name: "Test Draft",
        dateCreated: "8-1-2013",
        leagueName: "East Coast Fantasy League",
        leagueGuid: "rashuno-1375587612814",
        ownerId : "rashuno"
    }];
 
    db.collection('drafts', function(err, collection) {
        collection.insert(drafts, {safe:true}, function(err, result) {});
    });
 
};