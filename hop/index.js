const utils = require('./utils');

const menu = () => {
    console.log('┌─────────────────────────────┐');
    console.log('│ 1) Mostar vuelo             │');
    console.log('│ 2) Check In Pasajero        │');
    console.log('│ 3) Ver Asientos disponibles │');
    console.log('│ 4) Corregir Datos Pasajero  │');
    console.log('│ 5) Cerrar Vuelo             │');
    console.log('│ 6) Crear Vuelo              │');
    console.log('│ 7) Mostrar resumen          │');
    console.log('│ 0) Cerrar y mostrar resumen │');
    console.log('├─────────────────────────────┤');
}

/* Programa */
const Main = async () => {
    console.log('┌─────────────────────────────┐');
    console.log('│       Aeroliana KATAM       │');
    console.log('└─────────────────────────────┘');

    const vuelos = [];

    const Program = async (response) => {
        utils.Menu(menu);

        if (response === '0') {
            // Cerar y mostrar resumen
            utils.Resume(vuelos);
            utils.Close();
        } else if (response === '1') {
            const code = await utils.Q('Ingrese codigo')
            const v = vuelos.find(v => v.code === code)
            if (v) {
                console.log('│ Vuelo');
                utils.Resume(v);
                await utils.Q('Enter para continuar')
                Program('-1');
            } else {
                console.log(`│ Vuelo ${code} no exite`);
                await utils.Q('Enter para continuar')
                Program('-1');
            }
        } else if (response === '6') {
            // Agregar vuelo
            let code = await utils.Q('Codigo');
            if (vuelos.find(v => v.code === code)) {
                console.log(`│ No se puede agregar, vuelo ${code} ya existe`);
                await utils.Q('Enter para continuar')
                Program('-1');
            } else {
                const vuelo = {
                    code,
                    name: await utils.Q('Nombre'),
                };
                vuelos.push(vuelo);
                Program('-1');
            }
        } else if (response === '7') {
            // Mostrar resumen
            utils.Resume(vuelos);
            Program(await utils.Q('Selecciones Opción'));
        } else {
            Program(await utils.Q('Selecciones Opción'));
        }
    }
    await Program('-1');
}

Main();