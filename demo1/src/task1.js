export default function chessBoard( height, width, char){
  if (arguments.length < 3) return { status: 'failed', reason: 'Incorrect number of arguments'};
  if (typeof height !== "number" || typeof width !== "number" || typeof char !== "string") return { status: 'failed', reason: 'Incorrect type of arguments'};
  let  board = '';
  for (let i=0; i<Math.abs(height); i++){
     board += `${ `${(i % 2) ? `${char[0]} ` : ` ${char[0]}` }`.repeat(Math.abs(width))}\n`;
  }
  return board;
}
