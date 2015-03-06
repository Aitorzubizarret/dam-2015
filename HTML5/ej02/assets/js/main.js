window.onload = function() {
    // Capturamos los bótones
    var playPauseBtn = document.getElementById("playPause");
    var stopBtn = document.getElementById("stop");
    var forwardBtn = document.getElementById("forward");
    var rewindBtn = document.getElementById("rewind");
    var startBtn = document.getElementById("start");
    var endBtn = document.getElementById("end");
    var fullscreenBtn = document.getElementById("fullscreen");
    var muteBtn = document.getElementById("mute");
    var volumeSlider = document.getElementById("volumeRange");

    // Span de los botones
    var playPauseBtnSpan = document.getElementById("playPauseBtnText");
    var muteOnOffSpan = document.getElementById("muteBtnIcon");

    var progress = document.getElementById("progress");

    // Capturas el video
    var video = document.getElementById("video");
    var videoClick = document.getElementById("videoClick");

    // Capturamos los LIs
    var playlistUL = document.getElementById("playlist");

    // Funciones
    var playVideo = function(e) {
        e.preventDefault();
        console.log("can play");
    };
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
            videoClick.classList.remove('hideIt');
            videoClick.classList.add('showIt');
            videoClick.classList.remove('glyphicon-play');
            videoClick.classList.add('glyphicon-pause');
        } else {
            videoClick.classList.remove('showIt');
            videoClick.classList.add('hideIt');
            videoClick.classList.remove('glyphicon-pause');
            videoClick.classList.add('glyphicon-play');
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
        //progress.value = (video.currentTime / video.duration) * 100;
        //progress.value = (video.currentTime * 100) / video.duration;
        progress.value = 50;
    };
    /*
        SOUND
    */
    var playerMuteToggle = function(e) {
        if (video.muted) {
            video.muted = false;
            muteOnOffSpan.classList.remove('glyphicon-volume-off');
            muteOnOffSpan.classList.add('glyphicon-volume-down');
        } else {
            video.muted = true;
            muteOnOffSpan.classList.remove('glyphicon-volume-down');
            muteOnOffSpan.classList.add('glyphicon-volume-off'); 
        }
    };
    var playerVolumeControl = function(e) {
        e.preventDefault();
        video.volume = volumeSlider.value/100;
    };
    /*
        PLAYLIST
    */
    var changeVideoSource = function(e) {
        e.preventDefault();
        console.log(playlistUL);
    };

    // Añadimos los listeners a cada botón para que ejecuten su función cuando son pulsados
    playPauseBtn.addEventListener('click', playerPlayPause, false);
    playPauseBtn.addEventListener('click', showBrieflyPlayPause, false);
    stopBtn.addEventListener('click', playerStop, false);
    forwardBtn.addEventListener('click', playerForward, false);
    rewindBtn.addEventListener('click', playerRewind, false);
    startBtn.addEventListener('click', playerStart, false);
    endBtn.addEventListener('click', playerEnd, false);
    fullscreenBtn.addEventListener('click', playerFullScreen, false);
    muteBtn.addEventListener('click', playerMuteToggle, false);
    volumeSlider.addEventListener('input', playerVolumeControl, false);

    // Añadimos los listeners del video
    video.addEventListener('canplay', playVideo, false);
    video.addEventListener('progress', updateVideoProgress, false);
    video.addEventListener('ended', updateControls, false);
    video.addEventListener('click', playerPlayPause, false);
    video.addEventListener('click', showBrieflyPlayPause, false);

    // Añadimos los listeners del playlist
    playlistUL.addEventListener('click', changeVideoSource, false);
};