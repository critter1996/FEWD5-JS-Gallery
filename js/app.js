// const search = new Filter('search', 'data-caption');


const search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let info = document.querySelectorAll('img.pic');
    info.forEach(card => {
        if (card.textContent.toLowerCase().includes(currentValue)) {
            card.parentNode.parentNode.style.display = 'block';
        }else {
            card.parentNode.parentNode.style.display = 'none';
        }
    });
});