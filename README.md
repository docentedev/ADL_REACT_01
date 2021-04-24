# REACT 01

## Nivelación

### Instala herramientas para el desarrollo de javascript (GIT, NodeJS LTS(14.16.1), VS Code)

- Instalar GIT [git-scm.com](https://git-scm.com/)
- Instalar NodeJS [nodejs.org/es](https://nodejs.org/es/)
- Instalar VS Code [code.visualstudio.com](https://code.visualstudio.com/)

comprueba que git está instalado

```bash
git --version # Comprueba que npm está instalado npm --version

```

### Crea un repositorio vacío utilizando GitHub para clonarlo en un computador

- Ingresar a Github, crear una cuenta e iniciar sesión [github.com](https://github.com/)
- Crear un repositorio nuevo
  - sección derecha superior de la pantalla hacer click en `+`)
  - Click en `New repository`
  - Completar el campo `Repository name`
  - Click en en el botón `Create repository`
  - copiar texto en la sección `...or push an existing repository from the command line`, similar a

```bash
git remote add origin https://github.com/docentedev/ADL_REACT_01.git
git branch -M main
git push -u origin main
```

- clonar repositorio `git clone [repo url]`
  - Abrir VS Code
  - En opciones ir a `File > Open` y elegir una carpeta
  - En opciones ir a `Terminal > New Terminal`
  - Pegar código copiado anteriormente en la terminal y presionar Enter

### Crea proyecto npm y Git de manera local para vincularlo al repositorio

- Creare un repositorio localmente
  - Abrir VS Code
  - En opciones ir a `File > Open` y elegir una carpeta
  - En opciones ir a `Terminal > New Terminal`
  - Inicializar como proyecto de git con el comando git init (se pueden completar los datos o solo ir presionando Enter)
  - Inicializar como proyecto de NPM con el comando npm init (se pueden completar los datos o solo ir presionando Enter)
  - Crear un repositorio en Github según lo ya visto pero ahora copiaremos el texto en la sección `...or create a new repository on the command line` similar a

```bash
echo "# ADL_REACT_01" >> README.md
git init git add README.md git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/docentedev/ADL_REACT_01.git
git push -u origin main
```

- En la terminal pegar el texto git remote `add origin https://github.com/docentedev/ADL_REACT_01.git`
- Agregar los archivos `git add .`
- Cambiarse a la rama main con el comando `git branch -M main`
- Agregar el mensaje a los archivos a subir `git commit -m "Aquí va el mensaje"`
- subir los cambios con el comando `git push -u origin main`

#### Apéndice GIT

```bash
# Inicializar un repositorio de git
git init
# Agregar un origen donde se guardará el código
git remote add &lturl del repositorio
# Bajar cambios desde un repositorio
git pull origin &ltnombre de rama
# Agregar los archivos cambiados para subirlos al repositorio
git add .
# Agregar un mensaje que describa lo que se está subiendo
git commit -m "Mensaje que describe lo que se sube"
# Subir los archivos
git push origin <nombre de rama>
# Comprueba que git está instalado
git --version
```

### Crea un Hola Mundo con NodeJs y lo ejecuta como tarea NPM

- En el repositorio creado e inicializado como proyecto `NPM` y `GIT` crear un archivo llamado `index.js`
- agregar como contenido al archivo `console.log("Hola Mundo")`
- vincular el archivo en los scripts en el archivo `package.json`
- Cambiar el siguiente texto en el archivo `package.json`

```json
"scripts": { "test": "echo \"Error: no test specified\" && exit 1" },
```

- Dejarlo así

```json
"scripts": {
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

- Ejecutar el programa en la terminal `npm start` por consola deberia verse el texto

```bash
Hola Mundo
```

### Interpreta Conceptos básicos de JS y genera un programa básico

#### const

- Definir un valor de tal manera que el este no sea modificable
- utilizando `camelCase` para escribir el nombre de las constantes
- puedes contener cualquier tipo de dato

```js
const primerNombre = "Juan";
const titulo = "Ingeniero";
const edad = 40;
const esHuman = true;
const esMiedoso = false;
// Si intentamos cambiar un valor el programa nos dará un error pues no es posible modificar el valor
titulo = "Arquitecto";
// TypeError: Assignment to constant variable.
```

- _let_
- Igual que la constante pero este valor si se puede modificar

```js
let nombreDeRegion = "Metropolitana";
nombreDeRegion = "Metropolitana de Santiago";
```

#### if/else (condicionales)

Permite validar si un valor cumple con una condición dada y hacer algo en caso verdadero y en caso falso, algunos ejemplos

- Si una edad es mayor a
- Si un texto es igual a otro
- Si valor es verdadero o falso

| **Key**    | **Descripción**                                                                        |
| ---------- | -------------------------------------------------------------------------------------- |
| **`===`**  | **igual en valor y en tipo**                                                           |
| **`!==`**  | **distinto en valor o en tipo**                                                        |
| **`>`**    | **Mayor que**                                                                          |
| **`<`**    | **Menor que**                                                                          |
| **`>=`**   | **Mayor o igual que**                                                                  |
| **`<=`**   | **Menor o igual que**                                                                  |
| **`\|\|`** | **concatena condiciones donde la primera que sea correcta hará la consulta verdadera** |
| **`&&`**   | **concatena condiciones donde todas las condiciones se deben cumplir**                 |

```js
const nombrePersona = "Priscila" const edadPersona = 18
// Mostrará 'Hola Juan' en pantalla
if (nombrePersona == "Juan") {
  console.log("Hola Juan")
} else {
  console.log("Hola Priscila")
}
// Mostrara 'Usted es mayor de edad'
if (edadPersona >= 18)
  console.log("Usted es mayor de edad")
} else {
  console.log("Usted es menor de edad")
}
```

#### validación de tipo

Es importante no solo validar el valor de un elemento en los condicionales pero también debemos validar que el tipo sea el mismo

- Si no se valida el tipo se pueden dar situaciones extrañas como la siguiente
- para eso utilizaremos

| **key** | **Descripción**                                      |
| ------- | ---------------------------------------------------- |
| `===`   | comprueba si el valor es igual en valor y en tipo    |
| `!==`   | comprueba si el valor es distinto en valor o en tipo |

```js
const numero1 = 18;
const numero2 = "18";
// Mostrara 'Son iguales'
if (numero1 == numero2) {
  console.log("Son iguales");
}
// Mostrará 'Pero no son idénticos'
if (numero1 === numero2) {
  console.log("Son iguales");
} else {
  console.log("Pero no son idénticos");
}
```

#### Operador ternario

Un operador que evalúa una condición y de ser verdadero se retorna el valor luego del `?` y de ser falso se retorna el valor luego de `:`

```js
// Mostrará 'Uno no es mayor que dos'
const resultado = 1 > 2 ? "Uno si es mayor que 2" : "Uno no es mayor que dos";
// Mostrará 'Uno es mayor que cero'
const resultado2 = 1 > 0 ? "Uno es mayor que cero" : "Uno no es mator que cero";
```

#### swith

La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

```js
const fruta = "Manzana";
switch (fruta) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Plátanos":
    console.log("El kilogramo de plátanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log(
      "Lo lamentamos, por el momento no disponemos de " + fruta + "."
    );
}
console.log("¿Hay algo más que te quisiera consultar?");
```

#### function

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas
- Parámetros por defecto, permite declarar valores iniciales en caso de no llamar a la función con algun parametro especifico
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }

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
const listaFrutas = ["Platano", "Frutilla", "Mango"];
```

##### map

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida: [11, 21, 31, 46, 51, 54, 61, 71, 81, 89, 91, 101]
numeros.map(function (numero) {
  return numero + 1;
});
```

Ejemplo de mapeado de objetos

```js
const frutas = [
  {
    nombre: "Manzana",
    precio: 100,
    existencia: 1,
  },
  {
    nombre: "Pera",
    precio: 100,
    existencia: 1,
  },
];
frutas.map(function (fruta) {
  if (fruta.nombre === "Pera" && fruta.existencia === 1) {
    return {
      ...fruta,
      precio: fruta.precio * 2,
    };
  }
  return fruta;
});
```

##### filter

Retorna un nuevo Array solo con los elementos que cumplen con la condición data

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida: [53, 60, 70, 80, 88, 90, 100]
numeros.filter(function (numero) {
  const condicion = numero > 50;
  return condicion;
});
```

Ejemplo de filtrado de objetos

```js
const frutas = [
  {
    nombre: "Manzana",
    precio: 100,
    existencia: 2,
  },
  {
    nombre: "Pera",
    precio: 100,
    existencia: 0,
  },
];

frutas.filter(function (fruta) {
  return fruta.existencia > 0;
});
```

##### every

Retorna `true` solo si todos los elementos del Array cumplen la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida: false
numeros.every(function (numero) {
  const condicion = numero > 50;
  return condicion;
});

// salida: true
numeros.every(function (numero) {
  const condicion = numero > 9;
  return condicion;
});
```

##### some

Retorna `true` si al menos un elemento cumple con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];
// salida: true
numeros.some(function (numero) {
  const condicion = numero > 50;
  return condicion;
});

// salida: false
numeros.some(function (numero) {
  const condicion = numero > 500;
  return condicion;
});
```

##### find

Retorna el primer elemento que cumpla con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida: 53
numeros.find(function (numero) {
  const condicion = numero > 50;
  return condicion;
});

// salida: undefined
numeros.find(function (numero) {
  const condicion = numero > 500;
  return condicion;
});
```

##### findIndex

Retorna el índice del primer elemento que cumpla con la condición dada

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// retorna el elemento en la posicion 5, recordar que la primera posición en un Array es 0 (primer entero positivo)
// salida: 5
numeros.findIndex(function (numero) {
  const condicion = numero > 50;
  return condicion;
});

// -1 quiere decir que no existe ningun elemento que cumpla con la condición y por lo tanto no existe en el Array
// salida: -1
numeros.findIndex(function (numero) {
  const condicion = numero > 500;
  return condicion;
});
```

##### forEach

Permite recorrer un Array, no retorna ningún valor

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

numeros.forEach(function (numero) {
  // Mostrara en pantalla el numero en cada iteración
  console.log(numero);
});
```

##### reduce

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

valorInicial `opcional` Un valor a usar como primer argumento en la primera llamada de la función callback. Si no se proporciona el valorInicial, el primer elemento del array será utilizado y saltado. Llamando a reduce() sobre un array vacío sin un valorInicial lanzará un TypeError.

```js
const numeros = [10, 20, 30, 45, 50, 53, 60, 70, 80, 88, 90, 100];

// salida: 696 la suma de todos los numeros
numeros.reduce(function (valorAcumulado, valorActual) {
  const nuevoValor = valorAcumulado + valorActual;
  return nuevoValor;
});
```

#### Object

Un objeto en JavaScript es un contenedor de propiedades, donde una propiedad tiene un nombre key y un valor `value`.

##### Object de ejemplo

```js
const object = {
  a: "somestring",
  b: 42,
  c: false,
};
```

##### Objeto de ejemplo con múltiples niveles

```js
const object = {
  a: "somestring",
  b: 42,
  c: false,
  propiedadesExtras: {
    unArray: [1, 2, 3, 4],
    unTexto: "CualquierCosa",
    unNumero: 100.1,
  },
};
```

El nombre de una propiedad puede ser una cadena de caracteres, incluso una vacía.

El valor de la propiedad puede ser cualquier valor que podamos utilizar en JavaScript, excepto undefined .

###### keys

El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal

```js
const object = {
  a: "somestring",
  b: 42,
  c: false,
};

// salida:: Array ['a', 'b', 'c']
console.log(Object.keys(object));
```

###### values

El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.

```js
const object = {
  a: "loQueSea",
  b: 42,
  c: false,
};

// salida:: Array ["loQueSea", 42, false]
console.log(Object.values(object1));
```

###### JSON.parse

El método JSON.parse() analiza una cadena de texto y la transforma a un Objeto JavaScript

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

###### JSON.stringify

El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON

```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// salida: "{"x":5,"y":6}"

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);
// salida: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// salida: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// salida: ""2006-01-02T15:04:05.000Z""
```

### Utiliza características nuevas de ES6 que permiten refactorizar código de javascript para obtener un código más semántico y conciso

#### Destructuring

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables

```js
let a
let b
let rest

