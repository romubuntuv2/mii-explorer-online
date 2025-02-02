import { useEffect, useState } from 'react'

const useDimensions = () => {

    const [dimensions, setDimensions] = useState<{w:number, h:number}>({w:0, h:0});

    useEffect(()=> {
        const width = window.innerWidth;
        const height = window.innerHeight;
        setDimensions({w:width, h:height});
    },[])

    return {width:dimensions.w, height:dimensions.h}
}

export default useDimensions