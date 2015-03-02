(function(){
	// Variables para guardar el valor aleatorio (1 a 6) que tendrá cada dado y el resultado de de la suma de los 2 durante 36.000 tiradas
	var dado1, dado2;
	var tiradas = [0,0,0,0,0,0,0,0,0,0,0,0,0];

	var lanzarDado = function() {
		return Math.floor(Math.random() * (7-1)+1);
	};
	var tirada = function() {
		return (dado1 = lanzarDado()) + (dado2 = lanzarDado());
	};
	for (var i = 0; i < 36000; i++) {
		switch(tirada()) {
			case 2:
				tiradas[2] = tiradas[2] + 1;
				break;
			case 3:
				tiradas[3] = tiradas[3] + 1;
				break;
			case 4:
				tiradas[4] = tiradas[4] + 1;
				break;
			case 5:
				tiradas[5] = tiradas[5] + 1;
				break;
			case 6:
				tiradas[6] = tiradas[6] + 1;
				break;
			case 7:
				tiradas[7] = tiradas[7] + 1;
				break;
			case 8:
				tiradas[8] = tiradas[8] + 1;
				break;
			case 9:
				tiradas[9] = tiradas[9] + 1;
				break;
			case 10:
				tiradas[10] = tiradas[10] + 1;
				break;
			case 11:
				tiradas[11] = tiradas[11] + 1;
				break;
			case 12:
				tiradas[12] = tiradas[12] + 1;
				break;
		}
	};
	console.log(tiradas);
})();
/*
	- Math.random() => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	- Math.floor() => Valor decimal
*/