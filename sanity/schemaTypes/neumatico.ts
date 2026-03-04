export const neumatico = {
  name: 'neumatico',
  title: 'Neumáticos',
  type: 'document',
  fields: [
    { name: 'marca', title: 'Marca', type: 'string' },
    { name: 'modelo', title: 'Modelo', type: 'string' },
    { 
      name: 'categoria', 
      title: 'Categoría', 
      type: 'string',
      options: {
        list: [
          { title: 'Autos', value: 'autos' },
          { title: 'Camionetas', value: 'camionetas' },
          { title: 'Camiones', value: 'camiones' },
          { title: 'Agrícolas', value: 'agricolas' },
          { title: 'Industriales', value: 'industriales' },
        ],
      },
      // Cambié Rule por (rule) en minúscula para evitar el error de TypeScript
      validation: (rule: any) => rule.required()
    },
    { name: 'precio', title: 'Precio', type: 'number' },
    { name: 'stock', title: 'Stock', type: 'number' },
    { name: 'imagen', title: 'Imagen', type: 'image' },
  ],
}