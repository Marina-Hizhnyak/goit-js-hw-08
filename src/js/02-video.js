import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
 
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
let currentTime = localStorage.getItem(STORAGE_KEY);

function getTimeCurrentVideo(data) {
    let timeInSeconds = data.seconds;
    localStorage.setItem(STORAGE_KEY, timeInSeconds);
};

player.on('timeupdate', throttle(getTimeCurrentVideo, 1000));

player.setCurrentTime(currentTime)
