var http = require('http');
var fs  = require('fs');

http.createServer(function (request, respuesta){
	respuesta.writeHead( 200, {'Content-Type': 'text/html'} );
	respuesta.write("servidor listo");
	switch(request.url){
		case '/':
		plantillas='index.html';
		break;

		case '/sobrenode':
		plantillas='sobrenode.html';
		break;

		case '/tienda':
		plantillas='tienda.html';
		break;

		default:
		plantillas='404.html';
		break;
	}
	fs.readFile( "./plantillas/" + plantillas , function (error,datos){
		respuesta.write(datos);
		respuesta.end();
	})


}).listen(3000,'localhost');
