<template>
    <div>
        <div class='section__playlist__imgbox'>
            <img class='section__playlist__img' :src="item.src" alt="">
            <i class='section__playlist__mask'></i>
            <i class='section__playlist__play'></i>
        </div>
        <h4 class='section__playlist__title'>{{item.title}}</h4>
        <p class='section__playlist__sum'>{{item.sum}}</p>
    </div>
</template>

<script>
export default {
    name: 'songbox',
    props: [ 'item' ]
}
</script>

<style lang="less">
.section__playlist__imgbox{
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    &:before {
        content: " ";
        display: block;
        padding-top: 100%; /*利用padding来撑开*/
    }
    .section__playlist__img{
        position: absolute;
        top: 0; bottom: 0; right: 0; left: 0;
        width: 100%;
        transform: scale(1);
        transition: transform .75s;
    }
    .section__playlist__mask{
        position: absolute;
        top: 0; bottom: 0; right: 0; left: 0;
        width: 100%;
        opacity: 0;
        transition: all .5s;
    }
    .section__playlist__play{
        position: absolute;
        top:50%;
        left:50%;
        width: 70px;
        height: 70px;
        background-image: url('../../assets/cover_play.png');
        transform: translate(-50%,-50%) scale(0.5);
        opacity: 0;
        transition: all .75s;
    }
    &:hover {
        .section__playlist__img{
            transform: scale(1.07);
            transition: transform .75s cubic-bezier(0,1,0.75,1);
        }
        .section__playlist__mask{
            background-color: #000;
            opacity: 0.2;
            transition: all .75s;
        }
        .section__playlist__play{
            transform: translate(-50%,-50%) scale(1);
            opacity: 1;
            transition: all .75s cubic-bezier(0,1,0.75,1);
        }
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
</style>
