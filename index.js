// Mostrar/ocultar botón para volver arriba
window.addEventListener('scroll', function () {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTop.style.opacity = '1';
    } else {
        scrollTop.style.opacity = '0';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle active class on the header
            this.classList.toggle('active');

            // Toggle the content visibility
            const content = this.nextElementSibling;
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

// Botón Scroll to Top
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});