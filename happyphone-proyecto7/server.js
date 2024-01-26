const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

// Endpoint para obtener datos de móviles
app.get('/api/mobiles', (req, res) => {
  // Lógica para obtener datos de móviles desde el archivo JSON
  const mobileData = JSON.parse(fs.readFileSync('public/json/catalogo.json', 'utf-8'));
  res.json(mobileData);
});

// Endpoint para el inicio de sesión
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Lógica de autenticación (simulada)
  if (username === 'usuario' && password === 'contraseña') {
    // Autenticación exitosa
    res.json({ success: true, message: 'Inicio de sesión exitoso' });
  } else {
    // Credenciales incorrectas
    res.json({ success: false, message: 'Credenciales incorrectas' });
  }
});

// Servir la aplicación React (ajusta esta ruta según tu configuración)
app.use(express.static('ruta/de/tu/app/react'));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
