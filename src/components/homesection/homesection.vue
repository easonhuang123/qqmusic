<template>
  <div class='section section_bg'>
      <div class='section__body'>
          <h1 class='section__title'>歌单推荐</h1>
          <ul class='section__tab'>
              <li>为你推荐</li>
              <li>爵士</li>
              <li>KTV热歌</li>
              <li>网络歌曲</li>
              <li>劲爆DJ</li>
              <li>情歌</li>
          </ul>
          <div class='section__playlist'>
              <ul class='section__playlist__box'>
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
              </ul>
          </div>
          <div class='section__switch'></div>
      </div>
      <div class='section__slide'>
          <div class='section__slide__left'></div>
          <div class='section__slide__right'></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'homesection'
}
</script>

<style lang="less">
.section_bg{
    background: url(../../assets/bg_detail.jpg) 50% 0 repeat-x;
}
.section{
    width: 100%;
    .section__body{
        max-width: 1300px;
        min-width: 900px;
        margin: 0 50px;
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
                &:hover{
                    color: #31c27c;
                }
            }   
        }
        .section__playlist{
            position: relative;
            height: 300px;
            overflow: hidden;
            .section__playlist__box{
                position: absolute;
                width: 200%;
                min-width: 1000px;
                .section__playlist__list{
                    list-style: none;
                    display: inline-block;
                    width: 9.25%;
                    min-width: 164px;
                    margin-right: 20px;
                    .section__playlist__imgbox{
                        display: inline-block;
                        margin-bottom: 15px;
                        .section__playlist__img{
                            width: 100%;
                        }  
                    }
                    .section__playlist__title{
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
            }
        }
    }
}
</style>
