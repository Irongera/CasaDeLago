// Toggle Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, 
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

// Cerrar popup del curso
function cerrarPopup() {
    document.getElementById("cursoPopup").style.display = "none";
}

// =========================================
// CARRUSEL DE GALERÍA
// =========================================

const galeriaTrack = document.getElementById('galeriaTrack');
const galeriaAnterior = document.getElementById('galeriaAnterior');
const galeriaSiguiente = document.getElementById('galeriaSiguiente');

let paginaGaleria = 0;

function actualizarGaleria() {

    const paginas = document.querySelectorAll('.galeria-pagina');

    if (!galeriaTrack || paginas.length === 0) {
        return;
    }

    galeriaTrack.style.transform =
        `translateX(-${paginaGaleria * 100}%)`;

    // Desactivar flecha izquierda si estamos al inicio
    galeriaAnterior.disabled = paginaGaleria === 0;

    // Desactivar flecha derecha si estamos en la última página
    galeriaSiguiente.disabled =
        paginaGaleria === paginas.length - 1;
}


// Flecha derecha
galeriaSiguiente.addEventListener('click', function() {

    const paginas = document.querySelectorAll('.galeria-pagina');

    if (paginaGaleria < paginas.length - 1) {
        paginaGaleria++;
        actualizarGaleria();
    }

});


// Flecha izquierda
galeriaAnterior.addEventListener('click', function() {

    if (paginaGaleria > 0) {
        paginaGaleria--;
        actualizarGaleria();
    }

});


// Iniciar galería
actualizarGaleria();