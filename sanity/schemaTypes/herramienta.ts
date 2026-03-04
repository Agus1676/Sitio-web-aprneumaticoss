export const herramienta = { // <-- Verifica que diga 'export const'
  name: 'herramienta',
  title: 'Herramientas',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre de la Herramienta',
      type: 'string',
    },
    {
      name: 'marca',
      title: 'Marca',
      type: 'string',
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'imagen',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}