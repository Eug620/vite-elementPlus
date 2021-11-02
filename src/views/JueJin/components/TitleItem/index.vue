<template >
  <div class="Title-Item">
    <p>
      掘金酱
      <el-divider direction="vertical"></el-divider>
      50分钟前
      <el-divider direction="vertical"></el-divider>
      前端 · 后端
    </p>
    <div class="Title-Item-title">稀土掘金—福利兑换商城上新啦！</div>
    <div class="Title-Item-description">补签卡，Pico VR一体机，Switch游戏机，华为手表，机械键盘，掘金周边等超多福利等你来拿～ 还在等什么，赶快行动吧！</div>
    <div class="Title-Item-icons">
      <el-icon>
        <View />
      </el-icon>
      <el-icon>
        <chat-round />
      </el-icon>
      评论
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.Title-Item {
  padding: 20px;
  border-bottom: 1px solid #e5e6eb;
  &-title {
    margin: 10px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  &-description{
    margin: 10px 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #86909c;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  &-icons{
    vertical-align: middle;
    line-height:100%;

    .el-icon{
      margin-left: 20px;
      &:first-child{
        margin-left:0px;
      }
    }


  }

  &:hover{
    background-color: #fafafa;
  }
}
</style>
