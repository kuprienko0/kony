export default class ViewPagination{
    paginationBlock = document.querySelector('.paginationBlock');

    constructor(onChangePage) {
        this.onChangePage = onChangePage;
    }

    render = (numberOfPage, activePageNumber) =>{
        this.paginationBlock.innerHTML = `
        <nav aria-label="...">
              <ul class="pagination"></ul>
        </nav>`;
        const paginationList = this.paginationBlock.querySelector('.pagination');
        for (let i = 1; i <= numberOfPage; i++) {
            const pageItem = document.createElement('li');
            pageItem.classList.add('page-item');
            const link = document.createElement('a');
            link.classList.add('page-link');
            if (i=== activePageNumber) pageItem.classList.add('active');
            link.setAttribute('href', '#');
            link.innerText = i;
            link.addEventListener('click', (e) => {
                this.onChangePage(i);
            });
            pageItem.appendChild(link);
            paginationList.appendChild(pageItem);
        }
    }
}