var indexValue = 1;
setInterval(() => {

    const ph = document.querySelectorAll('img');

    for (let i = 0; i < ph.length; i++) {
        ph[i].style.display = "none"
    }
    indexValue++;

    if (indexValue > ph.length) {
        indexValue = 1;
    }

    ph[indexValue - 1].style.display = "block";
}, 2500);


