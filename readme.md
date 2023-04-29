# TypeScript Terminal Calculator

## `Descripcion` del projecto

Este projecto consiste en una calculadora de terminal hecha en typeScript.

## Como `iniciar` el projecto

Para poder iniciar el projecto lo unico que hay que hacer es posicionarse dentro de la carpeta del projecto mediante `cd <ruta de la carpeta>`. Posteriormente ejectar el comando `npm start <argumentos>`.

### Argumentos de la aplicacion

Existen `cuatro argumentos` que colocar a la hora de ejecutar la aplicacion. La aplicacion esta diseñada para que todos los argumentos sean colocados, lanzara un error la terminal en el caso de que esten mal colocados.

### Primeros dos argumentos (numericos)

Estos dos primeros argumentos numericos son los numeros que van a ser operados.

### Argumento operador

Este argumento determina la operacion a realizar con los dos anteriores argumentos. Existen cuatro posibles operadores: `add` || `substract` || `multiply` || `divide`

### Argumento de texto

Este es el ultimo de los argumentos y su proposito es puramente decorativo. A la hora de ejecutar el comando sera expuesto junto al resultado de la operacion.

## Ejemplos utilizando el projecto

ejemplo 1 : `npm start 15 3 divide The result is:`
ejemplo 2 : `npm start 25 5 add result :`
