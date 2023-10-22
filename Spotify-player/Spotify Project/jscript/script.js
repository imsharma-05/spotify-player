console.log("Welcome to Spotify");

// Initialize the variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong');
let singer = document.getElementById('singer');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Desire", singerName: " - AP Dhillon", filePath: "songs/1.mp3", coverPath: "/img/Desire.jfif"},

    {songName: "Salame-e-Ishq", singerName: " - Shankar Mahadevan", filePath: "songs/2.mp3", coverPath: "/img/salame.jpg"},

    {songName: "Pani", singerName: " - Maninder Buttar", filePath: "songs/3.mp3", coverPath: "/img/Pani.jpg"},

    {songName: "Jugnu", singerName: " - Badshah", filePath: "songs/4.mp3", coverPath: "/img/jugnu.jpg"},

    {songName: "Bholenath", singerName: " - Kaka", filePath: "songs/5.mp3", coverPath: "/img/Bholenaath.jfif"},
]

songItem.forEach((element, i) => {
  
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song")[0].innerText = songs[i].songName;

});



//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.src = `songs/${songIndex+1}.mp3`;
      
        masterSong.innerText = songs[songIndex].songName;
        singer.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
       
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

        
        

        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
});

// Listen to Events

audioElement.addEventListener('timeupdate', ()=>{
   

    //update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        
        if(audioElement.paused || audioElement.currentTime<=0){
   
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        singer.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        }
        else{
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        singer.innerText = songs[songIndex].singerName;
        audioElement.currentTime = 0;
        audioElement.pause();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        }

        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    singer.innerText = songs[songIndex].singerName;
  

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 4
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
    singer.innerText = songs[songIndex].singerName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})