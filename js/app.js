// const search = new Filter('search', 'data-caption');


const search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowercase();
    console.log(currentValue);
});