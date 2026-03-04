// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { neumatico } from './sanity/schemaTypes/neumatico'
import { herramienta } from './sanity/schemaTypes/herramienta' // <--- DEBE tener llaves { }

export default defineConfig({
  name: 'default',
  title: 'Tienda APR Neumáticos',
  projectId: 'chfqu4zx',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    // Aquí es donde se pasaba un 'undefined' y causaba el error rojo
    types: [neumatico, herramienta], 
  },
})