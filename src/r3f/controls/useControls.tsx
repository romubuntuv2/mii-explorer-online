import { useControlsStore } from '@/stores/ControlsStore'
import { useEffect, useState } from 'react'


interface MouseHandler {
    isDown:boolean,
    wheelDelta:number,
    movement:{x:number, y:number}
}


interface ArrowsHandler {
    isUp:boolean,
    isLeft:boolean,
    isRight:boolean
    isDown:boolean,
    isShift:boolean,
    isSpace:boolean,
    isKeyT:boolean
}


const useControls = () => {

    const {toogleChat} = useControlsStore();

    const [mouseHandler, setMouseHandler] = useState<MouseHandler>({isDown:false, wheelDelta:0,movement:{x:0, y:0}});
    const [arrowsHandler, setArrowsHandler] = useState<ArrowsHandler>({isDown:false,isLeft:false, isRight:false, isUp:false, isShift:false, isKeyT:false,isSpace:false})


    useEffect(()=> {
        const handleKeyDown = (event:KeyboardEvent) => {
            console.log(event.code)
            const newArrows = arrowsHandler
            switch(event.code) {
                case "ArrowUp": 
                    newArrows.isUp = true
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowDown": 
                    newArrows.isDown = true
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowLeft": 
                    newArrows.isLeft = true
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowRight": 
                    newArrows.isRight = true
                    setArrowsHandler(newArrows);
                    break;
                case "ShiftRight":
                    newArrows.isShift = true
                    setArrowsHandler(newArrows);
                    break;
                case "Space":
                    console.log('iiii')
                    newArrows.isSpace = true
                    setArrowsHandler(newArrows);
                    break;
                case "KeyT":
                    toogleChat();
                default:
                    break;
            }
        }
        const handleKeyUp = (event:KeyboardEvent) => {
            const newArrows = arrowsHandler
            switch(event.code) {
                case "ArrowUp": 
                    newArrows.isUp = false
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowDown": 
                    newArrows.isDown = false
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowLeft": 
                    newArrows.isLeft = false
                    setArrowsHandler(newArrows);
                    break;
                case "ArrowRight": 
                    newArrows.isRight = false
                    setArrowsHandler(newArrows);
                    break;
                case "ShiftRight":
                    newArrows.isShift = false
                    setArrowsHandler(newArrows);
                    break;
                default:
                    break;
            }
        }
        const handleWheel = (event:WheelEvent) => {
            const newMouse = mouseHandler
            newMouse.wheelDelta = event.deltaY * 1.2 * 0.01;
            setMouseHandler(newMouse)
        }

        const handleMouseDown = (event:MouseEvent) => {
            if(event.button == 0) {
                const newMouse = mouseHandler
                newMouse.movement = {x:0, y:0};
                newMouse.isDown = true;
                setMouseHandler(newMouse)
            }
        }
        const handleMouseUp = () => {
            const newMouse = mouseHandler
            newMouse.movement = {x:0, y:0};
            newMouse.isDown = false;
            setMouseHandler(newMouse)
        }
        const handleMouseMove = (event:MouseEvent) => {
            const newMouse = mouseHandler
            if(mouseHandler.isDown) {
                newMouse.movement = {x:event.movementX, y:event.movementY};
                setMouseHandler(newMouse)
            }
        }


        //#region ADD AND REMOVE EVENTS
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        return ()=> {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousedown', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        //#endregion
    },[arrowsHandler, mouseHandler])


    const haveJumped = () => {
        const newArrows = arrowsHandler
        newArrows.isSpace = false;
        setArrowsHandler(newArrows);
    }
    




return {mouseHandler,arrowsHandler, haveJumped}
}

export default useControls