let checkbox = document.querySelector('#check')
let button = document.querySelector('#click')
let text = document.querySelector('#text')
let text2 = document.querySelector('#text2')

console.log(checkbox);
console.log(button);

checkbox.onchange = function () {
    console.log("change : ", checkbox.checked);
    if (checkbox.checked) {
        button.disabled = false
        button.style.background = 'rgb(54, 255, 54)'
        button.style.boxShadow = '0px 0px 30px 2px #29FF0F'
        if  (text2.style.display == 'none') {
            text2.style.display = 'block'
        } else if (text2.style.display == 'block') {
            text2.style.display = 'none     '
       
        }

    } else{
        button.disabled = true
        button.style.background = ' rgb(102, 102, 102)'
        button.style.boxShadow = 'none'
        text2.style.display ='none'
    }
}

button.onclick = function () {
    if (text.style.display == 'none') {
        text.style.display = 'block'
    } else if (text.style.display == 'block') {
        text.style.display = 'none'
    }
}
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const login = document.querySelector('#login')

login.onclick = function () {
    console.log(username.value);
    console.log(password.value);

    if (username.value == ' akmal' && password.value == 'mrortiqov') {
        alert('hush kelibsz')
    } else {
        alert(' errr')
    }
}