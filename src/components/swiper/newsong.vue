<template>
    <div class='newsong'>
        <div class='newsong__imgbox'>
            <img class='newsong__img' :src="item.src" alt="">
            <i class='newsong__mask'></i>
            <i class='newsong__play'></i>
        </div>
        <div class='newsong__info'>
            <p class='newsong__name'>{{item.name}}</p>
            <p class='newsong__author'>{{item.author}}</p>
        </div>
        <p class='newsong__time'>{{item.time}}</p>
    </div>
</template>

<script>
export default {
    name: 'newsong',
    props: [ 'item' ]
}
</script>

<style lang="less">
.newsong{
    position: relative;
    height: 86px;
    overflow: hidden;
    border-top: 1px solid #f2f2f2;
    margin: -1px 30px 13px 0;
    padding-top: 12px;
    font-size: 14px;
    .newsong__imgbox{
        position: relative;
        float: left;
        width: 86px;
        height: 86px;
        margin-right: 14px;
        overflow: hidden;
        cursor: pointer;
        &:before {
            content: " ";
            display: block;
            padding-top: 100%; /*利用padding来撑开*/
        }
        .newsong__img{
            position: absolute;
            top: 0; bottom: 0; right: 0; left: 0;
            width: 100%;
            transform: scale(1);
            transition: transform .75s;
        }
        .newsong__mask{
            position: absolute;
            top: 0; bottom: 0; right: 0; left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all .75s;
        }
        .newsong__play{
            position: absolute;
            top:50%;
            left:50%;
            width: 70px;
            height: 70px;
            background-image: url('../../assets/cover_play.png');
            transform: translate(-50%,-50%) scale(0.2);
            opacity: 0;
            transition: all .75s;
        }
        &:hover {
            .newsong__img{
                transform: scale(1.07);
                transition: transform .75s cubic-bezier(0,1,0.75,1);
            }
            .newsong__mask{
                background-color: #000;
                opacity: 0.2;
                transition: all .75s;
            }
            .newsong__play{
                transform: translate(-50%,-50%) scale(.7);
                opacity: 1;
                transition: all .75s cubic-bezier(0,1,0.75,1);
            }
        }
    }
    .newsong__info{
        padding: 21px 0 2px;
        display: inline-block;
        max-width: 50%;
        p{
            cursor: pointer;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #333;
            &:hover{
                color: #31c27c;
            }
        }
        .newsong__author{
            color: #999;
        }
    }
    .newsong__time{
        position: absolute;
        right: 0;
        bottom: 0;
        line-height: 86px;
        color: #999;
    }
}
</style>
