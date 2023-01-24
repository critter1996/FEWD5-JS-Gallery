const search = document.getElementById('search');
search.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let info = document.querySelectorAll('[data-caption]');

    info.forEach(card => {
        let text = card.getAttribute('data-caption');
        if (text.toLowerCase().includes(currentValue)) {
            card.parentNode.style.display = 'block';
            console.log(currentValue);
        } else {
            card.parentNode.style.display = 'none';
        }
    });
});
