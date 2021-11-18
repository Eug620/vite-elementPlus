<template >
  <div class="Title-container">
    <div class="Title-Item" v-for="Article in ArticleList" :key="Article.user">
      <p>
        {{ Article.user }}
        <el-divider direction="vertical"></el-divider>
        {{ Article.date }}
        <el-divider direction="vertical"></el-divider>
        {{ Article.tag_list.join(' · ') }}
      </p>
      <div class="Title-Item-title">{{ Article.title }}</div>
      <div class="Title-Item-description">{{ Article.description }}</div>
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
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  ArticleList: {
    type: Array,
    default: []
  }
})

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
