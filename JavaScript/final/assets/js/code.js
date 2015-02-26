HTMLFormElement.prototype.validate = function() {

	// Elementos que queremos validar
	var datosOk = true;
	var requeridos = this.querySelectorAll('.required');
	var email = this.querySelectorAll('.email');
	var comentario = this.querySelectorAll('.comment');
	var password = this.querySelectorAll('.pwd');

	/*
    var validador = {
        required : function() {

        },
        email : function() {

        }
    };
    */

    // Función para validar los elementos de un formulario
    var validate = function(e) {
    	// Requeridos no pueden estar vacios
    	if (requeridos.length) {
    		//console.log(requeridos);
    		for (var i = 0; i < requeridos.length; i++) {
    			if ((requeridos[i].localName === 'input')&&(requeridos[i].value == '')) {
    				requeridos[i].style.borderColor = "#f00";
    				var span = document.createElement('span');
					span.innerText = "No puede estar vacio.";
					span.style.position = "absolute";
					span.style.top = requeridos[i].offsetTop + "px";
					span.style.left = requeridos[i].offsetLeft + requeridos[i].offsetWidth + 10 + "px";
					span.style.background = "#f00";
					span.style.padding = "2px 5px";
					span.style.color = "#fff";
					span.style.borderRadius = "4px";
					span.style.boxShadow = "1px 1px 2px #d75a81";
					this.appendChild(span);
					datosOk = false;
    			}
    		};
    	}
    	// Email
    	if (email.length) {
    		console.log(email);
    	}

    	// Comentario con 50 carácteres como mucho
    	if (comentario.length) {
    		console.log(comentario);
    		for (var i = 0; i < comentario.length; i++) {
    			if (comentario[i].textLength > "50") {
    				console.log("El comentario tiene más de 50 caracteres" + comentario[i]);
    				comentario[i].style.borderColor = "#f00";
    				datosOk = false;
    			}
    		};
    	}

    	// Password
    	/*
			- Longitud mínima 6 carácteres => {6, }
			- Al menos una letra minúscula => [a-z]{1,}
			- Al menos una letra MAYÚSCULA => [A-Z]{1,}
			- Al menos un dígito           => [0-9]{1,}
			//
    	*/


    	// Comprobaremos si tenemos que parar el formulario (en caso de errores), o dejar que se envie (en caso de que todo este en regla)

    	e.preventDefault();
    };

    // Listener para ejecutar la función validate cuando se pulse el botón "submit"
    this.addEventListener('submit', validate, false);
};