// For Password View Icon 

const viewIcon = document.querySelector('#view');
const password = document.querySelector('#password');

viewIcon.addEventListener('click', () => {
    if (password.getAttribute('type') !== 'text') {
        password.setAttribute('type', 'text');
    }
    else {
        password.setAttribute('type', 'password');
    }
    if (viewIcon.getAttribute('src') == 'Assets/Icons/view.png') {
        viewIcon.setAttribute('src', 'Assets/Icons/hide.png')
    }
    else {
        viewIcon.setAttribute('src', 'Assets/Icons/view.png')
    }
})