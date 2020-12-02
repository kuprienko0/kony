function task1(number){
    let count = 0;
    +number.toString(2).split("").forEach((elem)=>{
        if ( elem == "1" ) count += 1;
    })
    console.log(count);
};

function task2 (str){
    let arr = str.split(" ");
    let arr2 = [];
    arr.forEach((elem) =>{
        arr2[elem.match(/[0-9]/)[0]-1] = elem;
    })
    str = arr2.join(" ")
    console.log(str);
};

function task3(cards) {
    const A = new Array(11).fill(2);
    const B = new Array(11).fill(2);
    let isLose = false;
    const check = function(arr){
        return  arr.filter((playerHp) => playerHp > 0).length > 7
    }
    cards.forEach((card) => {
        if (!isLose) {
            switch (card[0]){
                case "A":{
                    if (card[2] == 'Y') {
                        A[card[1]-1 ] -= 1
                    } else {
                        A[card[1]-1 ] -= 2
                    }
                    break;
                }
                case "B":{
                    if (card[2] == 'Y') {
                        B[card[1]-1 ] -= 1
                    } else {
                        B[card[1]-1 ] -= 2
                    }
                    break;
                }
            }
            const checkA = check(A);
            const checkB = check(B);
            if (!checkA || !checkB) {
                isLose = true
            };
        }

    })
    return [
        A.filter((playerHp) => playerHp > 0).length,
        B.filter((playerHp) => playerHp > 0).length
    ]
}
task1(1234);
task2('is2 Thi1s T4est 3a');
const rez = task3(['A4R', 'A5R', 'B4Y','B6Y', 'B6Y', 'B6Y', 'B7R']);
console.log(rez);