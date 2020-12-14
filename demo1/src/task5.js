export default function luckyTicket(min, max){
    let rez = {
        easy: 0,
        hard: 0,
        winner: null,
    };
    for (let i = min; i<max; i++){
        if (i===0) rez.easy++;
        if (i>1000) {
            const right = i.toString().split('').slice(i.toString().length-3).reduce((curr, next) => +curr + +next, 0);
            const left = i.toString().split('').slice(0, i.toString().length-3 ).reduce((curr, next) => +curr + +next, 0);
            if (left === right) rez.easy++;
        };
        const {even,odd} = i.toString().split('').reduce((curr, next) => next % 2 ? {...curr, even: +curr.even + +next}  : {...curr, odd: +curr.odd + +next}, {even: 0, odd: 0});
        if (even === odd) rez.hard++;
    };
    rez.winner = (rez.easy === rez.hard) ? 'Draw' : (rez.easy > rez.hard) ? 'Easy method' : 'Hard method';
    return rez;
};
