<template>
    <header>
        <div class='header__main'>
            <img class='header__logo' src='http://y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1'>
            <ul class='header__mainnav'>
                <li class='header__mainnav__first'>音乐馆</li>
                <li>我的音乐</li>
                <li>客户端</li>
                <li>音乐号</li>
                <li>VIP</li>
            </ul>
            <div class='header__search'>
                <div class="header__search__main">
                    <input type="text" placeholder='梦想的声音第二季' @focus="hot = true" @blur='hot = false' ref='input'>
                    <button class='iconfont icon-sousuo' ></button>
                </div>
                <transition name='hot'>
                    <div class='header__search__hot' v-show="hot">
                        <ul>
                            <li>
                                <span class='header__search__hot__num'>1</span>
                                <span class='header__search__hot__name'>无条件</span>
                                <span class='header__search__hot__count'>8.5万</span>
                            </li>
                            <li>
                                <span class='header__search__hot__num'>1</span>
                                <span class='header__search__hot__name'>无条件</span>
                                <span class='header__search__hot__count'>8.5万</span>
                            </li>
                            <li>
                                <span class='header__search__hot__num'>1</span>
                                <span class='header__search__hot__name'>无条件</span>
                                <span class='header__search__hot__count'>8.5万</span>
                            </li>
                            <li>
                                <span class='header__search__hot__num'>1</span>
                                <span class='header__search__hot__name'>无条件</span>
                                <span class='header__search__hot__count'>8.5万</span>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div class='header__button'>
                <button class='header__login'>登录</button>
                <button class='header__vip'>开通绿钻豪华版</button>
                <button class='header__pay'>开通付费包</button>
            </div>
        </div>
        <div class='header__sub'>
            <ul class='header__subnav'>
                <li>首页</li>
                <li>歌手</li>
                <li>专辑</li>
                <li>排行榜</li>
                <li>分类歌单</li>
                <li>电台</li>
                <li>MV</li>
                <li class='header__sublast'>数字专辑</li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'header',
    data () {
        return {
            hot: false
        }
    }
}
</script>

<style lang="less">
@import url('//at.alicdn.com/t/font_bne2hp94ahh0k9.css');
header{
    position: relative;
    margin: 0 auto;
    max-width: 1300px;
    min-width: 900px;
    background-color: #fff;
    .header__main{
        position: relative;
        min-width: 900px;
        margin: 0 50px;
        height: 90px;
        border-bottom:  1px solid #f2f2f2;
        .header__logo{
            line-height: 90px;
            position: absolute;
            top: 22px;
            display: inline-block;
            cursor: pointer;
        }
        .header__mainnav{
            line-height: 90px;
            position: absolute;
            display: inline-block;
            left: 198px;
            margin: 0;
            padding: 0;
            li{
                display: inline-block;
                padding: 0 20px;
                margin-right: -5px;
                height: 90px;
                font-size: 18px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    color: #31c27c;
                }
            }
            .header__mainnav__first{
                background-color: #31c27c;
                color: #fff;
                &:hover{
                    color: #fff;
                }
            }
           
        }
        .header__search{
            position: absolute;
            right: 284px;
            .header__search__main{
                position: relative;
                display: inline-block;
                margin-top: 26px;
                padding: 0 33px 0 11px;
                width: 174px;
                height: 36px;
                border: 1px solid #c9c9c9;
                border-radius: 3px;
                background-color: #fff;
                transition: width .6s ease-out;
                input{
                    position: absolute;
                    border: 0 none;
                    height: 36px;
                    font-size: 14px;
                    transition: width .6s ease-out;
                }
                button{
                    position: absolute;
                    right: 0;
                    border: 0 none;
                    width: 35px;
                    height: 36px;
                    color: #9b9b9b;
                    background-color: #fff;
                    &:hover{
                        color: #31c27c;
                    }
                }
            }
            .header__search__hot{
                position: absolute;
                width: 218px;
                border: 1px solid #c9c9c9;
                margin-top: -5px;
                z-index: 3;
                li{
                    list-style:none;  
                    padding: 0 11px;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    background-color: #fff;
                    cursor: pointer;
                    .header__search__hot__num{
                        color: #ff4222;
                        float: left;
                        width: 18px;
                    }
                    .header__search__hot__name{
                        color: #333;
                        float: left;
                        max-width: 140px;
                        overflow: hidden;
                    }
                    .header__search__hot__count{
                        color: #999;
                        float: right;
                        font-size: 12px;
                    }
                    &:hover{
                        background-color: #31c27c;
                        span{
                            color: #fff;
                        }
                    }
                }
            }
            &:hover{
                .header__search__main{
                    width: 174px;
                    padding: 0 33px 0 11px;
                    input{
                        width: 174px;
                    }
                }
            }
            @media (max-width: 1160px) {
                .header__search__main{
                    width: 36px;
                    padding: 0;
                    input{
                        width: 0;
                    }
                }
            }
            @media (max-width: 1280px) {
                right: 189px;
            }
        }
        .header__button{
            position: absolute;
            right: 0;
            line-height: 90px;
            .header__login{
                position: relative;
                font-size: 16px;
                width: 38px;
                text-align: center;
                background-color: #fff;
                border: 0 none;
                cursor: pointer;
                &:hover{
                    color:#31c27c;
                }
            }
            .header__vip{
                height: 38px;
                margin-top: 24px;
                padding: 0 9px;
                margin-left: 15px;
                margin-right: 0;
                font-size: 13px;
                border: 1px solid #31c27c;
                border-radius: 3px;
                background-color: #31c27c;
                color: #fff;
                cursor: pointer;
                &:hover{
                    background-color:#2fb172
                }
            }
            .header__pay{
                height: 38px;
                margin-top: 24px;
                padding: 0 9px;
                margin-left: 10px;
                margin-right: 0;
                font-size: 13px;
                border-radius: 3px;
                border: 1px solid #c9c9c9;
                color: #333;
                background-color: #fff;
                cursor: pointer;
                &:hover{
                    background-color:#e0e0e0;
                }
            }
            @media (max-width: 1280px) {
                right: 5px;
                .header__pay{
                    display: none;
                }
            }
        }
    }

    .header__sub{
        margin-left: 50px;
        .header__subnav{
            margin-left: 230px;
            height: 51px;
            line-height: 51px;
            cursor: pointer;
            li{
                display: inline-block;
                margin-right: 44px;
                color: #333;
                font-size: 15px;
                &:hover{
                    color:#31c27c;
                }
            }
            .header__sublast{
                margin-right: -50px;
            }
        }
    }


    .hot-enter-active {
        transition: all .5s ease
    }
    .hot-leave-active {
        transition: all .5s ease 1s
    }
    .hot-enter, .hot-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        transform: translateY(20px);
        opacity: 0;
    }
}
</style>
