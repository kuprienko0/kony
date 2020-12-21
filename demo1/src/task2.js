export default function envelops (first, second){
    if (typeof first !== "object" || typeof second !== "object") {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect type of arguments.'})
    };
    if (!first || !second) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect envelop`s data. You have to enter data about 2 envelops'})
    };
    if (!first.height || !first.width || !second.height || !second.width) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect envelop`s data. You have to enter 2 envelop`s side for every envelop.'
        })
    };
    if (first.height <= 0 || first.width <= 0 || second.height <= 0 || second.width <= 0 ) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Incorrect envelop`s data. Every side may be more than 0.'})
    };
    if (first.height * first.width === second.height * second.width) return 0;

    let maxEnvelop, minEnvelop;
    if (first.height * first.width > second.height * second.width){
        maxEnvelop = {...first, number: 1};
        minEnvelop = {...second, number: 2};
    } else {
        maxEnvelop = {...second, number: 2};
        minEnvelop = {...first, number: 1};
    };
    const powMinWidth = Math.pow(minEnvelop.width,2);
    const powMaxWidth = Math.pow(maxEnvelop.width, 2);
    const powMaxHeight = Math.pow(maxEnvelop.height, 2);
    const formula = (2 * minEnvelop.width * minEnvelop.height * maxEnvelop.width + (powMaxWidth - powMaxHeight) * Math.sqrt(powMaxWidth + powMaxHeight - powMinWidth))/(powMaxWidth + powMaxHeight);
    if ((minEnvelop.width <= maxEnvelop.width && minEnvelop.height <= maxEnvelop.height) ||
        (minEnvelop.width > maxEnvelop.width && maxEnvelop.height >= formula)) {
        return maxEnvelop.number
    } else return 0;
};