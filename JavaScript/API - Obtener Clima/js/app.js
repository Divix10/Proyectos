const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formumalario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formumalario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
    e.preventDefault();
    
    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if( ciudad === '' || pais === '') {
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // Consultar API
    
}

function mostrarError(mensaje) {
    const alertaElement = document.querySelector('.bg-red-100');

    if(!alertaElement) {
        // Crear alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `

        container.appendChild(alerta);

        // Eliminar alerta después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}