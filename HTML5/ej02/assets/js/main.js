window.onload = function() {
    // Capturamos los bótones
    var playPauseBtn = document.getElementById("playPause");
    var stopBtn = document.getElementById("stop");
    var forwardBtn = document.getElementById("forward");
    var rewindBtn = document.getElementById("rewind");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var fullscreenBtn = document.getElementById("fullscreen");
    var muteOnOffBtn = document.getElementById("muteOnOff");
    var volumeSlider = document.getElementById("volumeRange");

    // Span de los botones
    var playPauseBtnSpan = document.getElementById("playPauseBtnText");
    var muteOnOffSpan = document.getElementById("muteOnOffBtnIcon");

    var progress = document.getElementById("progress");

    // Capturas el video
    var video = document.getElementById("video");
    var videoClick = document.getElementById("videoClick");

    // Funciones
    var playerPlayPause = function(e) {
        e.preventDefault();
        if (video.paused) {
            video.play();
            playPauseBtnSpan.classList.remove('glyphicon-play');
            playPauseBtnSpan.classList.add('glyphicon-pause');
        } else {
            video.pause();
            playPauseBtnSpan.classList.remove('glyphicon-pause');
            playPauseBtnSpan.classList.add('glyphicon-play');
        }
    };
    var showBrieflyPlayPause = function(e) {
        e.preventDefault();
        if (video.paused) {
            videoClick.classList.add('show');
            videoClick.classList.remove('hide');
        } else {
            videoClick.classList.add('hide');
            videoClick.classList.remove('show');
        }
    };
    var updateControls = function(e) {
        e.preventDefault();
        playPauseBtnSpan.classList.remove('glyphicon-pause');
        playPauseBtnSpan.classList.add('glyphicon-play');
    };
    var playerStop = function(e) {
        e.preventDefault();
        video.pause();
        video.currentTime = 0;
        playPauseBtnSpan.classList.remove('glyphicon-pause');
        playPauseBtnSpan.classList.add('glyphicon-play');
    };
    var playerForward = function(e) {
        e.preventDefault();
        video.currentTime += 10;
    };
    var playerRewind = function(e) {
        e.preventDefault();
        video.currentTime -= 10;
    };
    var playerStart = function(e) {
        e.preventDefault();
        video.currentTime = 0;
    };
    var playerEnd = function(e) {
        e.preventDefault();
        video.currentTime = video.duration;
    };
    var playerFullScreen = function(e) {
        e.preventDefault();
        console.log("fullscreen");
    };
    var updateVideoProgress = function(e) {
        e.preventDefault();
        progress.value = (video.currentTime * 100)/video.duration;
    };
    /*
        SOUND
    */
    var playerMuteToggle = function(e) {
        if (video.muted) {
            video.muted = false;
            muteOnOffSpan.classList.add('glyphicon-volume-off');
            muteOnOffSpan.classList.remove('glyphicon-volume-down');
        } else {
            video.muted = true;
            muteOnOffSpan.classList.add('glyphicon-volume-down');
            muteOnOffSpan.classList.remove('glyphicon-volume-off'); 
        }
    };
    var playerVolumeControl = function(e) {
        video.volume = volumeSlider.value/100;

    };

    // Añadimos los listeners a cada botón para que ejecuten su función cuando son pulsados
    playPauseBtn.addEventListener('click', playerPlayPause, false);
    stopBtn.addEventListener('click', playerStop, false);
    forwardBtn.addEventListener('click', playerForward, false);
    rewindBtn.addEventListener('click', playerRewind, false);
    startBtn.addEventListener('click', playerStart, false);
    endBtn.addEventListener('click', playerEnd, false);
    fullscreenBtn.addEventListener('click', playerFullScreen, false);
    muteOnOffBtn.addEventListener('click', playerMuteToggle, false);
    volumeSlider.addEventListener('input', playerVolumeControl, false);

    // Añadimos los listeners del video
    //video.addEventListener('canplay', )
    video.addEventListener('progress', updateVideoProgress, false);
    video.addEventListener('ended', updateControls, false);
    video.addEventListener('click', playerPlayPause, false);
    video.addEventListener('click', showBrieflyPlayPause, false);
};