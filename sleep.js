var seneca = require( 'seneca' )()
  //.listen( { port:9003, pin:'echo:*' } );
  .use('mesh', { auto:true, pin:'echo:*' })

seneca.add({cmd: 'echo'}, function(args, done) {
  console.log('sleep.js');
  setTimeout(function() {
    done(null,{echo: args.echo + ' sleep'});
  },10000 );

});
