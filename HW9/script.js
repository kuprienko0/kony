function getCookie(cname) {
    const name = `${cname}=`;
    const c = document.cookie
        .split(/\;\s?/)
        .find(el => el.startsWith(name));
    return c?.slice(name.length) || '';
};
function setCookie(cname, cvalue, exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
const cookie = getCookie('loader');
showLoaderPreview(cookie, false, false);
let rez = '';
function time(){
    const lastVisit = getCookie('lastVisit');
    const timeNow = new Date();
    const years = timeNow.getFullYear() - new Date(lastVisit).getFullYear();
    const month = timeNow.getMonth() - new Date(lastVisit).getMonth();
    const days = timeNow.getDate() - new Date(lastVisit).getDate();
    const hours = timeNow.getHours() - new Date(lastVisit).getHours();
    const minutes = timeNow.getMinutes() - new Date(lastVisit).getMinutes();
    const seconds = timeNow.getSeconds() -  new Date(lastVisit).getSeconds();
    if (years) rez += `${years} year`;
    if (month) rez += `${month} month`;
    if (days) rez += `${days} days`;
    if (hours) rez += `${hours} hours`;
    if (minutes) rez += `${minutes} minutes`;
    if (seconds) rez += `${seconds} seconds`;
    return rez;
}

lastVisitDiv.innerHTML = `Your last visit was  ${time()} ago`;
setCookie('lastVisit', new Date(), 360);


function arrow(obj) {
   const symbols = ['⬆','↗','➡','↘','⬇','↙','⬅','↖'];
        if (obj.count === 8) obj.count = 0;
        obj.count++;
        return symbols[obj.count-1];
};
function bouncingBall(obj) {
    ["(", " ", " ", " "," " ," " , ")"]
    let str = `(                     )`;
    if(obj.count === str.length) obj.moveTo = 'left';
    if(obj.count === 0) obj.moveTo = 'right';

    str = str.split('');
    str[1+obj.count] = '⚫';
    str = str.join('');
    obj.moveTo === "right" ? obj.count++ : obj.count--;
    return str;
};
function simpleDots(obj) {
    if(obj.count >= 4) obj.count = 0;
    let str = ''
    for(let i = 0; i <= obj.count; i++){
        str+='. ';
    }
    obj.count++;
    return str;
};
function toggle8(obj) {
    const symbols = ['◎ ◎ ◎', '◉ ◎ ◎', '◎ ◉ ◎', '◎ ◎ ◉'];
    if (obj.count === 4) obj.count = 0
    obj.count++;
    return  symbols[obj.count-1];
};
function arrow3(obj) {
    let str = '▷ ▷ ▷ ▷ ▷ ▷ ';
    if(obj.count >= str.length-1) obj.count = 0;
    str = str.split(' ');
    str[obj.count-1] = '▶';
    str = str.join('');
    obj.count++
    return str;
};
function spin3(obj) {
    const symbols = ['◐','◓','◑','◒'];
    if(obj.count >= symbols.length) obj.count = -1;
    obj.count++;
    return symbols[obj.count-1];
};
function spin(obj) {
    const symbols = ['◰','◳','◲','◱'];
    if(obj.count >= symbols.length) obj.count = -1;
    obj.count++;
    return symbols[obj.count-1];
};
function grow2(obj) {
    const symbols = [' ', '▏','▎','▍','▌','▋', '▊', '▉', '▉▎'];
    if(obj.count === symbols.length) obj.moveTo = 'left';
    if(obj.count === 0) obj.moveTo = 'right';
    obj.moveTo === "right" ? obj.count++ : obj.count--;
    return  symbols[obj.count-1];
};
function star(obj) {
    const symbols = ['✶', '✷', '✸', '✹', '✺'];
    if(obj.count >= symbols.length) obj.count = -1;
    obj.count++;
    return  symbols[obj.count-1];
};
function grow1(obj) {
    const symbols = [ '▁','▂','▃','▄',' ▅', '▆', '▇', '█'];
    if(obj.count === symbols.length-1) obj.moveTo = 'left';
    if(obj.count ===1) obj.moveTo = 'right';
    obj.moveTo === "right" ? obj.count++ : obj.count--;
    return symbols[obj.count-1];
};
const showLoaderPreview = (loader) => {
    switch (loader){
        case 'arrow' : return arrow;
        case 'bouncingBall' : return bouncingBall;
        case 'simpleDots' : return simpleDots;
        case 'toggle8' : return toggle8;
        case 'arrow3' : return arrow3;
        case 'spin3' : return spin3;
        case 'spin' : return spin;
        case 'grow2' : return grow2;
        case 'star' : return star;
        case 'grow1' : return grow1;
    };
};
let loadInterval;
select.addEventListener('change',(event)=>{
    showLoader(event.target.value, false, false)
});
 showLoader = (loaderType, shouldClearPreview, shouldSave)=>{
    if (shouldClearPreview) animation.innerHTML = '';
    if (loadInterval) clearInterval(loadInterval);
    const loader = showLoaderPreview(loaderType);
    loadInterval = setInterval((obj)=>{
        document.title = loader(obj);
    }, 250, {count: 0, moveTo: 'right'});
    if (shouldSave) setCookie('loader', loaderType, 100 )
};
apply.addEventListener('click',()=>{
    showLoader(select.value, true,true )
});

// setInterval(arrow,500, {count: 0});
// setInterval(bouncingBall,50, {count: 0, moveTo: 'right'});
// setInterval(simpleDots,250, {count: 0})
// setInterval(toggle8,500, {count: 0});
// setInterval(arrow3,500, {count: 0});
// setInterval(loader6,500, {count: 0});
// setInterval(spin,500, {count: 0});
// setInterval(star,200, {count: 0});
// setInterval(loader9,200, {count: 0});
// setInterval(grow1,200, {count: 0});