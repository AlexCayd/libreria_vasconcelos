// Variables
const genero = document.querySelector('#genero');
const editorial = document.querySelector('#editorial');
const yearmin = document.querySelector('#yearmin');
const yearmax = document.querySelector('#yearmax');
const preciomin = document.querySelector('#preciominimo');
const preciomax = document.querySelector('#preciomaximo');
const sucursal = document.querySelector('#sucursal');
const formato = document.querySelector('#formato');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const yearactual = new Date().getFullYear();
const year2020 = yearactual - 1;
const min = year2020 - 100;
const incremento = 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    genero: '',
    yearmin: '',
    yearmax: '',
    preciomin: '',
    preciomax: '',
    editorial: '',
    sucursal: '',
    formato: '',
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarLibros(libros); // muestra los libros al cargar
    llenarSelectYearMin(); // llena las opciones de años
    llenarSelectYearMax();
})

// EventListeners para los select de búsqueda
genero.addEventListener('change', e => {
    datosBusqueda.genero = e.target.value;
    filtrarLibro();
});

editorial.addEventListener('change', e => {
    datosBusqueda.editorial = e.target.value;
    filtrarLibro();
});

yearmin.addEventListener('change', e => {
    datosBusqueda.yearmin = parseInt(e.target.value);
    filtrarLibro();
});

yearmax.addEventListener('change', e => {
    datosBusqueda.yearmax = parseInt(e.target.value);
    filtrarLibro();
});

preciomin.addEventListener('change', e => {
    datosBusqueda.preciomin = parseInt(e.target.value);
    filtrarLibro();
});

preciomax.addEventListener('change', e => {
    datosBusqueda.preciomax = parseInt(e.target.value);
    filtrarLibro();
});

sucursal.addEventListener('change', e => {
    datosBusqueda.sucursal = e.target.value;
    filtrarLibro();
});

sucursal.addEventListener('change', e => {
    datosBusqueda.sucursal = e.target.value;
    filtrarLibro();
});

formato.addEventListener('change', e => {
    datosBusqueda.formato = e.target.value;
    filtrarLibro();
});

// Funciones 
function mostrarLibros (libros) {
    limpiarHTML();
    libros.forEach(libro => {
        const { nombre, genero, year, precio, editorial, sucursal, formato, paginas } = libro;
        const libroHTML = document.createElement('P');
        libroHTML.classList.add('resultados');
        libroHTML.textContent = `
        ${nombre} - ${genero} - ${year} - Precio: ${precio} - Editorial: ${editorial} - Sucursal: ${sucursal} - Formato: ${formato} - ${paginas} Páginas
        `;

        // Insertar en el html
        resultado.appendChild(libroHTML);
    })
}

// Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los años del select 
function llenarSelectYearMin() {
    for ( let i = year2020; i >= min; i-=incremento) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        yearmin.appendChild(opcion);
    }
}

function llenarSelectYearMax() {
    for ( let i = year2020; i >= min; i-=incremento) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        yearmax.appendChild(opcion);
    }
}

// Función que filtra en base a la búsqueda
function filtrarLibro() {
    const resultado = libros.filter(filtrarGenero).filter(filtrarEditorial).filter(filtrarYearMin).filter(filtrarYearMax).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarSucursal).filter(filtrarFormato);
    if (resultado.length) {
        mostrarLibros(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('error');
    noResultado.textContent = 'No encontramos coincidencias :(';
    resultado.appendChild(noResultado);
}

function filtrarGenero(libro) {
    const { genero } = datosBusqueda;
    if (genero) {
        return libro.genero === genero;
    }
    return libro;
}

function filtrarEditorial(libro) {
    const { editorial } = datosBusqueda;
    if (editorial) {
        return libro.editorial === editorial;
    }
    return libro;
}

function filtrarYearMin(libro) {
    const { yearmin } = datosBusqueda;
    if (yearmin) {
        return libro.year >= yearmin;
    }
    return libro;
}

function filtrarYearMax(libro) {
    const { yearmax } = datosBusqueda;
    if (yearmax) {
        return libro.year <= yearmax;
    }
    return libro;
}

function filtrarPrecioMin(libro) {
    const { preciomin } = datosBusqueda;
    if (preciomin) {
        return libro.precio >= preciomin;
    }
    return libro;
}

function filtrarPrecioMax(libro) {
    const { preciomax } = datosBusqueda;
    if (preciomax) {
        return libro.precio <= preciomax;
    }
    return libro;
}

function filtrarSucursal(libro) {
    const { sucursal } = datosBusqueda;
    if (sucursal) {
        return libro.sucursal === sucursal;
    }
    return libro;
}

function filtrarFormato(libro) {
    const { formato } = datosBusqueda;
    if (formato) {
        return libro.formato === formato;
    }
    return libro;
}