const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const title = document.getElementById('title')
const audio = document.getELementById('audio')
const cover = document.getElementById('cover')
//song titles
const songs = ['hey', 'summer', 'ukulele']


//keep track of song
let songIndex = 0;


loadSong(songs[songIndex])


function loadSong(song) {
title.innerText = song
audio.src = `music/${song}.mp3`
cover.src = `images/${song}.jpg`
}




playBtn.addEventListener('click', () => {
   musicContainer.classList.toggle('play')


})


