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