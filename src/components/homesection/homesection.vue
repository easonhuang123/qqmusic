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
          <div class='section__playlist'></div>
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
        margin: 0 50px;
        .section__title{
            text-align: center;
            
        }
    }
}
</style>
