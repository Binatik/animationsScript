//Получаем коллекцию узлов для нашей анимации. 
const allAnimations = document.querySelectorAll('.animations');

function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft;
}

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

function isCheckLength(arr, num) {
    return arr.length > num ? true : false;
} 

console.log(allAnimations )
console.log(allAnimations.length)


function performAnimationWhenScrolling() {
    //Если длина массива существует.
    if (isCheckLength(allAnimations, 0)) allArr(allAnimations, 9);
    //Если длина массива отсутствует.
    else return
}

function allArr(NodeList, NodeListPart) {
    NodeList.forEach(element => { 
        const heightElement = element.offsetHeight;
        const animationsOffset = offset(element).top; 
        console.log(heightElement)   
        console.log(animationsOffset);

        //Часть страницы, показанная на экране, и которую мы видим, указываем числом, допустим 3
        const part = NodeListPart;

        const point = window.innerHeight - heightElement / part;

        if ((pageYOffset > animationsOffset - point) && (pageYOffset < animationsOffset + heightElement)) element.classList.add('anim');
        else return;
    });
}

function offset(element) {
    //Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport.
    const partPage = element.getBoundingClientRect();
    return {
        left: partPage['left'] + getScrollLeft(),
        top: partPage['top'] + getScrollTop(),
    }
} 

window.addEventListener('scroll', performAnimationWhenScrolling) 
performAnimationWhenScrolling();   

console.log(`Генерация:  ${random(1, 100)}`);

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


