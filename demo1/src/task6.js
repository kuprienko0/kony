export default function numericalSequence(length, minPow ){
    let rez = '';
    let num = Math.ceil(Math.sqrt(minPow));
    for (let i=0; i<length; i++){
        rez += `${num}, `;
        num ++;
    };
    return rez.slice(0,rez.length-2);
}