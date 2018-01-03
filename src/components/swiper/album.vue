<template>
    <div class='album'>
        <div class='album__imgbox'>
            <img class='album__img' :src="item.src" alt="">
            <i class='album__mask'></i>
            <i class='album__play'></i>
        </div>
        <h4 class='album__title'>{{item.name}}</h4>
        <p class='album__sum'>{{item.author}}</p>
    </div>
</template>

<script>
export default {
    name: 'recommand',
    props: [ 'item' ]
}
</script>

<style lang="less">
.album{
    vertical-align: top;
    margin-bottom: 20px;
}
.album__imgbox{
    cursor: pointer;
    position: relative;
    margin-bottom: 15px;
    overflow: hidden;
    &:before {
        content: " ";
        display: block;
        padding-top: 100%; /*利用padding来撑开*/
    }
    .album__img{
        position: absolute;
        top: 0; bottom: 0; right: 0; left: 0;
        width: 100%;
        transform: scale(1);
        transition: transform .75s;
    }
    .album__mask{
        position: absolute;
        top: 0; bottom: 0; right: 0; left: 0;
        width: 100%;
        opacity: 0;
        transition: all .5s;
    }
    .album__play{
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
        .album__img{
            transform: scale(1.07);
            transition: transform .75s cubic-bezier(0,1,0.75,1);
        }
        .album__mask{
            background-color: #000;
            opacity: 0.2;
            transition: all .75s;
        }
        .album__play{
            transform: translate(-50%,-50%) scale(1);
            opacity: 1;
            transition: all .75s cubic-bezier(0,1,0.75,1);
        }
    }
}
.album__title{
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
.album__sum{
    font-size: 14px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
}   
</style>
