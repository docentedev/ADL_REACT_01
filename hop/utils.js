const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/** CODIGO PARA CERRAR PROGRAMA **/
const Clear = () => {
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
}

const Menu = (message) => {
    Clear();
    message();
}

const Q = async (text) => new Promise((resolve, reject) => {
    rl.question(`│ > ${text}  `, (response) => {
        resolve(response);
    });
})

const Resume = (data) => {
    console.log('├─────────────────────────────┤');
    console.log('│                             │');
    console.log(data);
    console.log('└─────────────────────────────┘');
}

const Close = () => rl.close();

module.exports = {
    Resume,
    Q,
    Menu,
    Clear,
    Close,
}