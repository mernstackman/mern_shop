/* 
Args: arrays of numbers [screenSize,fontSize], [screenSize,fontSize]
example: responsiveFont([1920, 80], [320, 36])
*/
export const responsiveFont = (maxSize = [], minSize = []) => {
    const x = (maxSize[1] - minSize[1]) / (maxSize[0] - minSize[0]);
    const y = maxSize[1] - maxSize[0] * x;

    return `calc(100vw*${x} + ${Math.round(y)}px)`;
};