import { defineConfig } from 'vite'
// import daisyui from "daisyui";
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // secure: false,
      },
    },
  },
//   daisyui: {
// 		themes: [
// 			"light",
// 			{
// 				black: {
// 					primary: "rgb(29, 155, 240)",
// 					secondary: "rgb(24, 24, 24)",
// 				},
// 			},
// 		],
// 	},
})
