import { defineConfig } from 'vite'
// import daisyui from "daisyui";
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
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
