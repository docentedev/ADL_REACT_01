// Puesto de Feria

const ganancias = 0;
// Frutas/Verduras
const productos = [{
    nombre: 'Naranja',
    precio: 100,
    existencia: 1,
}, {
    nombre: 'Aji',
    precio: 102,
    existencia: 0,
}, {
    nombre: 'Acelga',
    precio: 200,
    existencia: 10,
}, {
    nombre: 'Piña',
    precio: 1000,
    existencia: 9,
}, {
    nombre: 'Melon',
    precio: 900,
    existencia: 1,
}, {
    nombre: 'Lechuga',
    precio: 250,
    existencia: 20,
}, {
    nombre: 'Ajo',
    precio: 40,
    existencia: 100,
}, {
    nombre: 'Papa',
    precio: 50,
    existencia: 200,
}, {
    nombre: 'Lentejas',
    precio: 1900,
    existencia: 1020,
}, {
    nombre: 'Porotos',
    precio: 1000,
    existencia: 2000,
}];

const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const imprimir = (mensaje, ...valores) => {
    console.log(mensaje, ...valores)
}

const valorTotalMercaderia = (listado) => {
    const total = listado.reduce((acumulador, fruta) => {
        const totalFruta = fruta.precio * fruta.existencia
        return acumulador + totalFruta
    }, 0)
    imprimir(`\n\n`)
    imprimir(`> El valor total de los productos es: $${total}`)
    imprimir(`\n\n`)
}

const filtroProductosConExistencias = (fruta) => {
    return fruta.existencia > 0
}

const duplicarPrecioProductosUnaExistencia = (pro) => {
    if (pro.existencia === 1) {
        const nuevoPrecio = pro.precio * 2
        const producto = {
            ...pro,
            precio: nuevoPrecio,
        }
        imprimir('Subiendo el precio a:', producto)
        return producto
    }
    return pro
}

const comprarProducto = async (nombreProducto, cantidad, productos) => {
    imprimir(`\n\nVendiendo: ${nombreProducto}...`)
    await timeout(1000)
    imprimir('Calculando...')
    await timeout(1000)

    const producto = productos.find((prod) => prod.nombre === nombreProducto)
    try {
        if (!producto) {
            throw new Error(`No existe el producto: ${nombreProducto}`)
        }

        if (producto.existencia < cantidad) {
            throw new Error(`No existen la cantidad requerida (${cantidad}) del producto: ${nombreProducto}, solo queda/n: ${producto.existencia}`)
        }

        // Descontando Existencia a producto
        const nuevoProducto = {
            ...producto,
            existencia: producto.existencia - cantidad,
        }

        const nuevaListaProductos = productos.map((prod) => {
            if (prod.nombre === nombreProducto) {
                return nuevoProducto
            }
            return prod
        })
        
        imprimir('Vendido!')

        return nuevaListaProductos
    } catch (error) {
        throw new Error(error.message)
    }
}

// Programa
const main = async () => {
    valorTotalMercaderia(productos)

    const productoExistentes = productos.filter(filtroProductosConExistencias)
    imprimir('> Actualmente existen los siguientes productos:\n', productoExistentes)

    const productoExistentesAumentoPrecio = productos.map(duplicarPrecioProductosUnaExistencia)
    imprimir('> Aumentamos algunos precios:\n', productoExistentesAumentoPrecio)

    let nuevaListaProductos = []
    try {
        await comprarProducto('Manzana', 1, productoExistentesAumentoPrecio)
    } catch (e) {
        imprimir('Error:', e.message)
    }

    try {
        await comprarProducto('Naranja', 10000, productoExistentesAumentoPrecio)
    } catch (e) {
        imprimir('Error:', e.message)
    }

    try {
        nuevaListaProductos = await comprarProducto('Naranja', 1, productoExistentesAumentoPrecio)
    } catch (e) {
        imprimir('Error:', e.message)
    }

    try {
        nuevaListaProductos = await comprarProducto('Naranja', 1, nuevaListaProductos)
    } catch (e) {
        imprimir('Error:', e.message)
    }

    imprimir('\n> Actualmente existen los siguientes productos:\n', nuevaListaProductos)
    

    const hayExistenciaDeTodosLosProductos = productos.every(p => p.existencia > 0);
    console.log(hayExistenciaDeTodosLosProductos ? 'Todos los productos aun tiene existencias' : 'Algunos Productos ya no tiene existencias');

}

// Iniciar código asincrono
(async () => {
    await main()
})()


