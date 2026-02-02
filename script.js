
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', () => {
        // Alterna la clase 'hidden' para mostrar/ocultar el menú
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        
        // Cambia el icono de hamburguesa a una 'X' al abrir
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace (para móvil)
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.querySelector('i').classList.add('fa-bars');
                btn.querySelector('i').classList.remove('fa-xmark');
            }
        });
    });
