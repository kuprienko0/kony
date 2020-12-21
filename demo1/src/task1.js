export default function chessBoard(height, width, char){
    if (arguments.length < 3) {
        return JSON.stringify(
            {
            status: 'failed',
            reason: 'Incorrect number of arguments. You have to enter 3 arguments'
            })
    };
    if (char.length > 1) {
        return JSON.stringify(
            {
            status: 'failed',
            reason: 'Incorrect arguments. Enter one symbol for this board.'
            })
    };
    if (typeof height !== "number" || typeof width !== "number" || typeof char !== "string") {
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect type of arguments'
            })
    };
    if (height < 0 || width < 0){
        return JSON.stringify(
            {
                status: 'failed',
                reason: 'Incorrect value of arguments. Argument may be more than 0.'
            })
    };
    if (height === 0 || width === 0){
        return '';
    };

    let  board = '';
    for (let i=0; i < height; i++){
       board += `${ `${(i % 2) ? `${char} ` : ` ${char}` }`.repeat(width/2) }\n`;
    };
    return board;
}
