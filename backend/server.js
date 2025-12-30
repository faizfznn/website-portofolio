// backend/server.js

const express = require('express');
const app = express();
const port = 3001; // Kita gunakan port yang berbeda dari frontend

// Impor data pengalaman dari file frontend untuk sementara
// Sesuaikan path jika struktur folder berbeda
const { expData } = require('../src/data/experienceData.js');

// Endpoint atau "URL" untuk mendapatkan semua data pengalaman
app.get('/api/experiences', (req, res) => {
  res.json(expData); // Mengirim data sebagai response JSON
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server backend berjalan di http://localhost:${port}`);
});