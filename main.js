const writer = function (i = 0, text = "", element) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(() => {
            writer(i, text, element)
        }, 75)
    }
}

const deleter = async function (element) {
    if (element.innerText != "") {
        element.innerText = element.innerText.substr(0, element.innerText.length - 1);
        await deleter(element)
    }
}

const changeBlock = function (type) {
    if (type === 1) {
        const el = document.getElementById('retype');
        deleter(el).then(() => {
            writer(0, "Monetization", el);
        })
        document.getElementById('block2Content_').style.opacity = '0'
        setTimeout(() => {
            document.getElementById('block2Content').style.opacity = '1'
        }, 300)
    }
    else {
        const el = document.getElementById('retype');
        deleter(el).then(() => {
            writer(0, "Acquisition", el);
        })
        document.getElementById('block2Content').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('block2Content_').style.opacity = '1'
        }, 300)
    }
}

const animate = function (scrollPos) {
    console.log()
    if (scrollPos >= document.getElementById('block2Content_').offsetTop - window.innerHeight) {
        document.getElementById('block2Content').style.left = "250px";
        document.getElementById('block2Content_').style.left = "-180px";
    }
    else if (scrollPos < document.getElementById('block2Content').offsetTop - window.innerHeight) {
        document.getElementById('block2Content').style.left = "-1000px";
        document.getElementById('block2Content_').style.left = "-1000px";
    }
    if (scrollPos >= document.getElementById('block3Content').offsetTop - window.innerHeight) {
        document.getElementById('block3Content').style.left = "0px";
    }
    else {
        document.getElementById('block3Content').style.left = "-1000px";
    }
    if (scrollPos >= document.getElementById('block4Content').offsetTop - window.innerHeight) {
        document.getElementById('block4Content').style.left = "0px";
    }
    else {
        document.getElementById('block4Content').style.left = "-1000px";
    }
}

window.addEventListener('scroll', function(e) {
    console.log(e)
    console.log(window.scrollY)
    animate(window.scrollY)
});
