<template>
    <div class='ranklist'>
        <div class='ranklist__body'>
            <h1 class='ranklist__title'>排行榜</h1>
            <a class='more'>更多 > </a>
            <ul class="ranklist__ul">
                <li class="ranklist__li" v-for="item in items" :key='item.type'>
                    <rank :item='item'></rank>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import rank from './rank.vue'

export default {
    name: 'ranklist',
    data () {
        return {
            items: [
                {
                    type: '流行指数',
                    list: [
                        {
                            num: 1,
                            name: '说散就散',
                            author: '袁娅维'
                        },
                        {
                            num: 2,
                            name: '这么近那么远',
                            author: '容祖儿'
                        },
                        {
                            num: 3,
                            name: '旧好',
                            author: '关楚耀'
                        },
                        {
                            num: 4,
                            name: '罗生门',
                            author: '谢安琪/麦浚龙'
                        }
                    ]
                },
                {
                    type: '热歌',
                    list: [
                        {
                            num: 1,
                            name: '体面',
                            author: '于文文'
                        },
                        {
                            num: 2,
                            name: '想你',
                            author: '吴亦凡/赵丽颖'
                        },
                        {
                            num: 3,
                            name: '远走高飞',
                            author: '金志文'
                        },
                        {
                            num: 4,
                            name: '万里挑一',
                            author: '孙子涵'
                        }
                    ]
                },
                {
                    type: '新歌',
                    list: [
                        {
                            num: 1,
                            name: '说散就散',
                            author: '袁娅维'
                        },
                        {
                            num: 2,
                            name: '这么近那么远',
                            author: '容祖儿'
                        },
                        {
                            num: 3,
                            name: '忘了你忘了我',
                            author: '林俊杰'
                        },
                        {
                            num: 4,
                            name: '罗生门',
                            author: '谢安琪/麦浚龙'
                        }
                    ]
                },
                {
                    type: '欧美',
                    list: [
                        {
                            num: 1,
                            name: 'This Is Me',
                            author: 'Kesha'
                        },
                        {
                            num: 2,
                            name: 'How Long',
                            author: 'Charlie Puth'
                        },
                        {
                            num: 3,
                            name: 'Thunder',
                            author: 'imageine dragons/k'
                        },
                        {
                            num: 4,
                            name: 'all falls down',
                            author: 'alan walker'
                        }
                    ]
                },
                {
                    type: '韩国',
                    list: [
                        {
                            num: 1,
                            name: 'Lip & Hip',
                            author: '현아 (泫雅)'
                        },
                        {
                            num: 2,
                            name: 'Delusion',
                            author: '엄정화 (严正花)/이효'
                        },
                        {
                            num: 3,
                            name: 'instagram',
                            author: '딘 (DEAN)'
                        },
                        {
                            num: 4,
                            name: 'Hello Hello',
                            author: '에이핑크 (Apink)'
                        }
                    ]
                }
            ]
        }
    },
    components: { rank }
}
</script>


<style lang="less">
.ranklist{
    position: relative;
    color: #333;
    width: 100%;
    background: url(../../assets/bg_detail.jpg) 50% 0 repeat-x;
    .ranklist__body{
        position: relative;
        max-width: 1300px;
        min-width: 1000px;
        margin: 0 auto;
        .ranklist__title{
            font-weight:bold;
            letter-spacing: 10px;
            text-align: center;
            padding: 4.16667% 0 2%;
        }
        .more{
            position: absolute;
            right: 10px;
            margin: -50px 50px 0;
            &:hover{
                color: #31c27c;
            }
        }
    }
    .ranklist__ul{
        position: relative;
        margin: 0 30px 0 50px;
        min-width: 900px;
        .ranklist__li{
            display: inline-block;
            width: 20%;
        }
    }
}
</style>
