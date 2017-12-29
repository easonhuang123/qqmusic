<template>
    <div>
        <homeheader></homeheader>
        <swiper :main='recommand' @changeList='changeList'>
            <li class='section__playlist__list' v-for="(item, index) in currItems" :key="index">
                <ul>
                    <li class='section__playlist__inline_list' v-for="(i, idx) in item" :key="idx">
                        <songbox :item='i'></songbox>
                    </li>
                </ul>
            </li>
        </swiper>
        <footer></footer>
    </div>
</template>

<script>
const homeheader = () => import(/* webpackChunkName: "home" */ '@/components/homeheader')
const swiper = () => import(/* webpackChunkName: "home" */ '@/components/swiper')
const songbox = () => import(/* webpackChunkName: "home" */ '@/components/swiper/songbox')
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
            recommand_list: [
                [
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
                            title: '每日新歌：彭昱畅×孙雪宁诠释《爱刚刚好》',
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
                ],
                [
                    [
                        {
                            src: 'https://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKso8dk5YSRffuehFFODevWznztFxrV8LGnQ/300?n=1',
                            title: 'EA7丨Deep House 一场前所未有的低音盛宴 ',
                            sum: '播放量：61.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5avkFGib7dWic4icrp1WCE1vEiagvnQ6NBzehg/300?n=1',
                            title: 'Boom！老年人听了都想蹦迪的核能节奏',
                            sum: '播放量：47.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKstvvfHdkE1PD3UJ4BZPK8mKMRRHW0NfR1A/300?n=1',
                            title: '爆燃全场：轰炸各大EDM厂牌电子',
                            sum: '播放量：56.6万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/eacbTb8ummvwhVIq3q3Im4hMOFXibeynpziaAicY81r8HZNy6xXyn5aCQ/300?n=1',
                            title: '购物狂必备潮电：走路逛街拽到不行！',
                            sum: '播放量：224.4万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeufh7dpayB9HpK1DlR96TlrBZf5NGAHhbmw/300?n=1',
                            title: '空巢青年的苦涩：心就像无凑畔的孤岛 ',
                            sum: '播放量：20.7万'
                        }
                    ],
                    [
                        {
                            src: 'https://p.qpic.cn/music_cover/VhiacR5mggSiaLuvDtyVoqZktUicRknE3CxSESmxpho5r6bic7cawBLmpA/300?n=1',
                            title: '听了会上瘾：法国电子乐合集 ',
                            sum: '播放量：89.8万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/82UY3GFZFT6VRSTuDmFTH6T7NFJltc9iatIxW3gadhhiaZHz26bJA4Kw/300?n=1',
                            title: '精选百首：天才DJ-HOUSE集',
                            sum: '播放量：25.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/PiajxSqBRaELmicNq6qgdbR2gsUEMAQxrwp6CmuuAQ9quuia1o2cgXia5A/300?n=1',
                            title: '「Tiësto」DJ天王的强悍电音节奏',
                            sum: '播放量：33.4万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/trLoLK8fbplpSuhNLKWibc89DbUW3vE7ntJLjqM0bHibicDyqMhQ01iaZA/300?n=1',
                            title: '网管小姐姐包宿：50首循环震吧精选集',
                            sum: '播放量：1100.1万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/KWul6PEBRTRXtxIIqGZBSdyWapkicmbuspwgjGffoSTOZkrxJEhqbnQ/300?n=1',
                            title: '世界级DJ王国荷兰：高空中的强劲电流 ',
                            sum: '播放量：201.6万'
                        }
                    ],
                    [
                        {
                            src: 'https://p.qpic.cn/music_cover/7bIkpcpiavM08csogLbcpA2icoUQkQeAQnGjazicjjtMaOb0O0auQWsJg/300?n=1',
                            title: 'progressive house￨一起造浪解千愁 ',
                            sum: '播放量：89.8万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/vT1naPTJ8sYQQb8x2xMFWhtNjRNopdianesWPo2gTbiaKq4I4R1VpWOg/300?n=1',
                            title: '灭火器拿来！听这些拉丁电音我都着火了',
                            sum: '播放量：1.33万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/yuwWKyW2JcyQL9TjA6w7vAs7CiahEKGWiaLsdIPtJEQKbw0Rr8c9uL1g/300?n=1',
                            title: 'Psytrance 即将进入的高能迷幻世界',
                            sum: '播放量：63.6万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/Nu3oicHNpD3okPzRQ2udLmx3nlnGBhTfhAibu9BOfCrmjGOZJ1x3Q1cA/300?n=1',
                            title: '老司机专用电音 : 极速飙车快到飞起 !',
                            sum: '播放量：51.1万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/Nu3oicHNpD3okPzRQ2udLmx3nlnGBhTfhAibu9BOfCrmjGOZJ1x3Q1cA/300?n=',
                            title: '惊艳耳朵：来自女子EDM制作人的匠心之作 ',
                            sum: '播放量：23.3万'
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
                            src: 'https://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKso8dk5YSRffuehFFODevWznztFxrV8LGnQ/300?n=1',
                            title: 'EA7丨Deep House 一场前所未有的低音盛宴 ',
                            sum: '播放量：61.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/0GgOOrIBQ14wNzmVraZQ5avkFGib7dWic4icrp1WCE1vEiagvnQ6NBzehg/300?n=1',
                            title: 'Boom！老年人听了都想蹦迪的核能节奏',
                            sum: '播放量：47.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/r9Js18hQauaHlf3udYvKstvvfHdkE1PD3UJ4BZPK8mKMRRHW0NfR1A/300?n=1',
                            title: '爆燃全场：轰炸各大EDM厂牌电子',
                            sum: '播放量：56.6万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/eacbTb8ummvwhVIq3q3Im4hMOFXibeynpziaAicY81r8HZNy6xXyn5aCQ/300?n=1',
                            title: '购物狂必备潮电：走路逛街拽到不行！',
                            sum: '播放量：224.4万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeufh7dpayB9HpK1DlR96TlrBZf5NGAHhbmw/300?n=1',
                            title: '空巢青年的苦涩：心就像无凑畔的孤岛 ',
                            sum: '播放量：20.7万'
                        }
                    ],
                    [
                        {
                            src: 'https://p.qpic.cn/music_cover/VhiacR5mggSiaLuvDtyVoqZktUicRknE3CxSESmxpho5r6bic7cawBLmpA/300?n=1',
                            title: '听了会上瘾：法国电子乐合集 ',
                            sum: '播放量：89.8万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/82UY3GFZFT6VRSTuDmFTH6T7NFJltc9iatIxW3gadhhiaZHz26bJA4Kw/300?n=1',
                            title: '精选百首：天才DJ-HOUSE集',
                            sum: '播放量：25.9万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/PiajxSqBRaELmicNq6qgdbR2gsUEMAQxrwp6CmuuAQ9quuia1o2cgXia5A/300?n=1',
                            title: '「Tiësto」DJ天王的强悍电音节奏',
                            sum: '播放量：33.4万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/trLoLK8fbplpSuhNLKWibc89DbUW3vE7ntJLjqM0bHibicDyqMhQ01iaZA/300?n=1',
                            title: '网管小姐姐包宿：50首循环震吧精选集',
                            sum: '播放量：1100.1万'
                        },
                        {
                            src: 'https://p.qpic.cn/music_cover/KWul6PEBRTRXtxIIqGZBSdyWapkicmbuspwgjGffoSTOZkrxJEhqbnQ/300?n=1',
                            title: '世界级DJ王国荷兰：高空中的强劲电流 ',
                            sum: '播放量：201.6万'
                        }
                    ]
                ]
            ],
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
    components: { homeheader, swiper, songbox }
}
</script>




