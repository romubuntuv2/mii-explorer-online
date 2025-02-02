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
}


const useControls = () => {


    const [mouseHandler, setMouseHandler] = useState<MouseHandler>({isDown:false, wheelDelta:0,movement:{x:0, y:0}});
    const [arrowsHandler, setArrowsHandler] = useState<ArrowsHandler>({isDown:false,isLeft:false, isRight:false, isUp:false})


    useEffect(()=> {
        const handleKeyDown = (event:KeyboardEvent) => {
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







return {mouseHandler,arrowsHandler}
}

export default useControls