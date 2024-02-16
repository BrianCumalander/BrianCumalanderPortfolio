import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/       
export default defineConfig({
  plugins: [ 
    react(),
    Pages({
        // pagesDir: [
        //     {dir: 'src/pages', baseRoute: ''},
        // ],
        // extensions: ['vue'],
        // syncIndex: true,
        // replaceSquareBrackets: true,
        // extendRoute(route) {
        //     if (route.name === 'about')
        //         route.props = route => ({query: route.query.q})

        //     if (route.name === 'components') {
        //         return {
        //             ...route,
        //             beforeEnter: (route) => {
        //                 // eslint-disable-next-line no-console
        //                 // console.log(route)
        //             },
        //         }
        //     }
        // },
    }), 
],
})

