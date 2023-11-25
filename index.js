let songIndex = 0;
let Backward = document.getElementById('Backward');
let Forward = document.getElementById('Forward');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let soundwave = document.getElementById('soundwave');
let D = document.getElementById('D');
let C = document.getElementById('C');
let artist = document.getElementById('songartist');
let Songnameofsong = document.getElementById('songname');
let songimage = document.getElementById('songimage');
let bottommain = document.getElementById('bottommain');
let songImg = document.getElementsByClassName('songImg');
let progressrange = document.getElementById('progressrange');
let volumeIcon = document.getElementById('volumeIcon');
let songs = [
    {songName: "Let Me Love You",filePath: "Songs/10.mp3",coverPath:"image/letyou.jpg",id:"10",artist:"-by Justi Bieber"},
    {songName: "Girls Like You",filePath: "Songs/2.mp3",coverPath:"image/girlsyou.jpg",id:"2",artist:"-by Marron 5"},
    {songName: "See You Again",filePath: "Songs/3.mp3",coverPath:"image/seeyou.jpg",id:"3",artist:"-by Charlie Puth"},
    {songName: "Photograph",filePath: "Songs/4.mp3",coverPath:"image/photograph.jpg",id:"4",artist:"-by Ed Sheeran"},
    {songName: "Cupid",filePath: "Songs/5.mp3",coverPath:"image/cupid.jpg",id:"5",artist:"-by Black Pink"},
    {songName: "Until I Found You",filePath: "Songs/6.mp3",coverPath:"image/untilyou.jpg",id:"6",artist:"-by Stephen Sanchez"},
    {songName:"As It Was",filePath:"Songs/7.mp3",coverPath:"image/asitwas.jpg",id:"7",artist:"-by Harry Styles"},
    {songName: "Night Changes",filePath:"Songs/8.mp3",coverPath:"image/nightchanges.jpg",id:"8",artist:"-by One Direction"},
    {songName:"Boy With Luv",filePath:"Songs/9.mp3",coverPath:"image/boywithluv.jpg",id:"9",artist:"-by BTS"}
]
bottommain.style.display = "none";
let b = 0;
let p  = songs[b].id;
let path = `Songs/${p}.mp3`;
let k;
k = songs[b].coverPath;
artist.childNodes[0].innerHTML = songs[b].artist;
Songnameofsong.innerHTML = songs[b].songName;
songimage.style.backgroundImage = `url(${k})`;
audioElement = new Audio(path);





// the master player
function playpause()
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        soundwave.style.opacity = 0.3;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        soundwave.style.opacity = 0;
    }
progressrange.addEventListener('change',ProgressBarupdate2);
audioElement.addEventListener('timeupdate',playpausetime2);
}

// duration updation
function playpausetime2()
{
let p = (audioElement.currentTime/audioElement.duration)*100;
progressrange.value= p;
let min = Math.floor(audioElement.duration/60);
let sec = Math.floor(audioElement.duration%60);
let cm =  Math.floor(audioElement.currentTime/60);
let cs =  Math.floor(audioElement.currentTime%60);
if(audioElement.duration)
{
if(sec<=9)
{
    D.innerHTML = `${min}:${sec}0`;
}
else{
    D.innerHTML = `${min}:${sec}`;
}
if(cs<=9)
{
    C.innerHTML = `${cm}:0${cs}`;
}
else{
    C.innerHTML = `${cm}:${cs}`;
}
}
if(audioElement.currentTime==audioElement.duration)
{
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    soundwave.style.opacity = 0;
}
}
// progress updation
function ProgressBarupdate2()
{
 if(audioElement.paused)
 {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    soundwave.style.opacity = 0.3;
 }
 audioElement.currentTime = (progressrange.value*audioElement.duration)/100;  
}
function changeVolume(e)
{
    audioElement.volume = e;
}



function changeVolumeIcon()
{
    if(audioElement.volume>0)
    {
        volumeIcon.classList.remove('fa-fa-volume-up');
        volumeIcon.classList.add('fas-fa-volume-mute');
        audioElement.volume=0;
    }
    else{
        volumeIcon.classList.remove('fas-fa-volume-mute');
        volumeIcon.classList.add('fa-fa-volume-up');
        audioElement.volume=0.5;
    }
}

//custom song
function PlaySong(event)
{
bottommain.style.display = "grid";
if(audioElement.paused==false)
{
   audioElement.pause();
}
let p = event.currentTarget.id;
let path = `Songs/${p}.mp3`;
let i=0;
let a;
let s;
let k;
while(i<songs.length)
{
    if(songs[i].id==p)
    {
        a = songs[i].artist;
        s = songs[i].songName;
        k = songs[i].coverPath;
        b=i;
        break;
    }
    i++;
}
artist.childNodes[0].innerHTML = a;
Songnameofsong.innerHTML = s
songimage.style.backgroundImage = `url(${k})`;
audioElement = new Audio(path);
audioElement.play();
playpause();
audioElement.addEventListener("ended",nextPlay);
}


// previous and forward
function nextPlay()
{
    if(audioElement.paused==false)
    {
        audioElement.pause();
    }

b++;
let p  = songs[b].id;
let path = `Songs/${p}.mp3`;
let k;
k = songs[b].coverPath;
artist.childNodes[0].innerHTML = songs[b].artist;
Songnameofsong.innerHTML = songs[b].songName;
songimage.style.backgroundImage = `url(${k})`;
audioElement = new Audio(path);
audioElement.play();
playpause();
}


function prevPlay()
{
    if(audioElement.paused==false)
    {
        audioElement.pause();
    }
    if(b<0)
    {
       audioElement.pause();
       return;
    }
b--;
let p  = songs[b].id;
let path = `Songs/${p}.mp3`;
let k;
k = songs[b].coverPath;
artist.childNodes[0].innerHTML = songs[b].artist;
Songnameofsong.innerHTML = songs[b].songName;
songimage.style.backgroundImage = `url(${k})`;
audioElement = new Audio(path);
audioElement.play();
playpause();
}