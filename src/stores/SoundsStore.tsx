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
    sound:HTMLAudioElement|null
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
    stop:(id:string)=> void,
    initSounds:()=>void
}


export const useSoundsStore = create<SoundsStore>((set, get)=> ({
    titleMusic:{id:'title',sound:null},
    explorerMusic:{id:'explorer',sound:null},
    miiCustomMusic:{id:'miiCustom',sound:null},
    miiFinished:{id:'miiFinished',sound:null},
    startSound:{id:'start',sound:null},
    menuInSound:{id:'menuIn',sound:null},
    menuOutSound:{id:'menuOut',sound:null},
    menuHoover:{id:'menuHoover',sound:null},
    okSound:{id:'ok',sound:null},
    play:(id:string)=> {
        const {titleMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover,miiFinished} = get()
        const allSounds = [titleMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover,miiFinished]
        const findedSound = allSounds.find(sound => sound.id === id);
        if(findedSound && findedSound.sound != null) {
            findedSound.sound.play()
        }
    },
    stop:(id:string)=> {
        const {titleMusic, miiCustomMusic, explorerMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover} = get()
        const allSounds = [titleMusic, explorerMusic, miiCustomMusic, startSound, menuInSound, menuOutSound, okSound, menuHoover]
        const findedSound = allSounds.find(sound => sound.id === id);
        if(findedSound  && findedSound.sound != null) {
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
        if(findedSound  && findedSound.sound != null) {
            findedSound.sound.play()
            findedSound.sound.loop = true;
        }
    },
    initSounds:()=> {
        const {titleMusic, explorerMusic, miiCustomMusic, miiFinished, startSound, menuHoover, menuInSound, menuOutSound, okSound} = get()
        titleMusic.sound = new Audio(TitleSound)
        explorerMusic.sound = new Audio(ExplorerMusic)
        miiCustomMusic.sound = new Audio(MiiCustomMusic)
        miiFinished.sound = new Audio(MiiFinished)
        startSound.sound = new Audio(StartGame)
        menuHoover.sound = new Audio(MenuHoover)
        menuInSound.sound = new Audio(MenuIn)
        menuOutSound.sound = new Audio(MenuOut)
        okSound.sound = new Audio(OkSound)

        set({titleMusic, explorerMusic, miiCustomMusic, miiFinished, startSound, menuHoover, menuInSound, menuOutSound, okSound})
    }
}))