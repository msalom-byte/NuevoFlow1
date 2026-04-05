import { createNavbar, createContent } from './components.js';


function render(title, text) {
    const app = document.querySelector('#app');
    if (app) {
        // Combinamos los componentes generando el HTML completo de la vista
        const navbarHTML = createNavbar(title);
        const contentHTML = createContent(text);

        app.innerHTML = `${navbarHTML}${contentHTML}`;
    }
}


function main() {
    const title = 'NuevoFlow SPA';
    const description = 'Bienvenido a la aplicación minimalista generada siguiendo el patrón MVC y componentes funcionales puros. Esta estructura separa la lógica de los componentes de la orquestación de la vista.';

    // Ejecutamos el renderizado inicial
    render(title, description);
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);
