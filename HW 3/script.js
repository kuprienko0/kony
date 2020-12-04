// pop
function myPop (arr){
    if (arr.length ==0 ) return undefined;
    let last = arr[arr.length-1]
    arr.length--;
    return last
}

// push
function myPush(arr, args){
    arr = [...arr,...args]
    return arr.length
}

// shift
function myShift (arr){
    if (arr.length ==0 ) return undefined;
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.length--;
    return arr;
}
// unshift
function myUnshift(arr, args) {
    let myArr = [...args, ...arr];
    return myArr.length
}

// concat
function myConcat(arr, args){
    let myArr = [...arr,...args]
    return myArr
}

let arr = ['Яблоко', 'Банан', 'Ананас'];

//map => reduce
    const map = arr.reduce((rez, currentValue)=>{
        rez.push(currentValue[0]);
        return rez;
    }, []);
    console.log(map)

//filter => reduce
    const filter = arr.reduce((rez, currentValue)=>{
        currentValue[0].toLowerCase() === 'а' ? rez.push(currentValue) : rez;
        return rez
    }, []);
    console.log(filter)


//forEach => reduce
const forEach = arr.reduce((rez, currentValue, index)=>{
    rez.push(`${index + 1} : ${currentValue}`);
    return rez;
}, []);
console.log(forEach)


console.log(myPop(["i","love","Dnipro"]));
console.log(myPush(["i","love","Dnipro"],["so","much","!"]));
console.log(myUnshift(["i","love","Dnipro"],["so","much","!"]));
console.log(myShift(["v","i","c","t","o","r","y"]));
console.log(myConcat(["i","love","Dnipro"],["so","much","!"]));
console.log(fromMapToReduce(["Яблоко","Банан","Апельсин"]));
console.log(fromFilterToReduce(["Яблоко","Банан","Апельсин"]));
console.log(fromForEachToReduce(["Яблоко","Банан","Апельсин"]));