const { createClient } = require('@sanity/client');
const fs = require('fs');

// Tu configuración de Sanity
const client = createClient({
  projectId: 'chfqu4zx', 
  dataset: 'production',
  token: 'sk5ES2tGwpRHAecXPJCGvoknnSKdc35mHGh0Uw1OPTHQ1ooGOaYzWDLgilN3fCQqF0sDs7ag8m33YMUAyqnBex6pa75h56KVgmbLS8n8X7SJRslzfa3gNhu6kkfRpRc8dgIoAgPeL5dkXzum7D4Z7e6rlVBjTpbWP4JPp5CzlwEMqEuM0ysG',
  useCdn: false,
  apiVersion: '2024-03-03',
});

async function enviarASanity() {
  try {
    // Leemos el archivo con los datos del robot
    const datos = JSON.parse(fs.readFileSync('datos-importacion.json', 'utf8'));
    console.log(`🚀 Preparando subida de ${datos.length} neumáticos...`);

    for (const item of datos) {
      await client.create({
        _type: 'neumatico', // El nombre exacto de tu esquema
        nombre: item.nombre,
        marca: item.marca,
        categoria: item.categoria,
        precio: 0, // Como pediste, todo arranca en $0
        slug: {
          _type: 'slug',
          current: item.nombre.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
        }
      });
      console.log(`✅ Cargado: ${item.nombre}`);
    }

    console.log('\n🏆 ¡PROCESO COMPLETADO! Ya podés verlos en tu panel.');
  } catch (err) {
    console.error('❌ Error crítico:', err.message);
  }
}

enviarASanity();