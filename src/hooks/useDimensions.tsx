import { useEffect, useState } from 'react'

const useDimensions = () => {

    const [dimensions, setDimensions] = useState<{w:number, h:number}>({w:0, h:0});

    useEffect(()=> {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setDimensions({w:width, h:height});
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return ()=> {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    const vwANDvh = (w:number, h:number) => {
        const vw =(w/100)*dimensions.w
        const vh =(h/100)*dimensions.h
        return (vw+vh).toString()+"px"
    }



    const vw = (value:number) => {
        return ((value/100)*dimensions.w).toString()+"px"
    }

    const vh = (value:number) => {
        return ((value/100)*dimensions.h).toString()+"px"
    }

    return {width:dimensions.w, height:dimensions.h, vh, vw,vwANDvh}
}

export default useDimensions