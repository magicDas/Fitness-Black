document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuBtn = document.querySelector('.btn-mobile-menu');
    var sideNav = document.querySelector('.sidenav');
    var offCanvas = document.querySelector('.offcanvas');
    var btnPlay = document.querySelector('.btn-play');
    var sideNavLink = document.querySelector('.sidenav-link');

    mobileMenuBtn.addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
        document.body.style.overflow = 'hidden';
    });

    document.querySelector('.close').addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
        document.body.style.overflow = 'auto';
    });

    offCanvas.addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
        document.body.style.overflow = 'auto';
    });

    sideNavLink.addEventListener('click', function () {
        sideNav.classList.toggle('open');
        offCanvas.classList.toggle('open');
        document.body.style.overflow = 'auto';
    });

    btnPlay.addEventListener('click', function () {
        document.querySelector('.movie').classList.toggle('show');
        btnPlay.classList.toggle('hidden');
    });

});
