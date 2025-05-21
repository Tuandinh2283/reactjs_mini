import "./Music.css";
import video1 from "../assets/Videos/video1.mp4";
import image1 from "../assets/Images_music/image1.jpg";
import image2 from "../assets/Images_music/image2.jpg";
import image3 from "../assets/Images_music/image3.jpg";
import image4 from "../assets/Images_music/image4.jpg";
import image5 from "../assets/Images_music/image5.jpg";
import { useRef, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import song_1 from "../assets/songs/Chasing - NEFFEX.mp3";
import song_2 from "../assets/songs/AURORA - Runaway (Lyrics).mp3";
import song_3 from "../assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3";
import song_4 from "../assets/songs/Catch Me If I Fall - NEFFEX.mp3";
import song_5 from "../assets/songs/Inspired (Clean) - NEFFEX.mp3";

const Music = () => {
  const [currentMusicDatails, setCurrentMusicDatails] = useState({
    songName: "Chasing",
    songArtist: "NEFFEX MP3",
    songSrc: song_1,
    songAvatar: image1,
  });

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("00 : 00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");

  const currentAudio = useRef();

  const musicAPI = [
    {
      songName: "Chasing",
      songArtist: "NEFFEX MP3",
      songSrc: song_1,
      songAvatar: image1,
    },
    {
      songName: "Catch Me if I fall",
      songArtist: "NEFFEX MP3",
      songSrc: song_2,
      songAvatar: image2,
    },
    {
      songName: "Inspired",
      songArtist: "NEFFEX MP3",
      songSrc: song_3,
      songAvatar: image3,
    },
    {
      songName: "Chasing Again",
      songArtist: "NEFFEX MP3",
      songSrc: song_4,
      songAvatar: image4,
    },
    {
      songName: "Inspired 2",
      songArtist: "NEFFEX MP3",
      songSrc: song_5,
      songAvatar: image5,
    },
  ];

  const handlMusicProgressBar = (e) => {
    const value = e.target.value;
    setAudioProgress(value);
    if (currentAudio.current) {
      const duration = currentAudio.current.duration;
      const newTime = (value / 100) * duration;
      currentAudio.current.currentTime = newTime;
    }
  };

  const handleAutoUpdate = () => {
    if (currentAudio.current && currentAudio.current.duration) {
      const currentTime = currentAudio.current.currentTime;
      const duration = currentAudio.current.duration;

      const totalMinutes = Math.floor(duration / 60);
      const totalSeconds = Math.floor(duration % 60);
      const formattedTotal = `${
        totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes
      } : ${totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds}`;
      setMusicTotalLength(formattedTotal);

      const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60);
      const formattedCurrent = `${
        currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
      } : ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
      setMusicCurrentTime(formattedCurrent);

      const progressPercent = (currentTime / duration) * 100;
      setAudioProgress(progressPercent);
    }
  };

  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const avatarClass = ["objectFitCover", "objectFitContain", "none"];

  const handleAvatar = () => {
    setAvatarClassIndex((prevIndex) =>
      prevIndex >= avatarClass.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAudioPlay = () => {
    if (currentAudio.current) {
      if (currentAudio.current.paused) {
        currentAudio.current.play();
        setIsAudioPlaying(true);
      } else {
        currentAudio.current.pause();
        setIsAudioPlaying(false);
      }
    }
  };

  const updateCurrentMusicDetails = (index) => {
    const music = musicAPI[index];
    setCurrentMusicDatails({
      songName: music.songName,
      songArtist: music.songArtist,
      songSrc: music.songSrc,
      songAvatar: music.songAvatar,
    });
    setIsAudioPlaying(true);
    setAudioProgress(0);
    setMusicCurrentTime("00 : 00");
    setMusicTotalLength("00 : 00");

    setTimeout(() => {
      currentAudio.current.play();
    }, 100); // đảm bảo file audio load xong
  };

  const handleNextSong = () => {
    const nextIndex = (musicIndex + 1) % musicAPI.length;
    setMusicIndex(nextIndex);
    updateCurrentMusicDetails(nextIndex);
  };

  const handlePreviewSong = () => {
    const prevIndex = (musicIndex - 1 + musicAPI.length) % musicAPI.length;
    setMusicIndex(prevIndex);
    updateCurrentMusicDetails(prevIndex);
  };

  return (
    <div className="container">
      <audio
        src={currentMusicDatails.songSrc}
        ref={currentAudio}
        onEnded={handleNextSong}
        onTimeUpdate={handleAutoUpdate}
      ></audio>

      <video
        src={video1}
        autoPlay
        muted
        loop
        className="backgroundVideo"
      ></video>

      <div className="music-Contaner">
        <p className="musicPlayer">Music Player</p>
        <p className="music-Head-Name">{currentMusicDatails.songName}</p>
        <p className="music-Artist-Name">{currentMusicDatails.songArtist}</p>

        <img
          src={currentMusicDatails.songAvatar}
          className={avatarClass[avatarClassIndex]}
          onClick={handleAvatar}
          alt="song Avatar"
          id="songAvatar"
        />

        <div className="musicTimerDiv">
          <p className="musicCurrentTime">{musicCurrentTime}</p>
          <p className="musicTotalLenght">{musicTotalLength}</p>
        </div>

        <input
          type="range"
          name="musicProgressBar"
          className="musicProgressBar"
          value={audioProgress}
          min="0"
          max="100"
          onChange={handlMusicProgressBar}
          style={{ "--progress": `${audioProgress}%` }}
        />

        <div className="musicControler">
          <i
            className="fa-solid fa-backward musicControler"
            onClick={handlePreviewSong}
          />
          <i
            className={`fa-solid ${
              isAudioPlaying ? "fa-pause-circle" : "fa-circle-play"
            } playBtn`}
            onClick={handleAudioPlay}
          />
          <i
            className="fa-solid fa-forward musicControler"
            onClick={handleNextSong}
          />
        </div>
      </div>

      <div className="changeBackBtn">Change Background</div>
    </div>
  );
};

export default Music;
