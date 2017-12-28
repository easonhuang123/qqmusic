<template>
    <div class='section section_bg' @mouseover="recommand_show=true" @mouseout="recommand_show=false">
        <div class='section__body'>
            <h1 class='section__title'>歌单推荐</h1>
            <ul class='section__tab'>
                <li style="color: #31c27c">为你推荐</li>
                <li>爵士</li>
                <li>KTV热歌</li>
                <li>网络歌曲</li>
                <li>劲爆DJ</li>
                <li>情歌</li>
            </ul>
            <div class='section__playlist'>
                <ul class='section__playlist__box' ref='list'>
                    <li class='section__playlist__list' v-for="(item, index) in items" :key="index">
                        <ul>
                            <li class='section__playlist__inline_list' v-for="(i, idx) in item" :key="idx">
                                <recommand :item='i'></recommand>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class='section__switch'>
                <button class='section__switch__btn'
                    :class='{section__switch__active: position === 0 || position === -200}'
                    @click="select(0)">
                </button>
                <button class='section__switch__btn'
                    :class='{section__switch__active: position === -100 || position === -300}'
                    @click="select(1)">
                </button>
            </div>
        </div>
        <transition name='recommand_show1'>
            <div class='section__slide section__slide__left' v-show="recommand_show" @click="slide(1)">
                <i class='section__slide__left__icon'></i>
            </div>
        </transition>
        <transition name='recommand_show2'>
            <div class='section__slide section__slide__right' v-show="recommand_show" @click="slide(-1)">
                <i class='section__slide__right__icon'></i>
            </div>
        </transition>
    </div>
</template>

<script>
import recommand from './recommand.vue'
export default {
    name: 'homesection',
    data () {
        return {
            recommand_show: false,
            // 初始定位
            position: -200,
            items: [
                [
                    {
                        src: 'https://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86ia3hEvSxmWrN94e7uozJO7S02YeToKIIYQ/300?n=1',
                        title: '你单曲循环的民谣，原来改编自外文歌 ',
                        sum: '播放量：89.8万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclTSufISZYtzTY7LUouxqjFo7nm68rC5vBA/300?n=1',
                        title: '学会这50首成语歌名，你的粤语就冇问题了',
                        sum: '播放量：11.3万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/nnRNzNd5rZaggsDwk2uSnY4PVyZ1ZwLNT1ZrGJCSNgWBfQZWsGXU6A/300?n=1',
                        title: '面试失利？听日系抒情摇滚找回自信',
                        sum: '播放量：6.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYaicwxEBpDqdd9lm7dGhlZyUZscicDW9nJKUw/300?n=1',
                        title: '期末复习：做复变函数的舒心曲',
                        sum: '播放量：59.1万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/etRVVF7aQu1fex4ZQECBHSERBDlhfv3mfPphFdIHAlDGckFLoHickqw/300?n=1',
                        title: '空巢青年的苦涩：心就像无凑畔的孤岛 ',
                        sum: '播放量：23.3万'
                    }
                ],
                [
                    
                    {
                        src: 'https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA74s5eNwicVrvkv0tgvuyP3uw/300?n=1',
                        title: '每日新歌：彭昱畅×孙雪宁诠释《爱刚刚好》 ',
                        sum: '播放量：96.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/1ZdGl7wveVA1a9fU8FWwvP4hLR5NFCZrjFJFJIT9F3pR2P7icQbDiblQ/300?n=1',
                        title: '据说这些是2017年最受好评的专辑（一）',
                        sum: '播放量：8.2万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vtgScu1rJ2j9TI2xszGYLx6PfthVdFq9Yg/300?n=1',
                        title: '古韵佳人 | 淡眉如秋水，玉肌伴轻风 ',
                        sum: '播放量：30.2万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/0XaJ7WwKJXDzVrtkNbdjrT2NSL5sdBcibgL152mIlFNCtktu2hkgqZg/300?n=1',
                        title: 'B榜评选：史上最伟大R&B歌手Top35',
                        sum: '播放量：12.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/UYaunx856XZrhEh6IpyK6qPE3mVlk2JpIKYLjQajHtgHyglWzN3iceg/300?n=1',
                        title: '剧情控 | 百首日系视觉小说BGM ',
                        sum: '播放量：10.4万'
                    }
                ],
                [
                    {
                        src: 'https://p.qpic.cn/music_cover/UROl51JnIAk9Ipxmv4b86ia3hEvSxmWrN94e7uozJO7S02YeToKIIYQ/300?n=1',
                        title: '你单曲循环的民谣，原来改编自外文歌 ',
                        sum: '播放量：89.8万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/ZxFhHIic15equyHQJ4akclTSufISZYtzTY7LUouxqjFo7nm68rC5vBA/300?n=1',
                        title: '学会这50首成语歌名，你的粤语就冇问题了',
                        sum: '播放量：11.3万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/nnRNzNd5rZaggsDwk2uSnY4PVyZ1ZwLNT1ZrGJCSNgWBfQZWsGXU6A/300?n=1',
                        title: '面试失利？听日系抒情摇滚找回自信',
                        sum: '播放量：6.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYaicwxEBpDqdd9lm7dGhlZyUZscicDW9nJKUw/300?n=1',
                        title: '期末复习：做复变函数的舒心曲',
                        sum: '播放量：59.1万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/etRVVF7aQu1fex4ZQECBHSERBDlhfv3mfPphFdIHAlDGckFLoHickqw/300?n=1',
                        title: '空巢青年的苦涩：心就像无凑畔的孤岛 ',
                        sum: '播放量：23.3万'
                    }
                ],
                [
                    
                    {
                        src: 'https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA74s5eNwicVrvkv0tgvuyP3uw/300?n=1',
                        title: '每日新歌：彭昱畅×孙雪宁诠释《爱刚刚好》 ',
                        sum: '播放量：96.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/1ZdGl7wveVA1a9fU8FWwvP4hLR5NFCZrjFJFJIT9F3pR2P7icQbDiblQ/300?n=1',
                        title: '据说这些是2017年最受好评的专辑（一）',
                        sum: '播放量：8.2万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vtgScu1rJ2j9TI2xszGYLx6PfthVdFq9Yg/300?n=1',
                        title: '古韵佳人 | 淡眉如秋水，玉肌伴轻风 ',
                        sum: '播放量：30.2万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/0XaJ7WwKJXDzVrtkNbdjrT2NSL5sdBcibgL152mIlFNCtktu2hkgqZg/300?n=1',
                        title: 'B榜评选：史上最伟大R&B歌手Top35',
                        sum: '播放量：12.6万'
                    },
                    {
                        src: 'https://p.qpic.cn/music_cover/UYaunx856XZrhEh6IpyK6qPE3mVlk2JpIKYLjQajHtgHyglWzN3iceg/300?n=1',
                        title: '剧情控 | 百首日系视觉小说BGM ',
                        sum: '播放量：10.4万'
                    }
                ]
            ]
        }
    },
    components: { recommand },
    methods: {
        // 点击下面的小点点切换
        select (num, list) {
            this.position = (num - 2) * 100
            this.$refs.list.style.transition = 'left .6s ease-out'
            this.$refs.list.style.left = `${this.position}%`
        },
        // 点击左右切换
        // mask 1:左切换 -1:右切换
        // list 目标轮播列表
        slide (mask, list) {
            this.position += mask * 100
            this.$refs.list.style.transition = 'left .6s ease-out'
            this.$refs.list.style.left = `${this.position}%`
            // 到达临界点时转换位置并改变动画效果
            if (this.position === 0 || this.position === -300) {
                this.position += mask * -1 * 200
                setTimeout(() => {
                    this.$refs.list.style.transition = 'none'
                    this.$refs.list.style.left = `${this.position}%`
                }, 600)
            }
        }
    }
}
</script>

