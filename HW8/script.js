let example2 = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. ' +
    'The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. ' +
    'Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'

function hiddenMessage (text){
    if(!text) return '';
    console.log(text);
    let sentences = text.split(/\. |! |\? /);
    let firstSentence = sentences[0].split(/, |\. | /);
    let answer = '';
    firstSentence.forEach((item,index)=>{
        let temp = item.split('');
        let length = temp.includes('\'') ? temp.length-1 : temp.length;
        let word = sentences[index + 1].split(/, |\. | /)[length - 1];
        answer += `${word} `;
    });
    answer = answer.split('');
    answer[answer.length-1] === ' ' ? answer.pop() : answer;
    answer[0] = answer[0].toUpperCase();
    answer.push('\.');
    answer = answer.join('');
    if (firstSentence.length+1 < sentences.length){
        answer += ` ${hiddenMessage(sentences.slice(firstSentence.length+1).join('. '))}`;
    };
    return answer;
};


let seaBoard = [
    [0,0,0,2,2,0],
    [0,3,0,0,0,0],
    [0,3,0,1,0,0],
    [0,3,0,1,0,0]
];
let seaAttacks = [[2, 1], [1, 3], [4, 2], [4, 4], [5, 4]];
function seaBattle(board, attacks){
    let playBoard = board.reduce((acc,curr)=>[...acc,...curr],[]);
    let shipsOnStart ={
        1: 0,
        2: 0,
        3: 0
    };
    let shipsOnEnd = Object.assign({}, shipsOnStart);
    playBoard.forEach((item)=> item !== 0 && shipsOnStart[item]++);
    if (Object.values(shipsOnStart).filter((ship) => ship > 4).length) return new Error('Invalid ships');
    attacks.forEach((attack)=> {
        switch (board[board.length-attack[1]][attack[0]-1]){
            case 1 : {
               shipsOnEnd["1"]++;
               break
            }
            case 2 : {
                shipsOnEnd["2"]++;
                break
            }
            case 3 : {
                shipsOnEnd["3"]++;
                break
            }
        };
    });
    console.log(shipsOnEnd);
    let rez = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    };
    Object.keys(shipsOnEnd).forEach((key)=>{
        if (shipsOnStart[key] === shipsOnEnd[key]) {
            rez.sunk++;
            rez.points++;
        }else {
            if (shipsOnEnd[key] === 0) {
                rez.notTouched++;
                rez.points--;
            } else {
                rez.points += shipsOnEnd[key] * 0.5 ;
                rez.damaged++;
            };
        };

    });
    return rez;
};


console.log(seaBattle(seaBoard,seaAttacks))
console.log(hiddenMessage(example2));