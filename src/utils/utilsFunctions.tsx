export const TransformInterpolate = (value:number, input:[number, number], output:[number,number]) => {
    const ratio = (value - input[0]) / (input[1] - input[0]);
    return output[0] + ratio * (output[1] - output[0]);
}