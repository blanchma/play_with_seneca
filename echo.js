var seneca = require( 'seneca' )()
  //.listen( { port:9002, pin:'echo:*' } );
  .use('mesh', { auto:true, pin:'echo:*' })


seneca.add({cmd: 'echo'}, function(args, done) {
  console.log('echo.js');
  done(null,{echo: args.echo + ' echo'});
});