<style lang="less">
.section_bg{
    background: url(../../assets/bg_detail.jpg) 50% 0 repeat-x;
}
.section{
    position: relative;
    color: #333;
    width: 100%;
    .section__body{
        max-width: 1300px;
        min-width: 1000px;
        margin: 0 auto;
        .section__title{
            font-weight:bold;
            letter-spacing: 10px;
            text-align: center;
            padding: 4.16667% 0 2%;
        }
        .section__tab{
            height: 50px;
            text-align: center;
            li{
                list-style: none;
                display: inline-block;
                padding: 0 24px;
                height: 40px;
                line-height: 40px;
                font-size: 15px;
                cursor: pointer;
                &:hover{
                    color: #31c27c;
                }
            }   
        }
        .section__playlist{
            position: relative;
            overflow: hidden;
            margin: 0 50px;
            min-width: 900px;
            .section__playlist__box{
                position: relative;
                width: 401.7%;
                left: -200%;
                .section__playlist__list{
                    list-style: none;
                    display: inline-block;
                    width: 24.8%;
                    .section__playlist__inline_list{
                        list-style: none;
                        display: inline-block;
                        width: 17.3%;
                        margin: 0 1.1%;
                    }
                }
            }
        }
        .section__switch{
            text-align: center;
            margin-top: 20px;
            .section__switch__btn{
                margin: 0 10px;
                width: 8px;
                height: 8px;
                border: none;
                border-radius: 8px;
                background-color: rgba(0,0,0,.1);
                cursor: pointer;
            }
        }
        .section__switch__active{
            background-color: rgba(0,0,0,.3) !important;
        }
    }
    .section__slide{
        position: absolute;
        top: 45%;
        width: 79px;
        height: 108px;
        background: rgba(0,0,0,.05);
    }
    .section__slide__left__icon{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        display: inline-block;
        width: 20px;
        height: 40px;
        background-image: url('../../assets/icon_sprite.png');
        background-position: -20px -120px;
    }
    .section__slide__right{
        right: 0;
        .section__slide__right__icon{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            display: inline-block;
            width: 20px;
            height: 40px;
            background-image: url('../../assets/icon_sprite.png');
            background-position: 0 -120px;
        }
    }

    .recommand_show1-enter-active, .recommand_show1-leave-active{
        transition: all .5s ease
    }

    .recommand_show1-enter, .recommand_show1-leave-to{
        opacity: 0;
        transform: translate(-20px);
    }

    .recommand_show2-enter-active, .recommand_show2-leave-active{
        transition: all .5s ease
    }

    .recommand_show2-enter, .recommand_show2-leave-to{
        opacity: 0;
        transform: translate(20px);
    }
}
</style>
