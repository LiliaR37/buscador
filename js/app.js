
//Variables 
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const tipo = document.querySelector('#tipo');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const habitaciones = document.querySelector('#habitaciones');
const pileta = document.querySelector('#pileta');
const vendedor = document.querySelector('#vendedor');


const max = new Date().getFullYear();
const min = max - 10;



//objeto para llenar el selector


const datosResultado = {
    tipo: '',
    year: '',
    minimo: '',
    maximo: '',
    habitaciones: '',
    pileta: '',
    vendedor: '',
}





//EventListener
document.addEventListener('DOMContentLoaded', () => {

    mostrarResultados(inmuebles);

    selectYear();
});

tipo.addEventListener('change', (e) => {

    datosResultado.tipo = e.target.value;

    filtrarInmuebles();


})

year.addEventListener('change', (e) => {
    datosResultado.year = parseInt(e.target.value);
    filtrarInmuebles();
})


minimo.addEventListener('change', (e) => {
    datosResultado.minimo = e.target.value;
    filtrarInmuebles();
})

maximo.addEventListener('change', (e) => {
    datosResultado.maximo = e.target.value;
    filtrarInmuebles();
})

habitaciones.addEventListener('change', (e) => {
    datosResultado.habitaciones = parseInt(e.target.value);
    filtrarInmuebles();
})

pileta.addEventListener('change', (e) => {
    datosResultado.pileta = e.target.value;
    filtrarInmuebles();
})

vendedor.addEventListener('change', (e) => {
    datosResultado.vendedor = e.target.value;
    filtrarInmuebles();
})



//Function

function mostrarResultados(inmuebles) {
    limpiarHTML();
    inmuebles.forEach(inmueble => {

        const { tipo, year, precio, habitaciones, pileta, vendedor } = inmueble;

        const resultadosHTML = document.createElement('p');

        resultadosHTML.textContent = `

        ${tipo} - ${year} - Precio: ${precio} - Habitaciones: ${habitaciones} - Pileta: ${pileta} - Vendedor: ${vendedor}
    
    `;
        resultado.appendChild(resultadosHTML);





    });
}
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}

function selectYear() {

    for (i = min; i <= max; i++) {

        const option = document.createElement('option');

        option.value = i;
        option.textContent = i;

        year.appendChild(option);
    }

}

function filtrarInmuebles() {


    const resultado = inmuebles.filter(filtrarTipo).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarHabitaciones).filter(filtrarPileta).filter(filtrarVendedor);
    if (resultado.length) {
        mostrarResultados(resultado)
    } else {
        noResultado();
    }

}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados disponibles. Intenta con otros términos de búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarTipo(inmueble) {

    const { tipo } = datosResultado;

    if (tipo) {
        return inmueble.tipo === tipo
    }
    return inmueble;

}

function filtrarYear(inmueble) {

    const { year } = datosResultado;

    if (year) {
        return inmueble.year === year
    }
    return inmueble;
}

function filtrarMinimo(inmueble) {

    const { minimo } = datosResultado;

    if (minimo) {
        return inmueble.precio >= minimo
    }
    return inmueble;
}

function filtrarMaximo(inmueble) {

    const { maximo } = datosResultado;

    if (maximo) {
        return inmueble.precio <= maximo
    }
    return inmueble;
}



function filtrarHabitaciones(inmueble) {

    const { habitaciones } = datosResultado;

    if (habitaciones) {
        return inmueble.habitaciones === habitaciones
    }
    return inmueble;
}


function filtrarPileta(inmueble) {

    const { pileta } = datosResultado;

    if (pileta) {
        return inmueble.pileta === pileta
    }
    return inmueble;
}

function filtrarVendedor(inmueble) {

    const { vendedor } = datosResultado;

    if (vendedor) {
        return inmueble.vendedor === vendedor
    }
    return inmueble;
}