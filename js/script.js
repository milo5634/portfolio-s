/********* PRELOAD *********/
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});


/******** ANIMATION CURSOR ********/

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add('expand');

    setTimeout(() => { /* enléve l'animation à partir d'un certain temps, ici 500 milliseconde */
        cursor.classList.remove("expand");

    }, 500);
})