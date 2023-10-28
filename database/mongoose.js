const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerdb')
    .then(
        () => { console.log("Database is connected") },
    )
    .catch(
        err => { console.error(`Could not connect to the database. ${err}`)}
    );


mongoose.exports = mongoose;