$(function () {
    "use strict";
    // Variables globales
    var socketStatus;
    var respuesta;

    // Obtener los elementos del DOM
    var chatContent = $('#content');
    //var chatContent = document.getElementById("content");
    var chatStatus = document.getElementById("status");
    var chatInput = document.getElementById("input");

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.websocket) {
        console.log("No tienes websockets");
        chatStatus.innerText = "Error! No WebSocket available";
        return false;
    } else {
        console.log("UOU tienes websockets");
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    // Abrir la conexión
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    // Comprobar mediante listeners el estado del socket
    var socketOpened = function(e) {
        //console.log("El socket esta abierto");
        socketStatus = 1;
        chatStatus.innerText = "Conectado";
        chatInput.disabled = false;
        if (!myName) {
            myName = prompt("Introduce tu nick");
            //console.log("Acabas de introducir " + myName);
            socket.send(myName);
            //socket.send("prueba");
        }  else {
            console.log("Tu nick " + myName);
        }
    };
    var socketClosed = function(e) {
        //console.log("El socket esta cerrado");
        socketStatus = 0;
        chatStatus.innerText = "Sin conexión";
        chatInput.disabled = true;
    };
    var socketError = function(e) {
        console.log("Error en el socket");
    };
    var manageChat = function(e) {
        //console.log(e.data);
        try {
            respuesta = JSON.parse(e.data);
        } catch(ex) {
            console.log("Error parseando...");
            return false;
        }

        if (respuesta) {
            switch(respuesta.type) {
            case "color":
                //console.log(respuesta.data);
                myColor = respuesta.data;
                chatStatus.innerHTML = '<span style="color:' + myColor + '">' + myName + '</span>'; 
                break;
            case "history":
                for (var i = 0; i < respuesta.data.length; i++) {
                    //console.log(respuesta.data[i]);
                    //addMessage("Autor", "texto", "color", new Date());
                    addMessage(respuesta.data[i].author, respuesta.data[i].text, respuesta.data[i].color, new Date(respuesta.data[i].time));
                }
                break;
            case "message":
                //addMessage("Autor", "texto", "color", new Date());
                addMessage(respuesta.data.author, respuesta.data.text, respuesta.data.color, new Date(respuesta.data.time));
                break;
            }
        }   
    };
    var sendMessage = function(e) {
        if (e.keyCode == 13) {
            if (chatInput) {

            }
            socket.send(chatInput.value);
            chatInput.value = "";
        }
    };
    socket.addEventListener("open", socketOpened, false);
    socket.addEventListener("close", socketClosed, false);
    socket.addEventListener("error", socketError, false);
    socket.addEventListener("message", manageChat, false);
    chatInput.addEventListener("keydown", sendMessage, false);

    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        chatContent.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
});