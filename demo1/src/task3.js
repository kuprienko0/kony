export default function triangles(trianglesArr){
    const incorrectData = trianglesArr.filter((triangle)=>{
        if (!triangle.vertical || triangle.vertical.length !== 3) return true;
        const [first,second,third] = triangle.vertices.toLowerCase().split('');
        if (!triangle[first] || !triangle[second] || !triangle[third]) return true;
        if (typeof triangle[first] !== "number" || typeof triangle[second] !== "number" || typeof triangle[third] !== "number") return true;
        return false;
    });
    if (incorrectData.length) return
    let sortArr = trianglesArr.sort((a, b)=>{
        const [first,second,third] = a.vertices.toLowerCase().split('');
        let semiPerA = (a[first] + a[second] +a[third])/2;
        let semiPerB = (b[first] + b[second] +b[third])/2;
        let squareA = Math.sqrt(semiPerA*(semiPerA - a[first]) * (semiPerA - a[second]) * (semiPerA - a[third]));
        let squareB = Math.sqrt(semiPerB* (semiPerB - b[first]) * (semiPerB - b[second]) * (semiPerB - b[third]));
        return squareA - squareB;
    });
    return sortArr;
}