export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID Section',
      type: 'string',
      validation: Rule => Rule.required(), // Hapus .unique() sementara
    },
    {
      name: 'title',
      title: 'Judul Section',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Konten Section',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Gambar',
      type: 'image',
    },
    {
      name: 'order',
      title: 'Urutan',
      type: 'number',
    },
  ],
};