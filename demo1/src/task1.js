export default function chessBoard( height, width, char){
  let  board = '';
  for (let i=0; i<height; i++){
     board += `${ `${(i % 2) ? `${char} ` : ` ${char}` }`.repeat(width)}\n`
  }
  return board;
}
