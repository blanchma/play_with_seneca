
var seneca = require('seneca')()
    // .use('balance-client')
    // .use('seneca-amqp-transport')
    .use('redis-transport')
    //.use('mesh', {base: true})
    .client({
      type: 'redis',
      pin: 'echo:*',
      host: 'localhost', port: '6379'
    });

    // .client({
    //   type: 'amqp',
    //   url: "amqp://bzznywmx:pKrlrFeHEH9W5dXIv04EExVkrG5NDiWY@hyena.rmq.cloudamqp.com/bzznywmx",
    //   pin: 'echo:*'
    // });
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
