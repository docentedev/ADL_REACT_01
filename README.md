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
|  `>=` | Igual o mayor que                                                                  |
|  `<=` | Menos o igual que                                                                  |
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

***parametros***

***parametros por defecto***

***retorno***

### Utiliza los objetos y listas de JS, leyendo sus valores y mostrando los resultados en pantalla

#### Array

***map***

***filter***

***every***

***some***

***find***

***findByIndex***

***forEach***

***reduce***

#### Object

***.keys***

***.values***

***JSON.parse***

***JSON.stringify***

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
