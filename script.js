
const songs = [
    {
        title: "BELIEVER",
        artist: "Imagine Dragons",
        src: "https://appsonwindows.com/apk/8383446/",
        cover: "https://i.ytimg.com/vi/F8OrAL-PtlE/maxresdefault.jpg"
    },
    {
        title: "BLANK SPACE",
        artist: "Taylor Swift",
        src: "song2.mp3",
        cover: "https://i.ytimg.com/vi/z0PlHSOdp44/maxresdefault.jpg"
    },
    {
        title: "FRI(END)S",
        artist: "V(BTS)",
        src: "song3.mp3",
        cover: "https://i.ytimg.com/vi/dyZkMmTJ8Lw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgNCh_MA8=&rs=AOn4CLCe6BqxlI4-VEcAjmw5Mmt_VvQY4w"
    }
];
let songIndex = 0;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

loadSong(songs[songIndex]);


function playSong() {
    audio.play();
    playBtn.innerText = "Pause";
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = "Play";
}

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});


function nextSong() {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}


function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}


nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
