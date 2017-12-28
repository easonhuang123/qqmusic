<template>
    <div>
        <homeheader></homeheader>
        <homesection></homesection>
        <homesection></homesection>
        <homesection></homesection>
        <footer></footer>
    </div>
</template>

<script>
const homeheader = () => import(/* webpackChunkName: "home" */ '@/components/homeheader')
const homesection = () => import(/* webpackChunkName: "home" */ '@/components/homesection')
export default {
    name: 'Home',
    mounted () {
    },
    methods: {
        fade () {
            if (document.body.clientWidth <= '1160') {
                this.$refs.input.blur()
            }
        }
    },
    components: { homeheader, homesection }
}
</script>




