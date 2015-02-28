HTMLFormElement.prototype.validate = function() {

	// Elementos que queremos validar
	var required = this.querySelectorAll('.required');
	var email = this.querySelectorAll('.email');
	var comments = this.querySelectorAll('.comment');
	var passwords = this.querySelectorAll('.pwd');

    // 
    var validador = {
        required : function(val) {
            // Los required no pueden estar vacios
            return val !== undefined &&
                   val !== null &&
                   val.length > 0 &&
                   !/^\s+$/.test(val);
            
        },
        email : function(val) {
            // El email tiene que tener una dirección válida
            return /^\w([\w.\-]*\w+)?@[a-zA-Z0-9]([\w.\-]*\w+)/.test(val);
        },
        comment : function(caracteres) {
            // El comments no debe exceder los 50 carácteres
            return (caracteres>10)?true:false;
        },
        pwd : function(val) {
            /*
            - Longitud mínima 6 carácteres => {6, }
            - Al menos una letra minúscula => [a-z]{1,}
            - Al menos una letra MAYÚSCULA => [A-Z]{1,}
            - Al menos un dígito           => [0-9]{1,}
            */
            return this.required(val) &&
                   val.length > 6 &&
                   /[a-z]/.test(val) &&
                   /[A-Z]/.test(val) &&
                   /[0-9]/.test(val);
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
    var validateForm = function(e) {
        if (required.length) {
            for (var i = 0; i < required.length; i++) {
                var input = required[i]; // Para que no tengamos problemas con los indices
                switch(input.type) {
                    case 'text':
                        if (!validador.required(input.value)) {
                            validador.error(input, "Este valor es requerido");
                            e.preventDefault();
                        } else {
                            validador.ok(input);
                        }
                        break;
                    case 'textarea':
                        if (!input.textLength) {
                            validador.error(input, "Este valor es requerido");
                            e.preventDefault();
                        } else {
                            validador.ok(input);
                        }
                        break;
                    case 'checkbox':
                        if (!input.checked) {
                            validador.error(input, "Este valor es requerido");
                            e.preventDefault();
                        } else  {
                            validador.ok(input);
                        }
                        break;
                }
            }
        }
        if (email.length) { 
            for (i = 0; i < email.length; i++) {
                input = email[i]; // Para que no tengamos problemas con los indices
                if (!validador.email(input.value)) {
                    validador.error(input, "El email tiene un formato incorrecto");
                    e.preventDefault();
                } else {
                    validador.ok(input);
                }
            }
        }
        if (comments.length) {
            for (i = 0; i < comments.length; i++) {
                input = comments[i]; // Para que no tengamos problemas con los indices
                if (validador.comment(input.textLength)) {
                    validador.error(input, "No puede tener más de 50 carácteres");
                    e.preventDefault();
                }
            }
        }
        if (passwords.length) {
            for (i = 0; i < passwords.length; i++) {
                input = passwords[i]; // Para que no tengamos problemas con los indices
                if (!validador.pwd(input.value)) {
                    validador.error(input, "Error");
                    e.preventDefault();
                } else {
                    validador.ok(input);
                }
            }
        }
    };

    var validateField = function(e) {
        console.log("ha");
    };

    // Listener para ejecutar la función validate cuando se pulse el botón "submit"
    this.addEventListener('submit', validateForm, false);

    // Listener a cada elemento para ejecutar la función de validar cuando pierdan el foco
    //console.log(required.length);
    /*
    for (i = required.length; i >= 0; i--) {
        required[i].addEventListener('onblur', validateField, false);
    }
    */
};