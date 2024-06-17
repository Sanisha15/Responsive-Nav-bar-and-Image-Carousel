const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const header = document.querySelector('.header');
const signInBtn = document.querySelector('.sign-in-btn');
const signInDialog = document.getElementById('signin-dialog');
const closeBtn = document.querySelector('.close-btn');


mobileNavBtn.addEventListener('click', function() {
    header.classList.toggle('active');
});
signInBtn.addEventListener('click', function () {
    signInDialog.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    signInDialog.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === signInDialog) {
        signInDialog.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const carouselItems = document.querySelectorAll('.carousel-image');
    let index = 0;

    function slide() {
        carouselItems[index].classList.remove('image_active');
        index = (index + 1) % carouselItems.length;
        carouselItems[index].classList.add('image_active');
    }

    setInterval(slide, 2000);
});