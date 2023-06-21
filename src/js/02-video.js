import Player from '@vimeo/player';
import throttle from "lodash.throttle";
 
const videoPlayer = document.querySelector('#vimeo-player');

// инициализировали плейер с элементом 
const player = new Player(videoPlayer);

// инициализация Throttle функции
const timeThrottle = throttle((seconds) => {
    // сохраняем время в локальное хранилище 
    localStorage.setItem("videoplayer-current-time", seconds)
}, 1000);

// отслеживание события timeupdate с помощью метода on() 
player.on('timeupdate', function(data) {
   timeThrottle(data.seconds)
});

//создание переменной, где будет получать время из локального хранилища по ключу
const saveTime = localStorage.getItem("videoplayer-current-time");

if (saveTime) { 
    player.setCurrentTime(saveTime)
}

