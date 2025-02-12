import { useMemo } from "react";

const useSounds = () => {

    const TitleSound = '/sounds/TitleScreen.mp3';
    const TitleSoundAudio = useMemo(()=> {
        return new Audio(TitleSound) 
    },[TitleSound])

    const MiiCustomMusic = '/sounds/MiiCreatorMusic.mp3';
    const MiiCustomMusicAudio = useMemo(()=> {
        return new Audio(MiiCustomMusic) 
    },[MiiCustomMusic])
    const playMiiCustomMusic = () => {
        MiiCustomMusicAudio.play();
    }
    const stopMiiCustomMusic = () => {
        MiiCustomMusicAudio.pause();
        MiiCustomMusicAudio.currentTime = 0;
    }

    const StartGame = '/sounds/StartGame.mp3';
    const StartGameAudio = useMemo(()=> {
        return new Audio(StartGame) 
    },[StartGame])
    const playStartGame = () => {
        StartGameAudio.play();
    }
    
    const MenuIn = '/sounds/MenuIN.mp3';
    const MenuInAudio = useMemo(()=> {
        return new Audio(MenuIn) 
    },[MenuIn])
    const playMenuIn = () => {
        MenuInAudio.play();
    }
    const MenuOut = '/sounds/MenuOut.mp3';
    const MenuOutAudio = useMemo(()=> {
        return new Audio(MenuOut) 
    },[MenuOut])
    const playMenuOut = () => {
        MenuOutAudio.play();
    }
    

    const OkSound = '/sounds/Ok-Sound.mp3';
    const OkSoundAudio = useMemo(()=> {
        return new Audio(OkSound) 
    },[OkSound])

    const MenuSelect = '/sounds/MenuSelect.wav';
    const MenuSelectAudio = useMemo(()=> {
        return new Audio(MenuSelect) 
    },[MenuSelect])


    const playTitleMusic = () => {
        TitleSoundAudio.play()
    }
    const stopTitleMusic = () => {
        TitleSoundAudio.pause();
        TitleSoundAudio.currentTime = 0;
    }

    const playOk = () => {
        OkSoundAudio.play(); 
    }

    const playMenuSelect = () => {
        MenuSelectAudio.play()
    }
    const stopMenuSelect = () => {
        MenuSelectAudio.pause();
        MenuSelectAudio.currentTime = 0;
    }

    return {TitleSoundAudio,
        playTitleMusic, stopTitleMusic,
        playOk, 
        playMenuSelect, stopMenuSelect, 
        playMiiCustomMusic, stopMiiCustomMusic,
        playStartGame,
        playMenuIn, playMenuOut}
}

export default useSounds