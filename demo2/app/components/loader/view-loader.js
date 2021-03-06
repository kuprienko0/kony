export default class ViewLoader {
    htmlLoader = document.querySelector('.loader-container');

    render = () => {
        this.htmlLoader.innerHTML = `
            <div class="loader">
                <div class="loadingio-spinner-bean-eater-524qm27s3ui"><div class="ldio-mpmlii7pnd">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div></div></div>
                    <style type="text/css">
                        @keyframes ldio-mpmlii7pnd-1 {
                            0% { transform: rotate(0deg) }
                           50% { transform: rotate(-45deg) }
                          100% { transform: rotate(0deg) }
                        }
                        @keyframes ldio-mpmlii7pnd-2 {
                            0% { transform: rotate(180deg) }
                           50% { transform: rotate(225deg) }
                          100% { transform: rotate(180deg) }
                        }
                        .ldio-mpmlii7pnd > div:nth-child(2) {
                          transform: translate(-15px,0);
                        }
                        .ldio-mpmlii7pnd > div:nth-child(2) div {
                          position: absolute;
                          top: 40px;
                          left: 40px;
                          width: 120px;
                          height: 60px;
                          border-radius: 120px 120px 0 0;
                          background: #f5cb22;
                          animation: ldio-mpmlii7pnd-1 1s linear infinite;
                          transform-origin: 60px 60px
                        }
                        .ldio-mpmlii7pnd > div:nth-child(2) div:nth-child(2) {
                          animation: ldio-mpmlii7pnd-2 1s linear infinite
                        }
                        .ldio-mpmlii7pnd > div:nth-child(2) div:nth-child(3) {
                          transform: rotate(-90deg);
                          animation: none;
                        }@keyframes ldio-mpmlii7pnd-3 {
                            0% { transform: translate(190px,0); opacity: 0 }
                           20% { opacity: 1 }
                          100% { transform: translate(70px,0); opacity: 1 }
                        }
                        .ldio-mpmlii7pnd > div:nth-child(1) {
                          display: block;
                        }
                        .ldio-mpmlii7pnd > div:nth-child(1) div {
                          position: absolute;
                          top: 92px;
                          left: -8px;
                          width: 16px;
                          height: 16px;
                          border-radius: 50%;
                          background: #ff6e64;
                          animation: ldio-mpmlii7pnd-3 1s linear infinite
                        }
                        .ldio-mpmlii7pnd > div:nth-child(1) div:nth-child(1) { animation-delay: -0.67s }
                        .ldio-mpmlii7pnd > div:nth-child(1) div:nth-child(2) { animation-delay: -0.33s }
                        .ldio-mpmlii7pnd > div:nth-child(1) div:nth-child(3) { animation-delay: 0s }
                        .loadingio-spinner-bean-eater-524qm27s3ui {
                          width: 200px;
                          height: 200px;
                          display: inline-block;
                          overflow: hidden;
                          
                        }
                        .ldio-mpmlii7pnd {
                          width: 100%;
                          height: 100%;
                          position: relative;
                          transform: translateZ(0) scale(1);
                          backface-visibility: hidden;
                          transform-origin: 0 0; /* see note above */
                        }
                        .ldio-mpmlii7pnd div { box-sizing: content-box; }
                        /* generated by https://loading.io/ */
                    </style>        
          </div>
        `;
    }

    hideLoader = () => {
        this.htmlLoader.innerHTML = '';
        this.htmlLoader.classList.remove('loader-container');
    }
}