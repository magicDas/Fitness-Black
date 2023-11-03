document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuBtn = document.querySelector('.btn-mobile-menu');
    var sideNav = document.querySelector('.sidenav');
    var offCanvas = document.querySelector('.offcanvas');
    var btnPlay = document.querySelector('.btn-play');

    mobileMenuBtn.addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
    });

    document.querySelector('.close').addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
    });

    offCanvas.addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
    });

    btnPlay.addEventListener('click', function () {
        document.querySelector('.movie').classList.toggle('show');
        btnPlay.classList.toggle('hidden');
    });

});
