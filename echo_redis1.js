var seneca = require( 'seneca' )()
  .use('redis-transport')
  .listen( { type: 'redis', pin:'echo:*', host: 'localhost', port: '6379' } );


seneca.add({cmd: 'echo'}, function(args, done) {
  console.log('echo.js');
  done(null,{echo: args.echo + ' redis1'});
});
