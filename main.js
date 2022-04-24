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
