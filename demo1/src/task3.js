export default function triangles(trianglesArr){
    const incorrectData = trianglesArr.filter((triangle)=>{
        if (!triangle.vertices || triangle.vertices.length !== 3) return true;
        const [first,second,third] = triangle.vertices.toLowerCase().split('');
        if (!triangle[first] || !triangle[second] || !triangle[third]) return true;
        if (typeof triangle[first] !== "number" || typeof triangle[second] !== "number" || typeof triangle[third] !== "number") return true;
        return false;
    });
    if (incorrectData.length) return { status: 'failed', reason: 'Incorrect arguments'};
    let isDuplicate;
    for (let i = 0; i<trianglesArr.length; i++){
        for (let j = i+1; j<trianglesArr.length; j++){
            if (trianglesArr[i].vertices.split('').sort().join('') === trianglesArr[j].vertices.split('').sort().join('')){
                isDuplicate = true;
                break
            }
        }
        if (isDuplicate) break;
    };
    if (isDuplicate) return { status: 'failed', reason: 'Incorrect arguments'};
    let sortArr = trianglesArr.sort((a, b)=>{
        const [firstA,secondA,thirdA] = a.vertices.toLowerCase().split('');
        const [firstB,secondB,thirdB] = b.vertices.toLowerCase().split('');
        const semiPerA = (a[firstA] + a[secondA] +a[thirdA])/2;
        const semiPerB = (b[firstB] + b[secondB] +b[thirdB])/2;
        const squareA = Math.sqrt((semiPerA*(semiPerA - a[firstA]) * (semiPerA - a[secondA]) * (semiPerA - a[thirdA])));
        const squareB = Math.sqrt((semiPerB* (semiPerB - b[firstB]) * (semiPerB - b[secondB]) * (semiPerB - b[thirdB])));
        return  squareB - squareA;
    });
    return sortArr;
}