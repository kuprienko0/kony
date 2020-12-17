import chessBoard from "./src/task1.js";
import envelops from "./src/task2.js";
import triangles from "./src/task3.js";
import luckyTicket from "./src/task5.js";
import numericalSequence from "./src/task6.js";



console.log(chessBoard(10,10,'*'));
console.log(envelops({width: 3, height: 4}, {width:5, height:6}));
console.log(triangles([{vertices: 'ABC', a: 10, b: 10, c: 10}, {vertices: 'CAB', a: 30, b: 30, c: 30}, {vertices: 'DEF', d: 20, e: 20, f: 20}]));
console.log(luckyTicket(100000, 110000));
console.log(numericalSequence(20,10));