[a, b] = [10, 20]

console.log(a)
// salida: 10

console.log(b)
// salida: 20

[a, b, ...rest] = [10, 20, 30, 40, 50]

console.log(rest)
// salida: Array [30,40,50]
```

#### Spread

El spread operator que incorpora ECMAScript 6 en JavaScript es un operador que simplifica la recogida de valores en una estructura de datos

Convierte un array o un objeto en el conjunto de valores que contiene

```js
const array1 = [3, 4];
const arr = [1, 2, ...array1, 5, 6];
// salida: [1, 2, 3, 4, 5, 6]
```

Unir varios Array en uno

```js
// Añadir nuevos elementos
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
// salida: [1, 2, 3, 4]
// Sumar arrays
const sumOfArrays = [...numbers, ...newNumbers];
// salida: [1, 2, 3, 1, 2, 3, 4]
// Clonar arrays
var originalArr = [22, 3, 68, 0];
var newArray = [...originalArr];
// salida: [22, 3, 68, 0]
```

Recoger múltiples propiedades

```js
const arr = [22, 3, 68, 0];
const max = Math.max(...arr);
// salida: 68
```

Utilización en Objetos

```js
const dog = {
  name: "Lucas",
  age: 7,
  breed: "cocker",
};
const dogOwner = { ...dog, owner: "Juan", breed: "cocker spaniel" };
// salida: {name: "Lucas", age: 7, breed: "cocker spaniel", owner: "Juan"}
```

```js
const dog = {
  name: "Lucas",
  age: 7,
  breed: "cocker",
};
const dogLover = {
  nombre: "Jaime",
  mascota: {
    name: "Thor",
    ...dog,
  },
};
// salida: {"nombre":"Jaime","mascota":{"name":"Lucas","age":7,"breed":"cocker"}}
```

Utilización como parámetros en una función

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(...numbers);
// salida: 6

const numbers2 = [1, 2, 3, 4];
sum(...numbers);
// salida: 10
```

