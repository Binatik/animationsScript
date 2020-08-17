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
    if (isCheckLength(allAnimations, 0)) allArr(allAnimations, 4);
    //Если длина массива отсутствует.
    else return
}

function allArr(NodeList, NodeListPart) {
    NodeList.forEach(element => { 
        const heightElement = element.offsetHeight;
        const animationsOffset = offset(element).topPage; 
        console.log(heightElement)

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
        leftPage: partPage + getScrollLeft(),
        topPage: partPage + getScrollTop(),
    }
} 

window.addEventListener('scroll', performAnimationWhenScrolling) 
performAnimationWhenScrolling(); 