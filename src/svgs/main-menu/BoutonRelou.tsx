export const BoutonRelou = ({scale}:{scale:number}) => {

    const width = 445*scale;
    const height = 163*scale;

 return <svg width={width} height={height} viewBox="0 0 445 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.5 159C108.614 159 132.473 145.073 146.317 124H427C434.732 124 441 117.732 441 110V53C441 45.268 434.732 39 427 39H146.317C132.473 17.9268 108.614 4 81.5 4C38.6979 4 4 38.6979 4 81.5C4 124.302 38.6979 159 81.5 159Z" stroke="white" stroke-width="8"/>
<g filter="url(#filter0_d_101_368)">
<path d="M144.122 120C131.183 141.001 107.977 155 81.5 155C40.907 155 8 122.093 8 81.5C8 40.907 40.907 8 81.5 8C107.977 8 131.183 21.9995 144.122 43H427C432.523 43 437 47.4772 437 53V110C437 115.523 432.523 120 427 120H144.122Z" fill="url(#paint0_linear_101_368)" fill-opacity="0.6" shape-rendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_101_368" x="4" y="8" width="437" height="155" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_368"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_368" result="shape"/>
</filter>
<linearGradient id="paint0_linear_101_368" x1="38" y1="39.5" x2="432" y2="122" gradientUnits="userSpaceOnUse">
<stop stop-color="#6F6FF1"/>
<stop offset="1" stop-color="#5EB9E5"/>
</linearGradient>
</defs>
</svg>
}