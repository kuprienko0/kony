import chessBoard from "./src/task1.js";
import envelops from "./src/task2.js";
import triangles from "./src/task3.js";
import palindrome from "./src/task4.js";
import luckyTicket from "./src/task5.js";
import numericalSequence from "./src/task6.js";
import fibonacci from "./src/task7.js";

task1_btn.addEventListener('click', () => { task1_result.innerHTML = chessBoard(Number(task1_height.value), Number(task1_width.value), task1_char.value)});

task2_btn.addEventListener('click', () => {
    task2_result.innerHTML = `Biggest convert ${envelops(
        {
            height: Number(task2_height1.value),
            width: Number(task2_with1.value)
        },
        {
            height: Number(task2_height2.value),
            width: Number(task2_with2.value),
        }
    )}`;
});

const trianglesArray = [];
task3_add_triangle.addEventListener('click' , () => {
    const triangle = {
        vertices: task3_name.value.toUpperCase(),
    };
    const name = task3_name.value.toLowerCase();
    triangle[name[0]] = Number(task3_side_one.value);
    triangle[name[1]] = Number(task3_side_two.value);
    triangle[name[2]] = Number(task3_side_three.value);
    trianglesArray.push(triangle);
    triangles_array.innerHTML = trianglesArray.map((t) => `${t.vertices} [${t[t.vertices[0].toLowerCase()]}, ${t[t.vertices[1].toLowerCase()]}, ${t[t.vertices[2].toLowerCase()]}]`).join(' ');
});

task3_btn.addEventListener('click', () => {
    const sortedTriangles = triangles(trianglesArray);
    task3_result.innerHTML = `Sorted triangles: ${sortedTriangles.map((t) => t.vertices).join(' ')}`;
});

task4_btn.addEventListener('click', () => { task4_result.innerHTML = palindrome(task4_number.value)});

task5_btn.addEventListener('click', () => { task5_result.innerHTML = luckyTicket({ min: Number(task5_min.value), max: Number(task5_max.value) })});

task6_btn.addEventListener('click', () => { task6_result.innerHTML = numericalSequence(Number(task6_length.value), Number(task6_minPow.value)); console.log(numericalSequence(Number(task6_length.length), Number(task6_minPow.length))) });

task7_length.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value !== '') {
        task7_max.disabled = true;
        task7_min.disabled = true;
    } else {
        task7_max.disabled = false;
        task7_min.disabled = false;
    }
});
const task7MaxMinEvent = () => {
    if (task7_min.value !== '' || task7_max.value !== '') {
        task7_length.disabled = true;
    } else {
        task7_length.disabled = false;
    }
};
task7_min.addEventListener('input', task7MaxMinEvent);
task7_max.addEventListener('input', task7MaxMinEvent);
task7_btn.addEventListener('click', () => {
    if (task7_max.value !== '') {
        task7_result.innerHTML = fibonacci({min: Number(task7_min.value), max: Number(task7_max.value)});
    } else {
        task7_result.innerHTML = fibonacci({length: Number(task7_length.value)});
    }
});


console.log(chessBoard(10,10,'*'));
console.log(envelops({width: 3, height: 4}, {width:5, height:6}));
console.log(triangles([{vertices: 'ABC', a: 10, b: 10, c: 10}, {vertices: 'CAB', a: 30, b: 30, c: 30}, {vertices: 'DEF', d: 20, e: 20, f: 20}]));
console.log(palindrome('1232101234588012877814256311'));
console.log(luckyTicket({min: 100000, max: 100200}));
console.log(numericalSequence(20,10));
console.log(fibonacci({min: 10, max: 200}));