<template>
    <div class='rank'>
        <div class='rank__bg'></div>
        <div class='rank__title'>
            <h4 class='rank__top'>巅峰榜</h4>
            <h3 class='rank__type'>流行指数</h3>
        </div>
        <i class='rank__play'></i>
        <i class='rank__line'></i>
        <ul class='rank__ul'>
            <li class='rank__li'>
                <div class='rank__num'>1</div>
                <div class='rank__song'>说散就散</div>
                <div class='rank__author'>袁娅维</div>
            </li>
            <li class='rank__li'>
                <div class='rank__num'>1</div>
                <div class='rank__song'>说散就散</div>
                <div class='rank__author'>袁娅维</div>
            </li>
            <li class='rank__li'>
                <div class='rank__num'>1</div>
                <div class='rank__song'>说散就散</div>
                <div class='rank__author'>袁娅维</div>
            </li>
            <li class='rank__li'>
                <div class='rank__num'>1</div>
                <div class='rank__song'>说散就散</div>
                <div class='rank__author'>袁娅维</div>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.rank{
    position: relative;
    height: 500px;
    width: 180px;
    overflow: hidden;
    color: #fff;
    &:hover{
        .rank__bg{
            transform: scale(1.05);  
        }
        .rank__play{
            transform: translateX(-50%) scale(0.7);
            opacity: 1;
        }
    }
    .rank__bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 567px;
        background-position: 0 0;
        background-image: url('https://y.gtimg.cn/mediastyle/yqq/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205');
        transform: scale(1);
        transition: all .5s ease;
    }
    .rank__title{
        width: 200px;
        position: absolute;
        top: 1%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        .rank__top{
            font-size: 25px;
            font-weight: 100;
            margin-bottom: 0;
        }
        .rank__type{
            font-size: 26px;
            margin-top: 0;
            font-weight: 400;
            cursor: pointer;
        }
        .rank__line{
            position: absolute;
            width: 20px;
            top: 6%;
            left: 50%;
            transform: translateX(-50%);
            border-bottom: #fff 2px solid;
        }
    }
    .rank__line{
        position: absolute;
        width: 34px;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom: #fff 2px solid;
    }
    .rank__play{
        position: absolute;
        top: 23%;
        left: 50%;
        transform: translateX(-50%) scale(0.5);
        opacity: 0;
        z-index: 2;
        background: url('https://y.gtimg.cn/mediastyle/yqq/img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006');
        width: 70px;
        height: 70px;
        transition: all .5s ease;
        cursor: pointer;
    }
    .rank__ul{
        position: absolute;
        top: 36%;
        left: 20px;
        right: 20px;
        padding: 0;
        .rank__li{
            list-style: none;
            margin-bottom: 25px;
            font-size: 14px;
            .rank__num{
                position: absolute;
            }
            .rank__song{
                display: inline-block;
                margin: 0 0 8px 15px;
            }
            .rank__author{
                display: block;
                margin-left: 15px;
            }
        }
    }
}
</style>
