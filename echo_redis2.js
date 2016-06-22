var seneca = require( 'seneca' )()
  .use('redis-transport')
  .listen( { type: 'redis', pin:'echo:*'} );


seneca.add({cmd: 'echo'}, function(args, done) {
  console.log('echo.js');
  done(null,{echo: args.echo + ' redis2'});
});
