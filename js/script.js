// Controle do Modal (Mantido)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// NOVO: Scroll Reveal Animation (Animação ao rolar)
const observerOptions = {
    threshold: 0.1 // Ativa quando 10% do elemento aparece
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, observerOptions);

// Seleciona todos os elementos com a classe hidden-element
document.querySelectorAll('.hidden-element').forEach((el) => {
    observer.observe(el);

});

// --- Lógica do Menu Mobile ---
const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

// Abrir/Fechar ao clicar no ícone
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Faz o menu deslizar
    hamburger.classList.toggle('active'); // Transforma os riscos em X
});

// Fechar menu ao clicar em um link (para a navegação fluir)
function closeMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
}
