const Datastore = require('nedb');
const db = new Datastore({filename: 'users2023'});
db.loadDatabase();

class DBController {
    static insert = (email, name, func) => {
        db.find({email}, (err, docs) => {
            if (docs.length === 0) {
                db.insert({email, name});
            }
            func();
        });
    }

    static getCount = (func) => {
        db.find({}, (err, docs) => {
            func(docs.length);
        });
    }
}

module.exports.DB = DBController;
