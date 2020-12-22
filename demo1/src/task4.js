export default function palindrome(num){
    if (  num > -10 && num < 10 ) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect arguments. Palindrome have to be more then 10 or less than -10.'
        })
    };

    const convertedNum = num;
    const foundPalindromes = [];
    for (let i = 0; i<convertedNum.length-1; i++){
        if (convertedNum[i] === convertedNum[i+1]){
            foundPalindromes.push(finder(convertedNum, i, i+1 ))
        };
        if ( convertedNum[i] === convertedNum[i+2]){
            foundPalindromes.push(finder(convertedNum, i, i+2))
        }
    };
    foundPalindromes.sort((a,b) => b.length - a.length);
    return foundPalindromes[0];
};

function finder (convertedNum, indexFirst, indexSecond){
    let indexStart, indexEnd;
    for (let i = 0; i<convertedNum.length-1; i++){
        if (convertedNum[indexFirst-i] === convertedNum[indexSecond+i]){
            indexStart = indexFirst-i;
            indexEnd = indexSecond+i;
        } else break;
    };
    return convertedNum.split('').splice(indexStart, indexEnd-indexStart+1).join('');
}