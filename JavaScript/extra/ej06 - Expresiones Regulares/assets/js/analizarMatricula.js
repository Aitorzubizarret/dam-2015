(function(){
	/*
		AnalizarMatricula analizará la matricula que se le pase en un array para saber si es correcta o no.

		! http://www.sme-matriculas.es/intro2000.html => En esa dirección aparece el sistema que se sigue a la hora
		de realizar la matriculación.
		0000 a 9999
		BBB a ZZZ (Se excluyen las vocales, LL, CH, Ñ, Q) => B,C,D,F,G,H,J,K,L,M,N,P,R,S,T,V,W,X,Y y Z
	*/
	var analizarMatricula = function(matricula) {
		var respuesta = false;
		if (typeof matricula === 'string') {
			respuesta = /^[0-9]{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/.test(matricula);
		}
		return respuesta;
	};

	// Pruebas
	console.log("AnalizarMatricula");
	console.log(analizarMatricula() === false); // Vacio
	console.log(analizarMatricula(1111) === false); // Número y no string
	console.log(analizarMatricula("") === false); // String vacio
	console.log(analizarMatricula("3") === false); // String 1 número
	console.log(analizarMatricula("22") === false); // String 2 números
	console.log(analizarMatricula("333") === false); // String 3 números
	console.log(analizarMatricula("4444") === false); // String 4 números
	console.log(analizarMatricula("55555") === false); // String 5 números
	console.log(analizarMatricula("1B") === false); // String 1 número 1 letra
	console.log(analizarMatricula("22B") === false); // String 2 números 1 letra
	console.log(analizarMatricula("333B") === false); // String 3 número 1 letra
	console.log(analizarMatricula("4444B") === false); // String 4 número 1 letra
	console.log(analizarMatricula("55555B") === false); // String 5 número 1 letraa
	console.log(analizarMatricula("1BB") === false); // String 1 número 2 letra
	console.log(analizarMatricula("22BB") === false); // String 2 número 2 letras
	console.log(analizarMatricula("333BB") === false); // String 3 número 2 letras
	console.log(analizarMatricula("4444BB") === false); // String 4 número 2 letras
	console.log(analizarMatricula("55555BB") === false); // String 5 número 2 letras
	console.log(analizarMatricula("1CCC") === false); // String 1 número 3 letra
	console.log(analizarMatricula("22CCC") === false); // String 2 número 3 letras
	console.log(analizarMatricula("333CCC") === false); // String 3 número 3 letras
	console.log(analizarMatricula("4444CCC") === true); // String 4 número 3 letras
	console.log(analizarMatricula("55555CCC") === false); // String 5 número 3 letras
	console.log(analizarMatricula("1DDDD") === false); // String 1 número 4 letra
	console.log(analizarMatricula("22DDDD") === false); // String 2 número 4 letras
	console.log(analizarMatricula("333DDDD") === false); // String 3 número 4 letras
	console.log(analizarMatricula("4444DDDD") === false); // String 4 número 4 letras
	console.log(analizarMatricula("55555DDDD") === false); // String 5 número 4 letras
	console.log(analizarMatricula("1FFFFF") === false); // String 1 número 4 letra
	console.log(analizarMatricula("22FFFFF") === false); // String 2 número 4 letras
	console.log(analizarMatricula("333FFFFF") === false); // String 3 número 4 letras
	console.log(analizarMatricula("4444FFFFF") === false); // String 4 número 4 letras
	console.log(analizarMatricula("55555FFFFF") === false); // String 5 número 4 letras
	console.log(analizarMatricula("1234ABC") === false); // Vocal en las letras
	console.log(analizarMatricula("1234BEU") === false); // Vocal en las letras
	console.log(analizarMatricula("1234AEI") === false); // Vocal en las letras
	console.log(analizarMatricula("1234BCD") === true); // Vocal en las letras

})();