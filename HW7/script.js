let example = [[1, 1, 2],
                [1,2, 2],
                [2, 1, 2]];
function ticTacToe (arr){
    const winPosition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let rez = 0;
    let board = arr.reduce((acc,curr)=>[...acc,...curr],[]);
    if (board.includes(0)) return -1;
    winPosition.forEach(([a,b,c])=>{
        if (board[a] === board[b] && board[b] === board[c] ){
            rez = board[a] === 1 ? 1 : 2;
        };
    });
    return rez;
};
let example2 = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

function hiddenMessage (text){
        if(!text) return '';
        let sentences = text.split(/\. |! |\? /);
        let firstSentence = sentences[0].split(/, |\. | /);
        let answer = '';
        firstSentence.forEach((item,index)=>{
            let temp = item.split('');
            let length = temp.includes('\'') ? temp.length-1 : temp.length;
            let word = sentences[index + 1].split(/, |\. | /)[length - 1];
            answer = answer + word + ' ';
        })
        answer = answer.split('').slice(0, answer.length - 1);
        answer[0] = answer[0].toUpperCase();
        answer.push('\.');
        return answer.join('');
}

console.log(ticTacToe(example));
console.log(hiddenMessage(example2));