- Arrow Function

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

```js
function funcionNormal (a, b) {
    const r = a + b
    return r
}

const functionAnonima = (a, b) {
    const r = a + b
    return r
}

const funcionFlecha = (a, b) =>  {
    const r = a + b
    return r
}

const funcionFlechaUnParametro = a =>  {
    const r = a + a
    return r
}

const funcionFlechaUnParametroUnaLinea = a =>  a + a

const funcionFlechaDosParametrosUnaLinea = (a, b) =>  a + b
```

#### plantillas literales

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

- Antes de las plantillas literales

```js
let a = 5;
let b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");
// "Quince es 15 y
// no 20."
```

- Con plantillas literales

```js
let a = 5;
let b = 10;
console.log(`Quince es ${a + b} y
no ${2 * a + b}.`);
// "Quince es 15 y
// no 20."
```

### Explica conceptos de Programación funcional para obtener un código más seguro

#### Funciones puras

Una forma muy rápida y poco precisa de definir a las Funciones Puras sería decir que son aquellas que operan utilizando solo los parámetros de entrada sin recurrir a ningún otro elemento fuera de ellas.

```js
// función pura
function funcionPura(a, b) {
  const r = a + b;
  return r;
}

// función no pura
const c = 10;

function funcionNoPura(a) {
  const r = a + c;
  return r;
}
```

