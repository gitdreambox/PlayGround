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
    backend: pubSubSettings,
    persistence: {
        factory: mosca.persistence.Redis
    }
};

var server = new mosca.Server(moscaSettings);

server.on('ready', function () {
    console.log('Mosca server is up and running.')
});

server.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});

server.on('published', function(packet, client) {
    console.log('Published', packet.payload);
});