export default class ViewLoader{
    htmlLoader = document.querySelector('.loader-container');

    render = _ => {
        this.htmlLoader.innerHTML = `
            <div class="loader">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
             </div>
        `;
    }

    hideLoader = _ => {
        this.htmlLoader.innerHTML = '';
        this.htmlLoader.classList.remove('loader-container');
    }
}