#### inmutabilidad

Un valor inmutable es un valor que no se puede cambiar luego de ser definido, se puede modificar pero debe ser en un objeto diferente.

#### composición

Una vez que tenemos nuestras funciones puras, la composición nos permite aplicar dichas funciones en cadena

```js
const original = [80, 3, 14, 22, 30];

const result = original
  .filter((value) => value % 2 === 0)
  .filter((value) => value > 20)
  .reduce((accumulator, value) => accumulator + value);

console.log(result); // 132
```

Ejemplo con el mismo comportamiento pero reutilizable

```js
const original = [80, 3, 14, 22, 30];

const filterOnlyPairElements = (values) =>
  values.filter((value) => value % 2 === 0);
const filterGreaterThan = (values) => (max) =>
  values.filter((value) => value > max);
const sumAllValues = (values) =>
  values.reduce((accumulator, value) => accumulator + value);

const result = sumAllValues(
  filterGreaterThan(filterOnlyPairElements(original))(20)
);

console.log(result); // 132
```

### Modifica el código en javascript para optimizar su funcionamiento y legibilidad

#### Simulación de código asíncrono con `callback`

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

```js
const getName = (callback) => {
  setTimeout(() => {
    callback("Juan");
  }, 500);
};

const getAge = (callback) => {
  setTimeout(() => {
    callback(33);
  }, 500);
};

const main = () => {
  getName((name) => {
    getAge((age) => {
      const resultado = `${name} tiene ${age}`;
      console.log(resultado);
    });
  });
};

main();

// salida: Juan tiene 33
```

