const changeBlock = function (type) {
    if (type === 1) {
        document.getElementById('first').classList.remove('displayNone');
        document.getElementById('second').classList.add('displayNone');
    }
    else {
        document.getElementById('first').classList.add('displayNone');
        document.getElementById('second').classList.remove('displayNone');
    }
}

let section = 0;

const blockedKeys = {37: 1, 38: 1, 39: 1, 40: 1}

const scroll = () => {
    window.scrollTo({
        left: 0,
        top: window.innerHeight * section,
        behavior: 'smooth'
    })
}

const preventDefault = e => {
    e.preventDefault()
    if (e.deltaY > 0 && section < 3)
        section++;
    else if (e.deltaY < 0 && section > 0)
        section--;
    scroll();
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch(e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
}
