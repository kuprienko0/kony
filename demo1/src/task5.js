export default function luckyTicket(context){
    if (typeof context !== "object") {
        return JSON.stringify({
            status: 'failed',
            reason: 'Context object argument is not the object'
        })
};
    if (Object.keys(context).length !== 2){
        return JSON.stringify({
            status: 'failed',
            reason: 'The context object has unnecessary or missed argument(s)'
        })
    };
    let {min, max} = context;
    if (!min || !max) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect number of object fields'
        })
    };
    if (typeof min != "number" || typeof max != "number") {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect type of object fields'
        })
    };
    if (min.toString().length < 1 || min.toString().length > 6 || max.toString().length < 1 || max.toString().length > 6) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Invalid object fields. Min or max number of ticket may be from 1 to 6 symbols.'
        })
    };
    if (min <= 0 || max <= 0) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect value of object fields. Ticket`s number mast be more then 0.'
        })
    };
    if (min > max) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect type of object fields'
        })
    };
    let rez = {
        easy: 0,
        hard: 0,
        winner: null,
    };
    for (let i = min; i < max; i++){
        if (i > 1000) {
            const right = i.toString().split('').slice(i.toString().length-3).reduce((curr, next) => +curr + +next, 0);
            const left = i.toString().split('').slice(0, i.toString().length-3 ).reduce((curr, next) => +curr + +next, 0);
            if (left === right) rez.easy++;
        };
        const {even,odd} = i.toString()
            .split('')
            .reduce((curr, next) => next % 2 ? {...curr, even: +curr.even + +next}  : {...curr, odd: +curr.odd + +next}, {even: 0, odd: 0});
        if (even === odd) rez.hard++;
    };
    rez.winner = (rez.easy === rez.hard) ? 'Draw' : (rez.easy > rez.hard) ? 'Easy method' : 'Hard method';
    return JSON.stringify(rez);
};
