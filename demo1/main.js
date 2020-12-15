import chessBoard from "./src/task1.js";
import envelops from "./src/task2.js";
import triangles from "./src/task3.js";
import luckyTicket from "./src/task5.js";
import numericalSequence from "./src/task6.js";



console.log(chessBoard(10,10,'*'));
console.log(envelops({width: 3, height: 4}, {width:5, height:6}));
console.log(triangles([{vertices: 'ABC', a: 10, b: 10, d: 10}, {vertices: 'DEF', a: 20, b: 30, c: 20}, {vertices: 'KLF', a: 30, b: 30, c: 30}]));
console.log(luckyTicket(100000, 110000));
console.log(numericalSequence(20,10));