<template>
    <div class='container'>
        <div class='barrage' v-for="i in 10" :key='i' ref='b'>
            <div class='barrage__header'></div>
            <div class='barrage__content'>
                <span>{{i}}</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'barrage',
    data () {
        return {
            item: [ 1, 2, 3, 4, 5, 6]
        }
    },
    mounted () {
        this.reset()
    },
    methods: {
        reset () {
            let delay = 0
            for (let i = 0; i < 10; i++) {
                delay = Math.random() * 16
                this.$refs.b[i].style.animation = '6s ' + delay + 's slide linear infinite'             
            }
        }
    }
}
</script>


<style lang="less">
.container{
    position: relative;
    width: 500px;
    height: 400px;
    background-color: #a4fcd1;
    overflow: hidden;
    .barrage{
        position: relative;
        height: 40px;
        font-size: 0;
        overflow: hidden;
        left: 500px;
        .barrage__header{
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            background-color: #14663f;
            z-index: 2;
        }
        .barrage__content{
            vertical-align: bottom;
            display: inline-block;
            height: 40px;
            line-height: 40px;
            background-color: #31c27c;
            margin-left: -20px;
            padding: 0 25px;
            font-size: 17px;
            color: #fff;
        }
    }
}

@keyframes slide {
    from {left: 500px;}
    to {left: -300px;}
} 
</style>
