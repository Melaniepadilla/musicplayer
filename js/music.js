const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const title = document.getElementById('title')
const audio = document.getELementById('audio')
const cover = document.getElementById('cover')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')


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

function playSong() {

   musicContainer.classList.add('play')
   audio.play()
   playBtn.querySelector('i.fa-solid').classList.remove('fa-play')
   playBtn.querySelector('i.fa-solid').classList.add('fa-pause')
   
   }

   //pause song
function pauseSong() {

   musicContainer.classList.remove('play')
   audio.pause()
   playBtn.querySelector('i.fa-solid').classList.add('fa-play')
   playBtn.querySelector('i.fa-solid').classList.remove('fa-pause')
   
   }
   
   function updateProgress(e) {
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime/duration) * 100
   progress.style.width = `${progressPercent}%`
   }
   

function setProgress(e) {
   const width = this.clientWidth
   console.log(width)
   const clickX = e.offsetX;
   const duration = audio.duration
   
   audio.currentTime = clickX / width * duration
   }
   

   playBtn.addEventListener('click', () => {
      const isPlaying = musicContainer.classList.contains('play')
      
      if(isPlaying) {
      pauseSong()
      
      } else {
      playSong()
      
      }
      })
      
      audio.addEventListener('timeupdate', updateProgress)
      
