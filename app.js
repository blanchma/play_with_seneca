
var seneca = require('seneca')()
    .client( { type:'tcp', pin:'role:math' } )
    .client( { port:9002,  pin:'echo:*' } );

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

server.listen(8080);
