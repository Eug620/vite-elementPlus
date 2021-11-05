<template >
  <div class="juejin-container">
    <div class="juejin-container-header" :class="{'is-show': useIsShow}">
      <div class="juejin-container-header-navigation">
        <Navigation/>
      </div>
      <div class="juejin-container-header-classification">
        <div class="juejin-container-header-classification-layout">
          <Classification/>
        </div>
      </div>
    </div>
    <div class="juejin-container-section">
      <div class="juejin-container-section-layout">
        <el-row :gutter="20">
           <el-col :span="16">
             <el-card shadow='never' class="card-list">
                <template #header>
                  <ActiveType/>
                </template>
                <TitleItem  v-for="item in 10" :key="item"/>
              </el-card>
           </el-col>
           <el-col :span="8">
            <RightViews/>
           </el-col>
         </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useJueJinStore } from '/@/store/juejin';
import TitleItem from '/@/views/JueJin/components/TitleItem/index.vue'
import ActiveType from '/@/views/JueJin/components/ActiveType/index.vue'
import RightViews from '/@/views/JueJin/components/RightViews/index.vue'
import Classification from '/@/views/JueJin/components/Classification/index.vue'
import Navigation from '/@/views/JueJin/components/Navigation/index.vue'
const JueJinStore = useJueJinStore()

const {
  getNavigationHeight,
  getClassificationHeight,
  getTopHeightSum,
  getTopHeight,
  getTransformNavigationHeight,
  getLayoutWidth
} = storeToRefs(JueJinStore)

const overScroll = ref(false)
const useIsShow = computed(() => {
  return (TopOrBootom.value === 'top' && cacheTop.value > getTopHeightSum.value) ? false :  overScroll.value
})


const cacheTop = ref(0)
const TopOrBootom = ref('bootom')

// scroll event
const useScrollChange = () => {
  const windowsScrollTop = window.pageYOffset;
  if (windowsScrollTop > getTopHeightSum.value) {
    overScroll.value = true
  } else {
    overScroll.value = false

  }
  // 上次 > 本次 ==> 上滑
  if (cacheTop.value > windowsScrollTop) {
    TopOrBootom.value = 'top'
  } else {
    TopOrBootom.value = 'bootom'
  }
  cacheTop.value = windowsScrollTop
}

// add scroll event
onMounted(() => {
  window.addEventListener('scroll', useScrollChange)
})

// remove event
onBeforeMount(() => {
  window.removeEventListener('scroll', useScrollChange)
})


// 按钮字体加粗
const ButtonFontWeight = ref(400)

</script>

<style lang="scss">
.juejin-container{
  padding-top: v-bind(getTopHeight);
  background-color:#f4f5f5;

  .is-show {
    transform: translate(0, v-bind(getTransformNavigationHeight));
  }

  &-header{
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
    height: v-bind(getTopHeight);
    background-color: #fff;
    transition: .3s all linear;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);



    &-navigation{
      height: v-bind(getNavigationHeight);
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;

      &-layout{
        width: v-bind(getLayoutWidth);
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
      }

      &-end{
        margin-right: 30px;
        .el-badge__content {
          top: 10px;
          background-color: #fff;
          color: #007fff;
        }
      }

      &-button {
        color: #909090;
        font-weight: v-bind(ButtonFontWeight);
        font-size: 16px;
        padding: 0 10px;

        &:first-of-type {
          margin-left: 20px;
        }

        &:hover {
          color: #007fff;
        }

        &-active {
          color: #007fff;
        }
      }
    }
    &-classification{
      height: v-bind(getClassificationHeight);
      box-sizing: border-box;

      &-layout{
        width: v-bind(getLayoutWidth);
        margin: 0 auto;
      }

      &-button {
        color: #909090;
        font-weight: v-bind(ButtonFontWeight);

        &:hover {
          color: #007fff;
        }

        &-active {
          color: #007fff;
        }
      }
    }
  }

  &-section{
    padding: 10px;

    &-layout{
      width: v-bind(getLayoutWidth);
      margin: 0 auto;

      .card-list {
        .el-card__header{
          padding-top: 0;
          padding-bottom:0;
        }
        .el-card__body{
          padding: 0;
        }
        &-button{
          color: #909090;
          font-weight: v-bind(ButtonFontWeight);

          &:hover {
            color: #007fff;
          }

          &-active {
            color: #007fff;
          }
        }
      }
    }

    &-article{
      height: 200px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
