<template>
    <Tutorial />
</template>

<script>
import Tutorial from '../components/Tutorial.vue'
export default {
    components: { Tutorial },
    layout: 'AdminLayout',
    transition: 'fade',

    head() {
        return {
            title: 'Tutorial',
        }
    },
    beforeCreate() {
        console.log('12312')
    },
}
</script>
