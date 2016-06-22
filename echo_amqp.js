var seneca = require( 'seneca' )()
  .use('seneca-amqp-transport')
  .listen( { type: 'amqp', pin:'echo:*', url: "amqp://bzznywmx:pKrlrFeHEH9W5dXIv04EExVkrG5NDiWY@hyena.rmq.cloudamqp.com/bzznywmx" } );


seneca.add({cmd: 'echo'}, function(args, done) {
  console.log('echo.js');
  done(null,{echo: args.echo + ' amqp'});
});
