export default function luckyTicket(min, max){
    let rez = {
        easy: 0,
        hard: 0,
        winner: null,
    };
    for (let i = min; i<max; i++){
        if (i>1000) {
            const right = i.toString().split('').slice(i.toString().length-3).reduce((curr, next) => +curr + +next, 0);
            console.log(right);
        }
    };

};
