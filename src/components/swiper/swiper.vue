<template>
    <div class='section section_bg' @mouseover="slide_btn_show=true" @mouseout="slide_btn_show=false">
        <div class='section__body'>
            <h1 class='section__title'>{{main.title}}</h1>
            <ul class='section__tab'>
                <li :class='{section__tab__active: list_active === index}'
                    v-for='(item, index) in main.list'
                    :key='item'
                    @click='changeList(index)'>
                    {{item}}
                </li>
            </ul>
            <div class='section__playlist'>
                <ul class='section__playlist__box' ref='list'>
                    <slot></slot>
                </ul>
            </div>
            <div class='section__switch'>
                <button class='section__switch__btn'
                    :class='{section__switch__active : position === index * -100}'
                    v-for='(item, index) in main.pages[list_active]' 
                    :key="item" 
                    v-if='index > 0 && index < main.pages[list_active] - 1'
                    @click="select(index)">
                </button>
            </div>
        </div>
        <transition name='recommand_show1'>
            <div class='section__slide section__slide__left' v-show="slide_btn_show" @click="slide(1)">
                <i class='section__slide__left__icon'></i>
            </div>
        </transition>
        <transition name='recommand_show2'>
            <div class='section__slide section__slide__right' v-show="slide_btn_show" @click="slide(-1)">
                <i class='section__slide__right__icon'></i>
            </div>
        </transition>
    </div>
</template>

<script>
import songbox from './songbox.vue'
export default {
    name: 'swiper',
    data () {
        return {
            list_active: 0,
            slide_btn_show: false,
            // 初始定位
            position: -100
        }
    },
    props: [ 'main' ],
    components: { songbox },
    mounted () {
        console.log(this.main)
    },
    methods: {
        // 点击下面的小点点切换
        select (index) {
            this.position = index * -1 * 100
            this.$refs.list.style.transition = 'left .6s ease-out'
            this.$refs.list.style.left = `${this.position}%`
        },
        // 点击左右切换
        // mask 1:左切换 -1:右切换
        slide (mask) {
            this.position += mask * 100
            this.$refs.list.style.transition = 'left .6s ease-out'
            this.$refs.list.style.left = `${this.position}%`
            // 到达临界点时转换位置并改变动画效果
            if (this.position === 0 || this.position === (this.main.pages[this.list_active] - 1) * -1 * 100) {
                this.position += mask * -1 * (this.main.pages[this.list_active] - 2) * 100
                setTimeout(() => {
                    this.$refs.list.style.transition = 'none'
                    this.$refs.list.style.left = `${this.position}%`
                }, 600)
            }
        },
        changeList (index) {
            this.list_active = index
            this.$emit('changeList', index)
            this.position = -100
            this.$refs.list.style.transition = 'none'
            this.$refs.list.style.left = `${this.position}%`
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
            .section__tab__active{
                color: #31c27c;
            }
        }
        .section__playlist{
            position: relative;
            overflow: hidden;
            margin: 0 50px;
            min-width: 900px;
            .section__playlist__box{
                position: relative;
                width: 1250%;
                left: -100%;
                margin-left: 11px;
                .section__playlist__list{
                    position: relative;
                    list-style: none;
                    display: inline-block;
                    width: 8%;
                    .section__playlist__inline_list{
                        position: relative;
                        vertical-align:top;
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
            margin: 20px 0;
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
        transition: all .3s ;
        cursor: pointer;
        &:hover{
            background: rgba(0,0,0,.1);
        }
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
