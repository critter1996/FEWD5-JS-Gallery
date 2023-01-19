// const search = new Filter('search', 'data-caption');


const search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let info = document.querySelectorAll('img.a.gallery');
    info.forEach(info => {
        if (info.textContent.toLowerCase().includes(currentValue)) {
            info.parentNode.parentNode.style.display = 'block';
        }else {
            info.parentNode.parentNode.style.display = 'none';
        }
    });
});