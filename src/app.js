let items = document.querySelectorAll('.item');
let controlLeft = document.querySelector('.control-left');
let controlRight = document.querySelector('.control-right');
let currentItem = 0;
let isEnabled = true; //flag for animation

function changeCurrentItem(n){
    currentItem = (n + items.length) % items.length; //прокрутка, возвращение к lenght[0]

}

function hideItem(direction){
    /*отключаю стрелку на время действия анимации*/
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('item-active', direction)
    })
}

function showItem(direction){
    items[currentItem].classList.add('item-next', direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('item-next', direction);
        this.classList.add('item-active');
        isEnabled = true;
    })
}

function previousItem(n){
    hideItem('to-right');            
    changeCurrentItem(n-1);
    showItem('from-left')
}

function nextItem(n){
    hideItem('to-left');           
    changeCurrentItem(n+1);
    showItem('from-right')
}

controlLeft.addEventListener('click', function(){
    console.log('hi');
    if (isEnabled){
        previousItem(currentItem)
    }
})

controlRight.addEventListener('click', function(){
    console.log('hi');
    if (isEnabled){
        nextItem(currentItem)
    }
})