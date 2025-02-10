
const useSounds = () => {


    const OkSound = '/sounds/Ok-Sound.mp3';

    const play = () => {
       new Audio(OkSound).play(); 
    }



    return {play}
}

export default useSounds