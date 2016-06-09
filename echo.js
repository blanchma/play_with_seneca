var seneca = require( 'seneca' )()
  .listen( { port:9002, pin:'echo:*' } );

seneca.add({cmd: 'echo'}, function(args, done) {
  done(null,{echo: args.echo + ' bye'});
});
