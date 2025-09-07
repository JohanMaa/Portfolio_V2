import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'i3rgm9pp', // Ganti dengan project ID Sanity Anda
  dataset: 'production',
  apiVersion: '2023-01-01', // Versi API terbaru
  useCdn: false, // Untuk caching cepat
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);