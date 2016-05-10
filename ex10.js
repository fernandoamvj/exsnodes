var net = require('net');

   function preenche0(i) {
     return (i < 10 ? '0' : '') + i;
   }

   function now () {
     var d = new Date();
     return d.getFullYear() + '-'
       + preenche0(d.getMonth() + 1) + '-'
       + preenche0(d.getDate()) + ' '
       + preenche0(d.getHours()) + ':'
       + preenche0(d.getMinutes());
   }

   var server = net.createServer(function (socket) {
     socket.end(now() + '\n');
   });

   server.listen(Number(process.argv[2]));
