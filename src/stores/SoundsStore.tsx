import { create } from "zustand";

const TitleSound = '/sounds/TitleScreen.mp3';
const ExplorerMusic = '/sounds/ExplorerMusic.mp3';
const MiiCustomMusic = '/sounds/MiiCreatorMusic.mp3';
const StartGame = '/sounds/StartGame.mp3';
const MiiFinished = '/sounds/MiiFinished.mp3';
const MenuHoover = '/sounds/MenuSelect.wav'
const MenuIn = '/sounds/MenuIN.mp3';
const MenuOut = '/sounds/MenuOut.mp3';
const OkSound = '/sounds/Ok-Sound.mp3';



interface Sound {
    id:string,
    sound:HTMLAudioElement
}

interface SoundsStore {
    titleMusic:Sound,
    explorerMusic:Sound,
    miiCustomMusic:Sound,
    miiFinished:Sound,
    startSound:Sound,
    menuInSound:Sound,
    menuOutSound:Sound,
    menuHoover:Sound,
    okSound:Sound,
    play:(id:string)=> void,
    playLoop:(id:string)=> void,
    stop:(id:string)=> void
}


export const useSoundsStore = create<SoundsStore>((set, get)=> ({
    titleMusic:{id:'title',sound:new Audio(TitleSound)},
    explorerMusic:{id:'explorer',sound:new Audio(ExplorerMusic)},
    miiCustomMusic:{id:'miiCustom',sound:new Audio(MiiCustomMusic)},
    miiFinished:{id:'miiFinished',sound:new Audio(MiiFinished)},
    startSound:{id:'start',sound:new Audio(StartGame)},
    menuInSound:{id:'menuIn',sound:new Audio(MenuIn)},
    menuOutSound:{id:'menuOut',sound:new Audio(MenuOut)},
    menuHoover:{id:'menuHoover',sound:new Audio(MenuHoover)},
    okSound:{id:'ok',sound:new Audio(OkSound)},
    play:(id:string)=> {
        const {titleMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover,miiFinished} = get()
        const allSounds = [titleMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover,miiFinished]
        const findedSound = allSounds.find(sound => sound.id === id);
        if(findedSound) {
            findedSound.sound.play()
        }
    },
    stop:(id:string)=> {
        const {titleMusic, miiCustomMusic, explorerMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover} = get()
        const allSounds = [titleMusic, explorerMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover]
        const findedSound = allSounds.find(sound => sound.id === id);
        if(findedSound) {
            if(findedSound.sound.loop) {
                findedSound.sound.loop = false;
            }
            findedSound.sound.pause();
            findedSound.sound.currentTime = 0;
        }
    }, 
    playLoop:(id:string)=> {
        const {titleMusic, miiCustomMusic, explorerMusic} = get()
        const allSounds = [titleMusic, miiCustomMusic, explorerMusic]
        const findedSound = allSounds.find(sound => sound.id === id);
        if(findedSound) {
            findedSound.sound.play()
            findedSound.sound.loop = true;
        }
    },
}))