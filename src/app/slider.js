import './../main.css'

let items = document.querySelectorAll('.item');
let controlLeft = document.querySelector('.control-left');
let controlRight = document.querySelector('.control-right');
let currentItem = 0;
let isEnabled = true; //flag for animation

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length; //прокрутка, возвращение к lenght[0]

}

/*
                SLIDER
*/

function hideItem(direction) {
    /*отключаю стрелку на время действия анимации*/
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('item-active', direction)
    })
}

function showItem(direction) {
    items[currentItem].classList.add('item-next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('item-next', direction);
        this.classList.add('item-active');
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left')
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right')
}

controlLeft.addEventListener('click', function () {
    //console.log('hi');
    if (isEnabled) {
        previousItem(currentItem)
    }
})

controlRight.addEventListener('click', function () {
    //console.log('hi');
    if (isEnabled) {
        nextItem(currentItem)
    }
})

/*

                SWIPER

*/
let el = document.querySelector('.carousel')


const swipeDetect = (el) => {

    let surface = el;
    let startX = 0; // Х
    let startY = 0; // Y
    let distX = 0; // distance X
    let distY = 0; // distance Y, block

    let startTime = 0; // start time to swipe
    let elapsedTime = 0; // finish time to swipe

    let threshold = 150; //minimal distance swiper
    let restraint = 120; // угол for swipe
    let allowedTime = 400; // time swipe

    /*
            mouse events
    */


    surface.addEventListener('mousedown', function (e) {
        startX = e.pageX;
        startY = e.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    })

    surface.addEventListener('mouseup', function (e) {
        distX = e.pageX - startX;
        distY = e.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) { //проверка на анимацию
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        e.preventDefault();
    })


    /*
            touch events
    */

    surface.addEventListener('touchstart', function (e) {
        if(e.target.classList.contains('control-arrow') || e.target.classList.contains('control')){
            if(e.target.classList.contains('control-arrow__left')){
                if (isEnabled) {
                    previousItem(currentItem);
                }
            } else if(e.target.classList.contains('control-arrow__right')){
                if (isEnabled) {
                    nextItem(currentItem);
                }
            }
        }
    

        let touchObj = e.changedTouches[0];
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    })

    //position page static
    surface.addEventListener('touchmove', function (e) {
        e.preventDefault();
    })

    surface.addEventListener('touchend', function (e) {
        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;

        if (elapsedTime <= allowedTime) {
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                if ((distX > 0)) { //проверка на анимацию
                    if (isEnabled) {
                        previousItem(currentItem);
                    }
                } else {
                    if (isEnabled) {
                        nextItem(currentItem);
                    }
                }
            }
        }
        e.preventDefault();
    })

}




swipeDetect(el)