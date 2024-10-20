const express = require('express');
const app = express();

app.get('/execute-script', (req, res) => {
    res.send('Script ejecutado correctamente');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
