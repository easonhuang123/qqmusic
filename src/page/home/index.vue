<template>
    <div>
        <homeheader></homeheader>
        <swiper :main='recommand' @changeList='changeList'>
            <li class='recommand__list' v-for="(item, index) in currItems" :key="index">
                <ul>
                    <li class='recommand__inline__list' v-for="(i, idx) in item" :key="idx">
                        <recommand :item='i'></recommand>
                    </li>
                </ul>
            </li>
        </swiper>
         <swiper :main='newsong' @changeList='changeList2'>
            <li class='newsong__list' v-for="(items, index) in newsong_list[0]" :key="index">
                <ul>
                    <li class='newsong__inline__list' v-for="(item, idx) in items" :key="idx">
                        <newsong :item='i' v-for="(i, idx_) in item" :key="idx_"></newsong>
                    </li>
                </ul>
            </li>
        </swiper>
        <footer></footer>
    </div>
</template>

<script>
import Data from '@/data/data'
import homeheader from '@/components/homeheader'
import swiper from '@/components/swiper'
import recommand from '@/components/swiper/recommand'
import newsong from '@/components/swiper/newsong'

export default {
    name: 'Home',
    mounted () {
        this.currItems = this.recommand_list[0]
    },
    data () {
        return {
            recommand: {
                title: '歌单推荐',
                list: [ '为你推荐', '劲爆DJ', 'KTV热歌', '网络歌曲', '劲爆DJ', '情歌' ],
                pages: [ 4, 6, 6, 6, 6, 6 ]
            },
            newsong: {
                title: '新歌首发',
                list: [ '为你推荐', '内地', '港台', '欧美', '日本', '韩国' ],
                pages: [ 6, 6, 6, 6, 6, 6 ]
            },
            recommand_list: Data.recommand_list,
            newsong_list: Data.newsong_list,
            currItems: []
        }
    },
    methods: {
        fade () {
            if (document.body.clientWidth <= '1160') {
                this.$refs.input.blur()
            }
        },
        changeList (index) {
            this.currItems = this.recommand_list[index]
        }
    },
    components: { homeheader, swiper, recommand, newsong }
}
</script>

<style lang="less">
.recommand__list{
    position: relative;
    list-style: none;
    display: inline-block;
    width: 8%;
    .recommand__inline__list{
        position: relative;
        vertical-align:top;
        list-style: none;
        display: inline-block;
        width: 17.3%;
        margin: 0 1.1%;
    }
}
.newsong__list{
    position: relative;
    list-style: none;
    display: inline-block;
    width: 8%;
    .newsong__inline__list{
        position: relative;
        vertical-align:top;
        list-style: none;
        display: inline-block;
        width: 33.3%;
    }
}
</style>
