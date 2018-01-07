<template>
<div>
    <draggable v-model="myArray" :options="{group:'people',forceFallback:true}" @start="drag=true" @end="drag=false">
        <div class='box' v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    data () {
        return {
            myArray: [
                {
                    id: 1,
                    name: 11
                },
                {
                    id: 2,
                    name: 22
                },
                {
                    id: 3,
                    name: 33
                },
                {
                    id: 4,
                    name: 44
                },
                {
                    id: 5,
                    name: 55
                },
                {
                    id: 6,
                    name: 66
                }
            ]
        }
    },
    watch: {
        myArray () {
            console.log('changed!!!')
        }
    },
    components: {
        draggable,
    }
}
</script>

<style lang="less">
.box{
    display: inline-block;
    margin: 10px;
    width: 70px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: rgb(78, 179, 128);
    color: #fff;
    border-radius: 3px;
}
</style>
