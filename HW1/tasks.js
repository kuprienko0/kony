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

function task3 (cards) {
    const A = new Array(11).fill(2);
    const B = new Array(11).fill(2);
    const check = function(arr){
        return  arr.filter((playerHp) => playerHp > 0).length >=7
    }
    cards.forEach((card) => {
        if (check(A) && check(B)) {
            switch (card[0]){
                case "A":{
                    if (card[card.length-1] == 'Y') {
                        A[card.match(/\d+/)[0]-1] -= 1
                    } else {
                        console.log(card.match(/\d+/)[0])
                        A[card.match(/\d+/)[0]-1] -= 2
                        console.log(A)
                    }
                    break;
                }
                case "B":{
                    if (card[card.length-1] == 'Y') {
                        B[card.match(/\d+/)[0]-1] -= 1
                    } else {
                        B[card.match(/\d+/)[0]-1] -= 2
                    }
                    break;
                }
            }
        }

    })
    return [
        A.filter((playerHp) => playerHp > 0).length,
        B.filter((playerHp) => playerHp > 0).length
    ]
}
task3(["A4R", "A6R", "A8R", "A10R", "A11R"]);
task1(1234);
task2('is2 Thi1s T4est 3a');
