const ForerunnerDB = require("forerunnerdb");
const collections = require("./collections");
const fdb = new ForerunnerDB();
const db = fdb.db("irrelon-pos");

// Enable database debug logging to the console (disable this in production)
db.debug(true);

// Set the persist plugin's data folder (where to store data files)
db.persist.dataDir('./data');

// Tell the database to load and save data for collections automatically
// this will auto-persist any data inserted in the database to disk
// and automatically load it when the server is restarted
db.persist.auto(true);

// Set access control to allow all HTTP verbs on all collections
// Note that you can also pass a callback method instead of 'allow' to
// handle custom access control with logic
fdb.api.access('irrelon-pos', 'collection', '*', '*', 'allow');

collections.configure(db);

const start = (port = '9010', host = '0.0.0.0') => {
	// Ask the API server to start listening on all IP addresses assigned to
	// this machine on port 9010 and to allow cross-origin resource sharing (cors)
	fdb.api.start(host, port, {cors: true}, () => {
		console.log('Server started!');
	});
};

module.exports = {
	start
};
