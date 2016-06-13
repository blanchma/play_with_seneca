
var seneca = require('seneca')()
    .use('balance-client')
    .use('mesh', {base: true});
    // .client( {type: 'balance', pin:'echo:*'} )
    //.client( { type:'tcp', pin:'sleep:*E' } )
    // .client( { port:9003,  pin:'echo:*' } )
    // .client( { port:9002,  pin:'echo:*' } );

var restify = require('restify');

var server = restify.createServer({
  name: 'seneca-server',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:echo', function(req, res, next) {
  seneca.act({ cmd: 'echo', echo: req.params.echo }, function (err, result) {
    res.send('echo: ' + result.echo);
  });
});

server.get('/sleep/:time', function(req, res, next) {
  seneca.act({ cmd: 'sleep', time: req.params.time }, function (err, result) {
    res.send('Wake up');
  });
});


server.listen(8080);
