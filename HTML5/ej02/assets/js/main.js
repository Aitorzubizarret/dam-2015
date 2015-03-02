window.onload = function(){
    // Obtener los elementos de control del reproductor de video
    var playBtn = document.getElementById('play');
    var pauseBtn = document.getElementById('pause');
    var stopBtn = document.getElementById('stop');
    var forwardBtn = document.getElementById('forward');
    var rewindBtn = document.getElementById('rewind');
    var startBtn = document.getElementById('start');
    var endBtn = document.getElementById('end');
    var fullScreenBtn = document.getElementById('fullscreen');
    var volumeRange = document.getElementById('volumeRange');

    // Obtener el elemento progressBar para mostrar cuanto se ha reproducido el video
    var progressBar = document.getElementById('progress');

    // Obtener el reproductore de video
    var player = document.getElementById('videoPlayer');

    // Creamos la función que se ejecutara con cada botón
    var actions = {
        play : function()  {
            player.play();
        },
        pause : function() {
            player.pause();
        }
    };

    var pause = function() {
        actions.pause();
    };


    var updateProgressBar = function() {
        progressBar[0].value=video[0].currentTime;
    };

    var volumeChange = function() {
        console.log(volumeRange.value);
    };

    // Añadimos los listeners de los botones
    playBtn = addEventListener('click', play, false);
    pauseBtn = addEventListener('click', pause, false);
    stopBtn = addEventListener('click', stop, false);
    forwardBtn = addEventListener('click', forward, false);
    rewindBtn = addEventListener('click', rewind, false);
    startBtn = addEventListener('click', start, false);
    endBtn = addEventListener('click', end, false);
    fullScreenBtn = addEventListener('click', fullScreen, false);
    volumeRange = addEventListener('input', volumeChange, false);

    // Añadimos el listener en la pantalla del reproductor

    // Modernizr para detectar que puede reproducir

    
};