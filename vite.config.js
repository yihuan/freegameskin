import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	build: {
		sourceMap: true
	},
	plugins: [uni()]
})