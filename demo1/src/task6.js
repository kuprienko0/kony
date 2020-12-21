export default function numericalSequence(length, minPow ){
    if (typeof length !== "number" || typeof minPow !== "number") {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect type of arguments'
        })
    };
    if (length === 0) return '';
    if (length < 0 || minPow <= 0) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect arguments data.'
        })
    };

    let rez = '';
    let num = Math.ceil(Math.sqrt(minPow));
    for (let i=0; i<length; i++){
        rez += `${num}, `;
        num ++;
    };

    return rez.slice(0,rez.length-2);
}