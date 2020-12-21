export default function fibonacci(context){
    if (typeof context !== "object") {
        return JSON.stringify({
            status: 'failed',
            reason: 'Context object argument is not the object.'
        })
    };
    if (Object.keys(context).length > 2) {
        return JSON.stringify({
            status: 'failed',
            reason: 'The context object has unnecessary argument(s).'
        })
    };
    const {min, max, length} = context;
    if ((!length && (typeof min !== "number" || typeof max !== "number")) || (!max && !min && typeof length !== "number" )) {
        return JSON.stringify({
            status: 'failed',
            reason: 'Invalid object fields'
        })
    };
    return getNumber(0,1, [], context);
};

function getNumber (prev, curr, acc, context){
    const {min, max, length} = context;
    const next = prev + curr;
    if ((length && curr.toString().length > length) || (!length && prev > max)){
        return acc;
    };
    if ((length && prev.toString().length === length) || (!length && prev >= min && prev <= max)){
        acc.push(prev);
    };
    return getNumber(curr, next, acc, context);
};