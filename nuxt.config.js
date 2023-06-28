export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'frontend',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/admin/adminlte.min.css',
        'bootstrap-icons/font/bootstrap-icons.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/vue-cookies', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/auth',
        'cookie-universal-nuxt',
    ],

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login', method: 'post' },
                    // login: {url: '/login', method: 'post'},
                    // login: {url: '/login', method: 'post'}
                }
            }
        }
    },

    bootstrapVue: {
        // Add the icon plugin to the `componentsPlugins` array
        icons: true
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:8000',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },
    router: {
        extendRoutes(routes, resolve) {
            routes.push(
                {
                    path: '/admin',
                    components: {
                        default: resolve(__dirname, 'components/Tutorial.vue'), // or routes[index].component
                    },

                },
                {
                    path: '/login',
                    components: {
                        default: resolve(__dirname, 'components/admin/AdminLogin.vue'), // or routes[index].component
                    },
                },
                {
                    path: '/register',
                    components: {
                        default: resolve(__dirname, 'components/admin/AdminRegister.vue'), // or routes[index].component
                    },
                }
            )
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
