function toggleSubmenu(event) {
    event.preventDefault();
    const parent = event.target.closest('.menu-item');
    parent.classList.toggle('active');

    // Cerrar otros submenús
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item !== parent) item.classList.remove('active');
    });
}

// Cerrar menús al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-alterna')) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});