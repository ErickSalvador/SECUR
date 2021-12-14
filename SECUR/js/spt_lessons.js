const reDir = () => {
    window.open('curso/err404.html');
}

const loadLsn = () => {
    var lsnBtn = document.querySelectorAll('.unt__btn');
    console.log(lsnBtn);

    lsnBtn.forEach((btn) => {
        btn.addEventListener('click', reDir);
    });
}