<template>
    <div>
        <headerNav></headerNav>
        <swiper :main='recommand' @changeList='changeList'>
            <li class='swiper__list' v-for="(item, index) in currItems" :key="index">
                <ul>
                    <li class='swiper__inline__list recommand__list' v-for="(i, idx) in item" :key="idx">
                        <recommand :item='i'></recommand>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='newsong' >
            <li class='swiper__list' v-for="(items, index) in newsong_list[0]" :key="index">
                <ul>
                    <li class='swiper__inline__list newsong__list' v-for="(item, idx) in items" :key="idx">
                        <newsong :item='i' v-for="(i, idx_) in item" :key="idx_"></newsong>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='awesome' >
            <li class='swiper__list' v-for="(item, index) in awesome_list[0]" :key="index">
                <ul>
                    <li class='swiper__inline__list awesome__list' v-for="(i, idx) in item" :key="idx">
                        <img :src='i.src'>
                    </li>
                </ul>
            </li>
        </swiper>
        <swiper :main='album' >
            <li class='swiper__list' v-for="(items, index) in album_list[0]" :key="index">
                <ul>
                    <li class='swiper__inline__list album__list' v-for="(item, idx) in items" :key="idx">
                        <album :item='i' v-for="(i, idx_) in item" :key="idx_"></album>
                    </li>
                </ul>
            </li>
        </swiper>
        <ranklist></ranklist>
        <footer></footer>
    </div>
</template>

<script>
import Data from '@/data/data'
import headerNav from '@/components/header'
import { swiper, newsong, recommand, album } from '@/components/swiper'
import ranklist from '@/components/ranklist'

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
    components: { headerNav, swiper, recommand, newsong, album, ranklist }
}
</script>

<style lang="less">
.swiper__list{
    position: relative;
    list-style: none;
    display: inline-block;
    width: 8%;
    .swiper__inline__list{
        position: relative;
        vertical-align:top;
        list-style: none;
        display: inline-block;
    }
    .recommand__list{
        width: 18.5%;
        margin-right:1.5%;
    }
    .newsong__list{
        width: 33.3%;
    }
    .awesome__list{
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
    .album__list{
        width: 18.5%;
        margin-right:1.5%;
    }
}
</style>
