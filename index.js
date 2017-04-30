var server = require('./server');
new server.Server(process.env.PORT).start();