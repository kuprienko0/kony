let s="Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
function meeting (str){
   return str.toUpperCase()
    .split(";")
    .map((elem)=> elem.split(":"))
    .sort()
    .sort((a,b)=>{
        if (a[1]>b[1]) return 1;
        if (a[1]<b[1]) return -1;
        return 0;
    })
    .map((elem)=> `(${elem[1]}, ${elem[0]})`)
    .join(" ");
};


function findAChair(hallsArr,missingChair){
    let allExtraChair = 0, extraHallsChair =0 ;
    if (missingChair == 0) return  'Game On';
    let myFindings = hallsArr.reduce((acc,curr) =>{
        extraHallsChair = curr[1] - curr[0].length;
        if (extraHallsChair <= 0 ) extraHallsChair = 0;
        if (allExtraChair < missingChair) {
            if (extraHallsChair <= (missingChair-allExtraChair)){
                allExtraChair += extraHallsChair;
                acc.push(extraHallsChair)
            } else {
                acc.push(missingChair-allExtraChair);
                allExtraChair += missingChair-allExtraChair;
            };
        };
        return acc;
    },[]);
    if(allExtraChair < missingChair) return  'Not enough!'
    else return myFindings;
};


let points = [
    [2,2], // A
    [2,8], // B
    [5,5], // C
    [6,3], // D
    [6,7], // E
    [7,4], // F
    [7,9]  // G
];
function distanceBetweenPoints(pointsData){
    let minLength = Infinity;
    let length = 1;
    let rez = [];
    pointsData.forEach((currPoint,index) =>{
        for (let i=index+1; i<pointsData.length; i++){
            length = Math.sqrt(Math.pow((pointsData[i][0]-currPoint[0]),2)+Math.pow((pointsData[i][1]-currPoint[1]),2));
            if (length < minLength) {
                minLength = length;
                rez = `[[${pointsData[i][0]},${pointsData[i][1]}],[${currPoint[0]},${currPoint[1]}]]`;
            };
        };
    });
    return rez;
};



console.log(meeting(s));

console.log(findAChair([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));
console.log(findAChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 5], ['XXX', 1]], 5));
console.log(findAChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

console.log(distanceBetweenPoints(points));

