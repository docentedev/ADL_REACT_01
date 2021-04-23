const utils = require('./utils');

/* Programa */
const Main = async () => {
    console.log('┌─────────────────────────────┐');
    console.log('│       Aeroliana KATAM       │');
    console.log('└─────────────────────────────┘');

    const vuelos = [];

    const Program = async (response) => {
        utils.Menu(() => {
            console.log('┌─────────────────────────────┐');
            console.log('│ 0) Cerrar y mostrar resumen │');
            console.log('├─────────────────────────────┤');
        });

        if (response === '0') {
            // Cerrar y mostrar resumen
            utils.Resume(vuelos);
            utils.Close();
        } else {
            Program(await utils.Q('Selecciones Opción'));
        }
    }
    await Program('-1');
}

Main();