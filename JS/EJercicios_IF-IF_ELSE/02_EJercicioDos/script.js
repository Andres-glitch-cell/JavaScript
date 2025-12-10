let cantidadDineroUsuario = 0;

do {
	try {
		cantidadDineroUsuario = prompt('Introduce la cantidad de € que dispongas: ');
		if (cantidadDineroUsuario > 0) {
			alert('Te queda esta cantidad: ' + cantidadDineroUsuario + ' €');
		} else {
			alert('No te queda dinero, tienes que introducir una cantidad');
		}
		alert('Elige un helado de las opciones que te salen');
		alert('Escribe el sabor que quieres');
		alert('Sin sabor: 1.90 €');
		alert('Sabor Oreo: 1 €');
		alert('Sabor KitKat 1.50 €');
		alert('Sabor de Brownie: 0.75 €');
		alert('Sabor de Lacasitos: 0.95 €');
		let eleccionUsuario = prompt('Escribe un helado:');
		eleccionUsuario.toLowerCase();
		if (eleccionUsuario == 'sin sabor') {
			alert('Se te va a cobrar 1.90 €');
			let totalRestante = cantidadDineroUsuario - 1.9;
			alert('Te queda esta cantidad: ' + totalRestante);
		} else if (eleccionUsuario == 'sabor oreo') {
			alert('Se te va a cobrar 1 €');
			let totalRestante = cantidadDineroUsuario - 1;
			alert('Te queda esta cantidad: ' + totalRestante);
		} else if (eleccionUsuario == 'sabor kitkat') {
			alert('Se te va a cobrar 1.50 €');
			let totalRestante = cantidadDineroUsuario - 1.5;
			alert('Te queda esta cantidad: ' + totalRestante);
		} else if (eleccionUsuario == 'sabor brownie') {
			alert('Se te va a cobrar 0.75 €');
			let totalRestante = cantidadDineroUsuario - 0.75;
			alert('Te queda esta cantidad: ' + totalRestante);
		} else if (eleccionUsuario == 'sabor de lacasitos') {
			alert('Se te va a cobrar 0.95 €');
			let totalRestante = cantidadDineroUsuario - 0.95;
			alert('Te queda esta cantidad: ' + totalRestante);
		} else {
			alert('No disponemos este sabor, lo sentimos');
		}
	} catch (e) {
		alert('Ha ocurrido un error, vuelve a intentarlo, código de error' + e);
	}
	if (cantidadDineroUsuario <= 0) {
		alert('Te has quedado sin dinero se acaba de acabar el Script.');
	}
	alert('Quieres volver a elegir un helado?');
	let eleccionRepetir = prompt('Escribe si o no');
	eleccionRepetir.toLowerCase();
	if (eleccionRepetir == 'no') {
		alert('Gracias por su compra, vuelva pronto!');
		break;
	} else if (eleccionRepetir == 'si') {
		continue;
	} else {
		alert('No has escrito si o no, se acaba el Script');
		break;
	}
} while (cantidadDineroUsuario > 0);
