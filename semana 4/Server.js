// Importar Express
const express = require('express');
const app = express();
// Definir ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});
// Escuchar en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
