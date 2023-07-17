import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import basicSsl from '@vitejs/plugin-basic-ssl';


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  plugins: [ basicSsl() ]
});