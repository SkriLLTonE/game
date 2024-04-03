class Hover {
    constructor(option) {
        if (typeof option.el == 'string') {
            this.el = document.querySelector(option.el)
        } else if (option.el instanceof HTMLElement) {
            this.el = option.el
        }
        // this.el.style.transition = '0.3s'
        this.el.addEventListener('mouseenter', () => this.move())
    }
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) - min)
    }

    move() {
        this.el.style.position = 'fixed'
        this.el.style.left = this.random(0, innerWidth - this.el.clientWidth) + 'px'
        this.el.style.top = this.random(0, innerHeight - this.el.clientHeight) + 'px'
    }
}
document.addEventListener('load', () => openFullscreen())
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    document.getElementById("body").style.display = "block";
}
const btn = new Hover({
    el: '.content__move'
})
const btn2 = new Hover({
    el: '.content__stay'
})
const btn3 = new Hover({
    el: '.header__title'
})
console.log(btn);