<template>
    <div>
        <Header></Header>
        <swiper :main='recommand' @changeList='changeList'>
            <li class='swiper__list' v-for="(item, index) in currItems" :key="index">
                <ul>
                    <li class='recommand__inline__list' v-for="(i, idx) in item" :key="idx">
                        <recommand :item='i'></recommand>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='newsong' @changeList='changeList2'>
            <li class='swiper__list' v-for="(items, index) in newsong_list[0]" :key="index">
                <ul>
                    <li class='newsong__inline__list' v-for="(item, idx) in items" :key="idx">
                        <newsong :item='i' v-for="(i, idx_) in item" :key="idx_"></newsong>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='awesome' @changeList='changeList3'>
            <li class='swiper__list' v-for="(item, index) in awesome_list[0]" :key="index">
                <ul>
                    <li class='awesome__inline__list' v-for="(i, idx) in item" :key="idx">
                        <img :src='i.src'>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='album' @changeList='changeList'>
            <li class='swiper__list' v-for="(items, index) in album_list[0]" :key="index">
                <ul>
                    <li class='album__inline__list' v-for="(item, idx) in items" :key="idx">
                        <album :item='i' v-for="(i, idx_) in item" :key="idx_"></album>
                    </li>
                </ul>
            </li>
        </swiper>
        <footer></footer>
    </div>
</template>

<script>
import Data from '@/data/data'
import Header from '@/components/header'
import { swiper, newsong, recommand, album } from '@/components/swiper'

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
            awesome: {
                title: '精彩推荐',
                list: [],
                pages: [ 5 ]
            },
            album: {
                title: '新碟首发',
                list: [ '内地', '港台', '欧美', '日本', '韩国' ],
                pages: [ 6, 6, 6, 6, 6 ]
            },
            recommand_list: Data.recommand_list,
            newsong_list: Data.newsong_list,
            awesome_list: Data.awesome_list,
            album_list: Data.album_list,
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
    components: { Header, swiper, recommand, newsong, album }
}
</script>

<style lang="less">
.swiper__list{
    position: relative;
    list-style: none;
    display: inline-block;
    width: 8%;
    .recommand__inline__list{
        position: relative;
        vertical-align:top;
        list-style: none;
        display: inline-block;
        width: 18.5%;
        margin-right:1.5%;
    }
    .newsong__inline__list{
        position: relative;
        vertical-align:top;
        list-style: none;
        display: inline-block;
        width: 33.3%;
    }
    .awesome__inline__list{
        box-sizing: border-box;
        padding-right: 20px;
        display: inline-block;
        width: 50%;
        img{
            position: relative;
            display: block;
            width: 100%;
            cursor: pointer;
        }
    }
    .album__inline__list{
        position: relative;
        vertical-align: top;
        list-style: none;
        display: inline-block;
        width: 18.5%;
        margin-right:1.5%;
    }
}
</style>
