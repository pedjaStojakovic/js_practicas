	/* Variables globales */ 
	// Variables para definir el Canvas.
	var canvas;
	var ctx;
	
	// Tamaño del canvas
	var WIDTH = 600; 
	var HEIGHT = 520; 
	var MAX_PADDLE_X = WIDTH - 90;
	var MIN_PADDLE_X = 0;

	var MAX_PADDLE_Y = HEIGHT - 15;
	var MIN_PADDLE_Y = 0
	
	// Variables para controlar la posición de la pelota.
	var x;
	var y;
	
	// Variables para controlar la dirección de la pelota.
	var dx;
	var dy;
		
	// Variables para controlar la posición de la paleta
	var paddleX=0;
	var paddleY=0;
	var tiempoPartida;
	var pausado = false;	

	// Variables para controlar el nivel de juego en que se encuentra el jugador.
	var level;
	
	// Variables per a reproducir el audio. No estan definidas porqué en función de la solución aportada pueden hacer falta más o menos variables.
	// ...

	$(document).keydown(function(e){
		if (e.keyCode == 37 && paddleX > MIN_PADDLE_X){	// Flecha izquierda del teclado.
			paddleX -= 10;
		}

		if (e.keyCode == 39 && paddleX < MAX_PADDLE_X ){	// Flecha derecha del teclado.
			paddleX += 10 ;			
			
		}
	});
	
/* 
	Dibujamos un recuadro.
	Cada recuadro tiene las variables de color, la posición x, y inicial en el canvas y la anchura y altura del recuadro.
	Esta es una función auxiliar utilizada para dibujar la paleta y que puede ser utilizada también para dibujar los recuadros de un nivel.
*/
function square(color, x, y, width, height)
{	
	ctx.beginPath();
  	ctx.rect(x, y, width, height);
  	ctx.fillStyle = color;
  	ctx.fill();
  	ctx.stroke();
      
}

// Función para dibujar la redonda.
function circle(x,y,r) {
	ctx.beginPath();
	ctx.fillStyle="#F80";
	ctx.arc(x, y, r, 0, Math.PI*2, true);
	ctx.fill();
}


/*
	Esta función verifica que el juego ha llegado al final de una partida.
	En esta función pueden pasar diferentes ccosas:
		1. Que el usuario pierda la partida porqué la pelota toque el fondo del canvas.
		2. que el usuario haya tocado todas las pelotas:
			2a. Si nos encontramos el primer nivel de la partida se ha de tener presente que tenemos que pasar al segundo nivel.
			2b. Se ha acabo el juego. Se ha de mostrar al usuario el mensaje de finalización del juego.
*/
function end_of_game(){

}
/*	
	En esta funcion se tienen que dibujar los recuadros que forman parte de un nivel.
	El nivel a mostrar se pasa com parámetro de la función.
	Para dibujar cada uno de los recuadros se puede utilizar la funció auxiliar "square" utilizada también para dibujar la paleta.
*/
function draw_level( level ){	
}

/*  	
	En esta función se tiene que verificar si la pelota está tocando alguno de los recuadros.
	En caso de que la pelota toque alguno de los recuadros, se debe tener presente que le recuadro no se tiene que volver a pintar
	por pantalla hasta que no se vuellva a iniciar una aprtida.
	Se debe tener en cuenta el nivel ( 1 o 2 ) en que esta jugando el jugador.
 */
function ball_touch_square( level ){	
	
}

/*	
	En esta función se dee detectar si la pelota colisiona con la paleta y que se tiene que hacer en este caso.
		¿ Qué dirección tomará la pelota?
		¿ Se debe emitir algun sonido?
*/
function ball_touch_paddle(){	
}

// Limpiamos el Canvas antes de dibujarlo de nuevo.
function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function draw(){
	
	soundEfx = document.getElementById("soundEfx");
		
	// Limpiamos el Canvas antes de dibujarlo de nuevo.
	clear();
		
	// Dibujamos los recuadros de un nivel.
	draw_level( level );
			
	// Dibujamos la pelota con un tamaño de 10 px.
	circle(x, y, 10);
			
	// Dinujamos la paleta. Utilizamos la función auxiliar square.
	square("#333", paddleX, paddleY, 90, 30 );		
}	
/*
	Función para inicializar el juego.
	Esta función puede ser modificada cuando se añadan los controles para inicializar y pausar el juego.
*/
function init_game(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //Siempre requerida
	interval = 15;
	
	// Posición inicial de la pelota.
	x = 295;
	y = 500;

	// Velocidad de desplazamiento de la pelota
	dx = 5;
	dy = -5;
	
	// Posición inicial de la paleta.
	paddleX = 255; //centrado al inicio
	paddleY = 500;
	
	// El juego se inicia en el nivel 1.
	level = 1;
	
	manejadorBotones();
	
	
	// Cremoas un invertablo para dibujar el canvas cada 15 milisegundos ( que es periodo defenido para el intervalo ).
	setInterval(function(){
		// Pintamos el Canvas.
		draw();	
		draw_canvas();
		
	}, interval);
	
}


function draw_canvas() {

	var json = {"squares_level1":[{"color":"#ccc","x":"0","y":"0","w":"60","h":"30","active":true},{"color":"#f00","x":"60","y":"0","w":"60","h":"30","active":true},{"color":"#0f0","x":"120","y":"0","w":"60","h":"30","active":true},{"color":"#00f","x":"180","y":"0","w":"60","h":"30","active":true},{"color":"#ff0","x":"240","y":"0","w":"60","h":"30","active":true},{"color":"#f0f","x":"300","y":"0","w":"60","h":"30","active":true},{"color":"#0ff","x":"360","y":"0","w":"60","h":"30","active":true},{"color":"#000","x":"420","y":"0","w":"60","h":"30","active":true},{"color":"#369","x":"480","y":"0","w":"60","h":"30","active":true},{"color":"#963","x":"540","y":"0","w":"60","h":"30","active":true},{"color":"#391","x":"120","y":"30","w":"60","h":"30","active":true},{"color":"#987","x":"180","y":"30","w":"60","h":"30","active":true},{"color":"#123","x":"240","y":"30","w":"60","h":"30","active":true},{"color":"#912","x":"300","y":"30","w":"60","h":"30","active":true},{"color":"#51a","x":"360","y":"30","w":"60","h":"30","active":true},{"color":"#915","x":"420","y":"30","w":"60","h":"30","active":true},{"color":"#158","x":"240","y":"60","w":"60","h":"30","active":true},{"color":"#972","x":"300","y":"60","w":"60","h":"30","active":true}]};
	var nivel1 = json['squares_level1'];

	for(var c in nivel1) {
		var cuad = nivel1[c];
		square(cuad.color, cuad.x, cuad.y, cuad.w, cuad.h);
	}
}

function manejadorBotones(){
	$('.button').on('click', function(e){
		if($(this).attr('id') == 'inicio'){
			//Reiniciar el contador
			tiempoPartida = 0;
			
		} else {
			//botón pause
			 pausado = !pausado;
			 console.log('pausa');
		}

	})
}