#### Promesas

El objeto Promise (Promesa) es usado para computaciones asíncronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

```js
const getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Juan");
    }, 500);
  });
};

const getAge = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(33);
    }, 500);
  });
};

const main = () => {
  const p1 = getName();
  const p2 = getAge();

  Promise.all([p1, p2]).then((values) => {
    const resultado = `${values[0]} tiene ${values[1]}`;
    console.log(resultado);
  });
};

main();
// salida: Juan tiene 33
```

#### Await/Async

```js
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getName = async () => {
  await timeout(500);
  return "Juan";
};

const getAge = async () => {
  await timeout(500);
  return 33;
};

const main = async () => {
  const p1 = await getName();
  const p2 = await getAge();
  const resultado = `${p1} tiene ${p2}`;
  console.log(resultado);
};

// en este caso la función al ser asincrona se debe llamar dentron de una funcion asincrona
(async () => {
  await main();
})();
// salida: Juan tiene 33

// la otra solucion es resolver la funcion como una promesa
main().then();
// salida: Juan tiene 33
```

#### try/catch

La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).

```js
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // El mensaje podria variar dependiendo del navegador
}

const logMyErrors = (e) => console.info(e);

try {
  myroutine(); // puede lanzar tres tipos de excepciones
} catch (e) {
  if (e instanceof TypeError) {
    // sentencias para manejar excepciones TypeError
    console.info(e);
  } else if (e instanceof RangeError) {
    // sentencias para manejar excepciones RangeError
    console.info(e);
  } else if (e instanceof EvalError) {
    // sentencias para manejar excepciones EvalError
    console.info(e);
  } else if (e instanceof ReferenceError) {
    // sentencias para manejar excepciones ReferenceError
    console.info(e);
  } else {
    // sentencias para manejar cualquier excepción no especificada
    logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
  }
}
```

#### throw/new Error

```js
try {
  throw "myException"; // genera una excepción
} catch (e) {
  // sentencias para manejar cualquier excepción
  logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}
```

#### Generando errores con mensaje

```js
try {
  throw new Error("Error de prueba");
} catch (e) {
  console.log(e.message);
}

// salida: Error de prueba
```
