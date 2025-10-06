import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const data = JSON.parse(fs.readFileSync('./src/data.json', 'utf-8'));

export default defineConfig({
  plugins: [
    nunjucks({
      templatesDir: resolve(__dirname, 'src/templates'),
      variables: {
        'index.html': data
      }
    })
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
