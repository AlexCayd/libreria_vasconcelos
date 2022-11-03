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
const libros = [
    {
        nombre: 'Dune',
		genero: 'Ciencia Ficción',
		year: 1965,
		precio: 163,
		editorial: 'Nova',
        sucursal: 'Roma',
		formato: 'Pasta Blanda',
        paginas: 628
    },
    {
        nombre: 'El Señor de los Anillos',
		genero: 'Fantasía',
		year: 1954,
		precio: 300,
		editorial: 'Nova',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 500
    },
    {
        nombre: 'Cien años de Soledad',
		genero: 'Literatura',
		year: 1967,
		precio: 250,
		editorial: 'Debolsillo',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 151
    },
    {
        nombre: 'Libro de Poemas',
		genero: 'Poesía',
		year: 1921,
		precio: 80,
		editorial: 'Minotauro',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 151
    },
    {
        nombre: 'Filosofía en la Calle',
		genero: 'Filosofía',
		year: 2019,
		precio: 380,
		editorial: 'Nova',
        sucursal: 'Roma',
		formato: 'Pasta Dura',
        paginas: 423
    },
    {
        nombre: 'La Guerra de los Mundos',
		genero: 'Ciencia Ficción',
		year: 2005,
		precio: 100,
		editorial: 'Minotauro',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 158
    },
    {
        nombre: 'Juego de Tronos',
		genero: 'Fantasía',
		year: 1996,
		precio: 480,
		editorial: 'Minotauro',
        sucursal: 'Roma',
		formato: 'Pasta Dura',
        paginas: 694
    },
    {
        nombre: 'El Principito',
		genero: 'Literatura',
		year: 1943,
		precio: 50,
		editorial: 'Debolsillo',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 97
    },
    {
        nombre: 'El Mundo de Sofía',
		genero: 'Filosofía',
		year: 1991,
		precio: 210,
		editorial: 'Nova',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 640
    },
    {
        nombre: 'El Juego de Ender',
		genero: 'Ciencia Ficción',
		year: 1986,
		precio: 120,
		editorial: 'Minotauro',
        sucursal: 'Vallejo',
		formato: 'Pasta Blanda',
        paginas: 324
    },
    {
        nombre: 'Yo, Robot',
		genero: 'Ciencia Ficción',
		year: 1950,
		precio: 320,
		editorial: 'Debolsillo',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 253
    },
    {
        nombre: 'Ready Player One',
		genero: 'Ciencia Ficción',
		year: 2011,
		precio: 374,
		editorial: 'Nova',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 374
    },
    {
        nombre: 'Marte Rojo',
		genero: 'Ciencia Ficción',
		year: 1992,
		precio: 75,
		editorial: 'Debolsillo',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 256
    },
    {
        nombre: 'El Hobbit',
		genero: 'Fantasía',
		year: 1920,
		precio: 190,
		editorial: 'Minotauro',
        sucursal: 'Roma',
		formato: 'Pasta Blanda',
        paginas: 310
    },
    {
        nombre: 'Harry Potter',
		genero: 'Fantasía',
		year: 1997,
		precio: 223,
		editorial: 'Nova',
        sucursal: 'Vallejo',
		formato: 'Pasta Blanda',
        paginas: 520
    },
    {
        nombre: 'Sombras de Identidad',
		genero: 'Fantasía',
		year: 2015,
		precio: 310,
		editorial: 'Minotauro',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 364
    },
    {
        nombre: 'Veinte poemas de amor',
		genero: 'Poesía',
		year: 1924,
		precio: 90,
		editorial: 'Nova',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 364
    },
    {
        nombre: 'Leche y miel',
		genero: 'Poesía',
		year: 2014,
		precio: 105,
		editorial: 'Minotauro',
        sucursal: 'Roma',
		formato: 'Pasta Dura',
        paginas: 364
    },
    {
        nombre: 'Romancero gitano',
		genero: 'Poesía',
		year: 1928,
		precio: 210,
		editorial: 'Debolsillo',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 250
    },
    {
        nombre: 'El sol y sus flores',
		genero: 'Poesía',
		year: 2017,
		precio: 195,
		editorial: 'Debolsillo',
        sucursal: 'Roma',
		formato: 'Pasta Blanda',
        paginas: 75
    },
    {
        nombre: 'La inercia del silencio',
		genero: 'Poesía',
		year: 2020,
		precio: 250,
		editorial: 'Nova',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 100
    },
    {
        nombre: 'El gran Gatsby',
		genero: 'Literatura',
		year: 1925,
		precio: 220,
		editorial: 'Debolsillo',
        sucursal: 'Roma',
		formato: 'Pasta Blanda',
        paginas: 105
    },
    {
        nombre: 'Pedro Páramo',
		genero: 'Literatura',
		year: 1955,
		precio: 200,
		editorial: 'Nova',
        sucursal: 'Polanco',
		formato: 'Pasta Dura',
        paginas: 114
    },
    {
        nombre: 'La montaña mágica',
		genero: 'Literatura',
		year: 1924,
		precio: 320,
		editorial: 'Minotauro',
        sucursal: 'Roma',
		formato: 'Pasta Dura',
        paginas: 1082
    },
    {
        nombre: 'El libro de la filosofía',
		genero: 'Filosofía',
		year: 2011,
		precio: 365,
		editorial: 'Nova',
        sucursal: 'Vallejo',
		formato: 'Pasta Dura',
        paginas: 420
    },
    {
        nombre: 'En el café de los existencialistas',
		genero: 'Filosofía',
		year: 2016,
		precio: 250,
		editorial: 'Debolsillo',
        sucursal: 'Polanco',
		formato: 'Pasta Blanda',
        paginas: 300
    },
    {
        nombre: 'El segundo sexo',
		genero: 'Filosofía',
		year: 1949,
		precio: 500,
		editorial: 'Minotauro',
        sucursal: 'Vallejo',
		formato: 'Pasta Blanda',
        paginas: 322
    },
    {
        nombre: 'El arte de la buena vida',
		genero: 'Filosofía',
		year: 2008,
		precio: 330,
		editorial: 'Nova',
        sucursal: 'Roma',
		formato: 'Pasta Blanda',
        paginas: 611
    },
]