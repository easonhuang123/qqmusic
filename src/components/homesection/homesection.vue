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
                <ul class='section__playlist__box' ref='list1'>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                    <li class='section__playlist__list section__playlist__list__last'>
                        <div class='section__playlist__imgbox'>
                            <img class='section__playlist__img' src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE1dqXGAzzrA72wRZiay9klJib47ciaE0a50ibA/300?n=1" alt="">
                            <i class='section__playlist__play'></i>
                        </div>
                        <h4 class='section__playlist__title'>每日新歌：权革性感音色！即将爆发传染</h4>
                        <p class='section__playlist__sum'>播放量：134.3万</p>
                    </li>
                </ul>
            </div>
            <div class='section__switch'>
                <button class='section__switch__btn'
                    :class='{section__switch__active: isSelected[0]}'
                    @click="select(0, 'list1')">
                </button>
                <button class='section__switch__btn'
                    :class='{section__switch__active: isSelected[1]}'
                    @click="select(1, 'list1')">
                </button>
            </div>
        </div>
        <transition name='recommand_show1'>
            <div class='section__slide section__slide__left' v-show="recommand_show" @click="slide(1, 'list1')">
                <i class='section__slide__left__icon'></i>
            </div>
        </transition>
        <transition name='recommand_show2'>
            <div class='section__slide section__slide__right' v-show="recommand_show" @click="slide(-1,'list1')">
                <i class='section__slide__right__icon'></i>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'homesection',
    data () {
        return {
            isSelected: [1, 0],
            recommand_show: false,
            left: -100
        }
    },
    methods: {
        select (num, list) {
            if (!this.isSelected[num]) {
                for (let i = 0; i < this.isSelected.length; i++) {
                    if (i === num) {
                        this.isSelected[i] = 1
                    } else {
                        this.isSelected[i] = 0
                    }
                }
                this.$refs[list].style.left = `${(num - 1) * 100}%`
            }
        },
        slide (mask, list) {
            if (mask === 1 && this.left > -100) {
                this.left -= 100
                this.$refs[list].style.left = `${this.left}%`
            } else if (mask === -1 && this.left < 0) {
                this.left += 100
                this.$refs[list].style.left = `${this.left}%`
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
                left: -100%;
                width: 200%;
                transition: left .6s ease-out;
                .section__playlist__list{
                    list-style: none;
                    display: inline-block;
                    width: 9.25%;
                    margin-right: .56%;
                    .section__playlist__imgbox{
                        display: inline-block;
                        margin-bottom: 15px;
                        .section__playlist__img{
                            width: 100%;
                        }  
                    }
                    .section__playlist__title{
                        font-size: 14px;
                        font-weight:normal;
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        line-height: 22px;
                        max-height: 44px;
                        cursor: pointer;
                        &:hover{
                            color: #31c27c;
                        }
                    }
                    .section__playlist__sum{
                        font-size: 14px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .section__playlist__list__last{
                    margin-right: 0;
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
