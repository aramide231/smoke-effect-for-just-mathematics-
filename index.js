let body = document.querySelector('body');

body.addEventListener('animationend', () => {
    setTimeout(() => {
        window.location.href = 'page.html';
    }, 2300); 
});
