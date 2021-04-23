# Curso ReactJS

## Nivelación

### Instala herramientas para el desarrollo de javascript (GIT, NodeJS LTS(14.16.1), VS Code)

- Instalar GIT [https://git-scm.com/](https://git-scm.com/)
- Instalar NodeJS [https://nodejs.org/es/](https://nodejs.org/es/)
- Instalar VS Code [https://code.visualstudio.com/](https://code.visualstudio.com/)

### Crea un repositorio vacío utilizando GitHub para clonarlo en un computador

- Ingresar a Github, crear una cuenta e iniciar sesión [https://github.com/](https://github.com/)
- Crear un repositorio nuevo
  - sección derecha superior de la pantalla hacer click en `+`)
  - Click en `New repository`
  - Completar el campo `Repository name`
  - Click en en el boton `Create repository`
  - copiar texto en la sección `…or push an existing repository from the command line`, similar a

```sh
git remote add origin https://github.com/docentedev/ADL_REACT_01.git
git branch -M main
git push -u origin main
```

- clonar repositorio `git clone [repo url]`
  - Abrir `VS Code`
  - En opciones ir a `File > Open` y elegir una carpeta
  - En opciones ir a `Terminal > New Terminal`
  - Pegar código copiado anteriormente en la terminal y presionar `Enter`

### Crea proyecto npm y Git de manera local para  vincularlo al repositorio

- Creare un repositorio localmente
- Abrir `VS Code`
- En opciones ir a `File > Open` y elegir una carpeta
- En opciones ir a `Terminal > New Terminal`
- Inicializar como proyecto de git con el comando `git init` (se pueden completar los datos o solo ir presionando `Enter`)
- Inicializar como proyecto de NPM con el comando `npm init` (se pueden completar los datos o solo ir presionando `Enter`)
- Crear un repositorio en Github segun lo ya visto pero ahora copiaremos el texto en la sección `…or create a new repository on the command line` similar a

```sh
echo "# ADL_REACT_01" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/docentedev/ADL_REACT_01.git
git push -u origin main
```

- En la terminar pegar el texto `git remote add origin https://github.com/docentedev/ADL_REACT_01.git`
- Agregar los archivos `git add .`
- Cambiarse a la rama  `main` con el comando `git branch -M main`
- Agregar el mensaje a los archivos a subir `git commit -m "Aqui va el mensaje"`
- subir los cambios con el comando `git push -u origin main`

#### Apendice GIT

```sh
# Inicializar un repositorio de git
git init
# Agregar un origen donde se guardara el código
git remote add <url del repositorio>
# Bajar cambios desde un repositorio
git pull origin <nombre de rama>
# Agregar los archivos cambiados para subirlos al repositorio
git add .
# Agregar un mensaje que describa lo que se esta subiendo
git commit -m  "Mensaje que describe lo que se sube"
# Subir los archivos
git push origin <nombre de rama>
```

### Crea un Hola Mundo con NodeJs y lo ejecuta como tarea NPM

- En el repositorio creado e inicializado como proyecto `NPM` y `GIT` crear un archivo llamado `index.js`
- agregar como contenido al archivo `console.log("Hola Mundo");`
- vincular el archivo en los scripts en el archivo `package.json`
- Cambiar el siguiente texto en el archivo `package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Dejarlo asi

```json
"scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

- Ejecutar el programa en la terminal `npm start` por consola deberia verse el texto

```sh
Hola Mundo
```

### Interpreta Conceptos básicos de JS y genera un programa básico

***const***

Definir un valor de tal manera que el este no sea modificable

- utilizando `camelCase` para escribir el nombre de las constantes
- puedes contener cualquier tipo de dato

```js
const primerNombre = "Aragon";
const titulo = "Rey de Gondor";
const edad = 200;
const esHuman = true;
const esMiedoso = false;

// Si intentamos cambiar un valor el programa nos dara un error pues no es posible modificar el valor
titulo = "Montaraz"; // TypeError: Assignment to constant variable.
```

***let***

Igual que la constante pero este valor si se puede modificar

```js
let nombreDeRegion = "Metropolitana";
nombreDeRegion = "Metropolitana de Santiago";
```

***if/else (condicionales)***

Permite validar si un valor cumple con una condicion dada y hacer algo en caso verdadero y en caso falso, algunos ejemplos

- Si una edad es mayor a
- Si un texto es igual a otro
- Si valor es verdadero o falso

| key | Descripción                                                                          |
|-----|--------------------------------------------------------------------------------------|
| `===` | igual en valor y en tipo                                                           |
| `!==` | distinto en valor o en tipo                                                        |
|  `>`  | Mayor que                                                                          |
|  `<`  | Menor que                                                                          |
|  `>=` | Mayor o igual que                                                                  |
|  `<=` | Menor o igual que                                                                  |
| `\|\|`| concatena condiciones donde la primera que sea correcta hara la consulta verdadera |
|  `&&` | concatena condiciones donde todas las condiciones se deben cumplir                 |

```js
const nombrePersona = "Priscila";
const edadPersona = 18;

// Mostrara 'Hola Juan' en pantalla
if (nombrePersona == "Juan") {
    console.log("Hola Juan")
} else {
    console.log("Hola Priscila");
}

// Mostrara 'Usted es mayor de edad'
if (edadPersona >= 18) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
}
```

***validación de tipo***

Es importante no solo validar el valor de un elemento en los condicionales pero tambien debemos validar que el tipo sea el mismo

- Si no se valida el tipo se pueden dar situaciones extrañas como la siguiente
- para eso utilizaremos

| key | Descripción                                            |
|-----|--------------------------------------------------------|
| `===` | comprueba si el valor es igual en valor y en tipo    |
| `!==` | comprueba si el valor es distinto en valor o en tipo |

```js
const numero1 = 18;
const numero2 = "18";

// Mostrara 'Son iguales'
if (numero1 == numero2) {
    console.log("Son iguales");
}

// Mostrara 'Pero no son identicos'
if (numero1 === numero2) {
    console.log("Son iguales");
} else {
    console.log("Pero no son identicos");
}
```

#### Operador ternario

Un operador que evalua una condicion y de ser verdadero se retorna el valor luego del `?` y de ser falso se retorna el valor luego de `:`

```js
// Mostrara 'Uno no es mayor que dos'
const resultado = 1 > 2 ? "Uno si es mayor que 2" : "Uno no es mayor que dos";
// Mostrara 'Uno es mayor que cero'
const resultado2 = 1 > 0 ? "Uno es mayor que cero" : "Uno no es mator que cero";
```

#### swith

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

```js
const fruta = "Manzana";
switch (fruta) {
  case 'Naranjas':
    console.log('El kilogramo de naranjas cuesta $0.59.');
    break;
  case 'Manzanas':
    console.log('El kilogramo de manzanas cuesta $0.32.');
    break;
  case 'Platanos':
    console.log('El kilogramo de platanos cuesta $0.48.');
    break;
  case 'Cerezas':
    console.log('El kilogramo de cerezas cuesta $3.00.');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
    break;
  default:
    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}
console.log("¿Hay algo más que te quisiera consultar?");
```

#### function

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas
- Parametros por defecto, permite declarar valores iniciales en caso de no llamar a la función con algun parametro especifico
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, `{ ... }`

```js
// Declaración de la función
function square(number = 2) {
    // Cuerpo de la función
  return number * number;
}

// Una función solo se ejecuta cuando es llamada
// Llamado a función
// La salida de la función sera sera 9
square(3);

// Llamado a función sin enviar parametros
// La salida sera 4, ya que por defecto definimos el valor 2 para el parametro `number`
square();
```

### Utiliza los objetos y listas de JS, leyendo sus valores y mostrando los resultados en pantalla

#### Array

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

```js
const listaFrutas = ['Platano', 'Frutilla', 'Mango'];
```

- map

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida [11, 21, 31, 46, 51, 54, 61, 71, 81, 89, 91, 101]
numeros.map(function(numero) {
  return numero + 1;
})
```

- filter

Retora un nuevo Array solo con los elementos que cumplen con la condición data

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida [53, 60, 70, 80, 88, 90, 100]
numeros.filter(function(numero) {
  const condicion = numero > 50
  return condicion;
})
```

- every

Retorna `true` solo si todos los elementos del Array cumplen la condicion dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida false
numeros.every(function(numero) {
  const condicion = numero > 50
  return condicion;
})

// salida true
numeros.every(function(numero) {
  const condicion = numero > 9
  return condicion;
})
```

- some

Retorna `true` si al menos un elemento cumple con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida true
numeros.some(function(numero) {
  const condicion = numero > 50
  return condicion;
})

// salida false
numeros.some(function(numero) {
  const condicion = numero > 500
  return condicion;
})
```

- find

Retorna el primer elemento que cumpla con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida 53
numeros.find(function(numero) {
  const condicion = numero > 50
  return condicion;
})

// salida undefined
numeros.find(function(numero) {
  const condicion = numero > 500
  return condicion;
})
```

- findIndex

Retorna el indice del primer elemento que cumpla con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// retorna el elemento en la posicion 5, recordar que la primera posición en un Array es 0 (primer entero positivo)
// salida 5
numeros.findIndex(function(numero) {
  const condicion = numero > 50
  return condicion;
})

// -1 quiere decir que no existe ningun elemento que cumpla con la condición y por lo tanto no existe en el Array
// salida -1
numeros.findIndex(function(numero) {
  const condicion = numero > 500
  return condicion;
})
```

- forEach

Permite recorrer un Array, no retorna ningun valor

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

numeros.forEach(function(numero) {
  // Mostrara en pantalla el numero en cada iteración
  console.log(numero);
})

```

- reduce

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

valorInicial `opcional`
Un valor a usar como primer argumento en la primera llamada de la función callback. Si no se proporciona el valorInicial, el primer elemento del array será utilizado y saltado. Llamando a reduce() sobre un array vacío sin un valorInicial lanzará un TypeError.

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida 696 la suma de todos los numeros
numeros.reduce(function(valorAcumulado, valorActual) {
  const nuevoValor = valorAcumulado + valorActual;
  return nuevoValor;
})
```

#### Object

Un objeto en JavaScript es un contenedor de propiedades, donde una propiedad tiene un nombre `key` y un valor `value`.

El nombre de una propiedad puede ser una cadena de caracteres, incluso una vacía.

El valor de la propiedad puede ser cualquier valor que podamos utilizar en JavaScript, excepto undefined .

- keys

El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal

```js
const object = {
  a: 'somestring',
  b: 42,
  c: false
};

// salida: Array ['a', 'b', 'c']
console.log(Object.keys(object));
```

- values

El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

```js
const object = {
  a: 'somestring',
  b: 42,
  c: false
};

// salida: Array ["somestring", 42, false]
console.log(Object.values(object1));
```

- JSON.parse

- JSON.stringify

### Utiliza características  nuevas de ES6 que permiten refactorizar código de javascript para obtener un código más semántico y conciso

#### Destructuring

#### Spread

#### Arrow Function

### Explica conceptos de Programación funcional para obtener un código más seguro

#### Funciones puras

#### inmutabilidad

#### composición

### Modifica el código en javascript para optimizar su funcionamiento y legibilidad

#### Promesas

#### Await/Async

#### try/catch

#### throw

#### Exception
