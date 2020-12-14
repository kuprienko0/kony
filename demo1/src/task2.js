export default function envelops (first, second){
    if (typeof first !== "object" || typeof second !== "object") return new Error('Incorrect type of arguments');
    if (!first && !second) return { status: 'failed', reason: 'Incorrect envelop`s data'};
    if (!first.height || !first.width || !second.height || !second.width) return { status: 'failed', reason: 'Incorrect envelop`s data'};
    if (first.height * first.width === second.height * second.width) return 0;
    let maxEnvelop, minEnvelop;
    if (first.height * first.width > second.height * second.width){
        maxEnvelop = {...first, number: 1};
        minEnvelop = {...second, number: 2};
    } else {
        maxEnvelop = {...second, number: 2};
        minEnvelop = {...first, number: 1};
    };
    if((minEnvelop.width <= maxEnvelop.width && minEnvelop.height <= maxEnvelop.height) ||
        (minEnvelop.width > maxEnvelop.width && maxEnvelop.height >=
                (2 * minEnvelop.width * minEnvelop.height
                * maxEnvelop.width + (Math.pow(maxEnvelop.width, 2)
                - Math.pow(maxEnvelop.height, 2)) * Math.sqrt(Math.pow(maxEnvelop.width,2)
                + Math.pow(maxEnvelop.height,2) - Math.pow(minEnvelop.width,2)))/(Math.pow(maxEnvelop.width,2) + Math.pow(maxEnvelop.height,2)))){
        return maxEnvelop.number
    } else return 0;
};