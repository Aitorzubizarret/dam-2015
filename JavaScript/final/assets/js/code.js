HTMLFormElement.prototype.validate = function() {

	// Elementos que queremos validar
	var datosOk = true;
	var requeridos = this.querySelectorAll('.required');
	var email = this.querySelectorAll('.email');
	var comentario = this.querySelectorAll('.comment');
	var password = this.querySelectorAll('.pwd');

    // 
    var validador = {
        required : function(val) {
            // Los requeridos no pueden estar vacios
            return (val)?true:false;
        },
        email : function(val) {
            // El email tiene que tener una dirección válida
            return /^\w([\w.\-]*\w+)?@[a-zA-Z0-9]([\w.\-]*\w+)/.test(val);
        },
        comment : function(caracteres) {
            // El comentario no debe exceder los 50 carácteres
            return (caracteres>10)?false:true;
        },
        pwd : function(val) {
            /*
            - Longitud mínima 6 carácteres => {6, }
            - Al menos una letra minúscula => [a-z]{1,}
            - Al menos una letra MAYÚSCULA => [A-Z]{1,}
            - Al menos un dígito           => [0-9]{1,}
            */
            return /./.test(val);
        },
        error : function(elemento, mensaje) {
            //elemento.style.borderColor = "#f00";
            elemento.style.outline = "2px solid #f00";
            var span = document.createElement('span');
            span.innerText = mensaje;
            span.style.position = "absolute";
            span.style.top = elemento.offsetTop + "px";
            span.style.left = elemento.offsetLeft + elemento.offsetWidth + 10 + "px";
            span.style.background = "#f00";
            span.style.padding = "2px 5px";
            span.style.color = "#fff";
            span.style.borderRadius = "4px";
            span.style.boxShadow = "1px 1px 2px #d75a81";
            //elemento.appendChild(span);
            elemento.parentNode.insertBefore(span, elemento);
        },
        ok : function(elemento) {
            //elemento.style.borderColor = "#8fc800";
            elemento.style.outline = "2px solid #8fc800";
        }
    };

    // Función para validar los elementos de un formulario
    var validate = function(e) {
        if (requeridos.length) {
            for (var a = 0; a < requeridos.length; a++) {
                switch(requeridos[a].type) {
                    case 'text':
                        if (!validador.required(requeridos[a].value)) {
                            validador.error(requeridos[a], "Este valor es requerido");
                            e.preventDefault();
                        } else {
                            validador.ok(requeridos[a]);
                        }
                        break;
                    case 'textarea':
                        if (!requeridos[a].textLength) {
                            validador.error(requeridos[a], "Este valor es requerido");
                            e.preventDefault();
                        } else {
                            validador.ok(requeridos[a]);
                        }
                        break;
                    case 'checkbox':
                        if (!requeridos[a].checked) {
                            validador.error(requeridos[a], "Este valor es requerido");
                            e.preventDefault();
                        } else  {
                            validador.ok(requeridos[a]);
                        }
                        break;
                }
            }
        }
        if (email.length) { 
            for (var i = 0; i < email.length; i++) {
                console.log(email[i].value);
                if (!validador.email(email[i].value)) {
                    validador.error(email[i], "El email tiene un formato incorrecto");
                    e.preventDefault();
                } else {
                    validador.ok(email[i]);
                }
            }
        }
        if (comentario.length) {
            for (var u = 0; u < comentario.length; u++) {
                console.log("Longitud comentario en letras => " + comentario[u].textLength);
                if (!validador.comment(comentario[u].textLength)) {
                    validador.error(comentario[u], "No puede tener más de 50 carácteres");
                    e.preventDefault();
                } else {
                    validador.ok(comentario[u]);
                }
            }
        }
        if (password.length) {
            for (var j = 0; j < password.length; j++) {
                if (!validador.pwd(password[j].value)) {
                    validador.error(password[j], "Error");
                    e.preventDefault();
                } else {
                    validador.ok(password[j]);
                }
            }
        }
    };

    // Listener para ejecutar la función validate cuando se pulse el botón "submit"
    this.addEventListener('submit', validate, false);
    this.addEventListener('onchange', validate, false);
};