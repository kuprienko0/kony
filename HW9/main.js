class Cookie{
    static get = (cname) =>{
        const name = `${cname}=`;
        const c = document.cookie
            .split(/\;\s?/)
            .find(el => el.startsWith(name));
        return c?.slice(name.length) || '';
    }
    static set = (cname, cvalue, exdays ) =>{
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }
};

// All sliders configuration
const slidersSettings = {
    arrow: {
        currentShowId: 0,
        loaderBase: ['⬆','↗','➡','↘','⬇','↙','⬅','↖'],
        loaderChar: null,
        loaderDirection: null,
    },
    bouncingBall: {
        currentShowId: 0,
        loaderBase: [' ',' ',' ',' ',' ', ' ', ' ', ' '],
        loaderChar: '⚫',
        loaderDirection: 'right',
    },
    simpleDots: {
        currentShowId: 0,
        loaderBase: ['.','. .','. . .'],
        loaderChar: null,
        loaderDirection: null,
    },
    toggle8: {
        currentShowId: 0,
        loaderBase: ['◎ ◎ ◎', '◉ ◎ ◎', '◎ ◉ ◎', '◎ ◎ ◉'],
        loaderChar: null,
        loaderDirection: null,
    },
    arrow3: {
        currentShowId: 0,
        loaderBase: ['▷', '▷', '▷', '▷', '▷', '▷', '▷'],
        loaderChar: '▶',
        loaderDirection: null,
    },
    spin3: {
        currentShowId: 0,
        loaderBase: ['◐','◓','◑','◒'],
        loaderChar: null,
        loaderDirection: null,
    },
    spin: {
        currentShowId: 0,
        loaderBase: ['◰','◳','◲','◱'],
        loaderChar: null,
        loaderDirection: null,
    },
    grow2: {
        currentShowId: 0,
        loaderBase: [' ', '▏','▎','▍','▌','▋', '▊', '▉'],
        loaderChar: null,
        loaderDirection: 'right',
    },
    star: {
        currentShowId: 0,
        loaderBase: ['✶', '✷', '✸', '✹', '✺'],
        loaderChar: null,
        loaderDirection: null,
    },
    grow1: {
        currentShowId: 0,
        loaderBase: ['▁','▂','▃','▄',' ▅', '▆', '▇', '█'],
        loaderChar: null,
        loaderDirection: 'right',
    }
}
let interval;

// Check Cookie to find loader
const loader = Cookie.get('loader');
if(loader !== '') handleShowLoader(loader);

// Create last visit message
const lastSeen = Cookie.get('last-seen');
lastSeenDiv.innerHTML = convertTime(lastSeen);
Cookie.set('last-seen', new Date(), 360);

// Last seen message creator
function convertTime(lastSeenTime) {
    if(lastSeenTime === '') return 'Never seen';
    const dateNow = new Date();
    const lastSeenDate = new Date(lastSeenTime);
    const years = dateNow.getFullYear() - lastSeenDate.getFullYear();
    const month = dateNow.getMonth() -lastSeenDate.getMonth();
    const days = dateNow.getDate() - lastSeenDate.getDate();
    const hours = dateNow.getHours() - lastSeenDate.getHours();
    const minutes = dateNow.getMinutes() - lastSeenDate.getMinutes();
    const seconds = dateNow.getSeconds() - lastSeenDate.getSeconds();
    if (seconds) rez = `${seconds} seconds`;
    if (minutes) rez = `${minutes} minutes`;
    if (hours) rez = `${hours} hours`;
    if (days) rez = `${days} days`;
    if (month) rez = `${month} month`;
    if (years) rez = `${years} year`;
    return `Last seen ${rez} ago.`;
}

// Slider creator (by configuration)
function creatLoader(setting){
    const { currentShowId, loaderBase, loaderChar, loaderDirection } = setting;
    const localBase = [...loaderBase];
    if (loaderDirection) {
        if (loaderDirection === 'right') {
            if (currentShowId + 1 === localBase.length) {
                setting.currentShowId = currentShowId - 1;
                setting.loaderDirection = 'left';
            } else {
                setting.currentShowId = currentShowId + 1;
            }
        } else {
            if(currentShowId - 1 === -1) {
                setting.currentShowId = currentShowId + 1;
                setting.loaderDirection = 'right';
            } else {
                setting.currentShowId = currentShowId - 1;
            }
        }
    } else {
        setting.currentShowId = currentShowId + 1 === localBase.length ? 0 : currentShowId + 1;
    }
    if (loaderChar) localBase[currentShowId] = loaderChar;
    return loaderChar ? localBase.join('') : localBase[currentShowId];
}

// Insert slider
function handleShowLoader(sliderType, isPreview){
    if (interval) clearInterval(interval);
    interval = setInterval((settings) => {
        const loaderToShow = creatLoader(settings)
        if(isPreview) {
            sliderPreview.innerHTML = loaderToShow;
        } else {
            Cookie.set('loader', sliderType, 360);
            sliderPreview.innerHTML = 'Not selected';
            selectDefaultOption.selected = true;
            document.title = loaderToShow;
        }
    }, 250, {...slidersSettings[sliderType], currentShowId: 0});
}

// On click handler
function handleAcceptSlider(event){
    event.preventDefault();
    if(Number(sliderSelect.value) === -1) return false;
    handleShowLoader(sliderSelect.value)
}

// On select handler
function handlePreviewSlider(event) {
    if(Number(event.target.value) === -1) return false;
    handleShowLoader(event.target.value, true);
}

// Add eventListeners
sliderSelect.addEventListener('change', handlePreviewSlider);
applySliderBtn.addEventListener('click', handleAcceptSlider);
