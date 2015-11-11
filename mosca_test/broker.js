// step 1: install mosca module
//         $ sudo npm install mosca --save
//         if error occurs about zmq, that's fine if you don't use the p2p feature
// step 2: install the redis service on the localhost
//         see http://redis.io/download
//         after wget and extact the redis-3.0.0.tar.gz, make, make test, then sudo make install
// step 3: run redis server
//         $ redis-server
// step 4: $ npm install redis in the project worksapce

var mosca = require('mosca');

var pubSubSettings = {
    type: 'redis',
    redis: require('redis'),
    db: 12,
    port: 6379,
    return_buffers: true,
    host: 'localhost'
};

var moscaSettings = {
    port: 1883,
    //backend: pubSubSettings,
    persistence: {
         factory: mosca.persistence.LevelUp,
         path: './mqdb'
    }
};

var server = new mosca.Server(moscaSettings);
var db = server.persistence.db;
//var db = new mosca.persistence.LevelUp({ path: "./mqdb2" });
//db.wire(server);
db.put('name', 'LevelUP', function (err) {
  if (err) return console.log('Ooops!', err); // some kind of I/O error 
 
  // 3) fetch by key 
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err); // likely the key was not found 
 
    // ta da! 
    console.log('name=' + value);
  });
});

// server.persistClient = function (client) {

// };
// console.log(db);

server.on('ready', function () {
    console.log('Mosca server is up and running.');

});

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
    //console.log(client);
    server.restoreClientSubscriptions(client, function (r) {
        console.log('restored: ' + r);
    });
});

server.on('published', function(packet, client) {
    console.log('Published', packet.payload);
});