//concat()
 function myConcat(...arguments){
    let rez = '';
    for(let i=0; i<arguments.length; i++){
        rez = rez + arguments[i];
    }
    return rez;
}


//lastIndexOf()
 function myLastIndexOf(str, searchValue, fromIndex){
    let index, _fromIndex = str.length-1 ;
    if (fromIndex && fromIndex<str.length) _fromIndex = fromIndex;
     if (fromIndex < 0) _fromIndex = 0;
    for (let i = _fromIndex; i>=0; i--){
        if (str[i] == searchValue[searchValue.length-1]) {
            for( let j = 0; j < searchValue.length; j++){
                if (str[i-searchValue.length+1+j] != searchValue[j]) break
                if (j == searchValue.length-1) index = i-searchValue.length+1
            }
        };
    };
    if (!index && index !== 0) return -1;
    return index;
}


//includes()
 function myIncludes(str,searchValue,fromIndex){
     let index, _fromIndex = str.length-1 ;
     if (fromIndex && fromIndex<str.length) _fromIndex = fromIndex;
     if (fromIndex < 0) _fromIndex = 0;
     for (let i = _fromIndex; i>=0; i--){
         if (str[i] == searchValue[searchValue.length-1]) {
             for( let j = 0; j < searchValue.length; j++){
                 if (str[i-searchValue.length+1+j] != searchValue[j]) break
                 if (j == searchValue.length-1) index = i-searchValue.length+1
             }
         };
     };
     if (!index && index !== 0) return false;
    return true;
}


//repeat()
 function myRepeat(str, count){
    if (count<0 || count >= Infinity) return new RangeError();
    if (count === 0) return '';
    let rez = '';
    for(let i=0; i<count; i++){
        rez = rez + str;
    }
    return rez;
};


//substr()
function mySubstr(str, start, length){
    let searchTo = str.length;
    let rez = "";
    let searchFrom = start;
    if (length <0 || length === 0 || start >=str.length-1) return "";
    if (length && start+length <= str.length) searchTo = start+length;
    if (start < 0) searchFrom = str.length+start
    if (str.length - length < searchFrom) searchTo = str.length;
    for (let i = searchFrom; i<searchTo; i++){
        rez += str[i];
    }
    return rez;
}

//substring2()
function mySubstring2(str, indexA, indexB){
    let searchTo = indexB;
    let searchFrom = indexA;
    let rez = "";
    if (indexA ==indexB) return "";
    if (indexA < 0 || indexA == NaN) indexA = 0;
    if (indexB < 0 || indexB == NaN) indexB = 0;
    for (let i = searchFrom; i<searchTo; i++){
        rez += str[i];
    }
    return rez;
}

//substring()
 function mySubstring(str, indexA, indexB){
    indexB = str.length;
    let myindexB;
    if (indexB) myindexB = indexB
    if (indexA ==indexB) return "";
    if (indexA < 0 || indexA == NaN) indexA = 0;
    if (indexB < 0 || indexB == NaN) indexB = 0;
    if (indexA > str.length) indexA = str.length;
    if (indexB > str.length) indexB = str.length;
    if (indexA > myindexB) {
        let c = indexA;
        indexA = myindexB;
        myindexB = c;
    };
    let rez = '';
    for (let i = indexA; i<myindexB; i++){
        rez+= str[i];
    };
    return rez;


}
console.log(myConcat('hello'));
console.log(myConcat());
console.log(myLastIndexOf('abcdef', 'de'));
console.log(myLastIndexOf('abcdef', 'df'));
console.log(myLastIndexOf('abcdef', 'a', 3));
console.log(myLastIndexOf('abcdef', 'a', 0));
console.log(myLastIndexOf('abcdef', 'a', -5));
console.log(myLastIndexOf('abcdef', 'a', 1000));
console.log(myIncludes('abcdef', 'cd'));
console.log(myIncludes('abcdef', 'kl'));
console.log(myIncludes('abcdef', 'cd', 5));
console.log(myRepeat('I WILL NOT WASTE CHALK, ', 2));
console.log(myRepeat('I WILL NOT WASTE CHALK, ', -1));
console.log(myRepeat('I WILL NOT WASTE CHALK, ', 0));
console.log(myRepeat('I WILL NOT WASTE CHALK, ', Infinity));
console.log(myRepeat('I WILL NOT WASTE CHALK, '));
console.log(mySubstr('I love Dnipro', 2,4));
console.log(mySubstr('I love Dnipro', -2,3 ));
console.log(mySubstring('I love Dnipro', 2,3 ));
console.log(mySubstring2('I love Dnipro', 2,3 ));
console.log(mySubstring('I love Dnipro', 2));
console.log(mySubstring2('I love Dnipro', 2));