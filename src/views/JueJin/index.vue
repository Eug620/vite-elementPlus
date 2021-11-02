<template >
  <div class="juejin-container">
    <div class="juejin-container-header" :class="{'is-show': useIsShow}">
      <div class="juejin-container-header-navigation">
        navigation
      </div>
      <div class="juejin-container-header-classification">
        <div class="juejin-container-header-classification-layout">
          <el-button
            v-for="options in ClassificationOptions"
            :key="options"
            type="text"
            class="juejin-container-header-classification-button"
            :class="{'juejin-container-header-classification-button-active': activeClassification === options}"
            @click="useChangeActiveClassification(options)"
          >{{options}}</el-button>
        </div>
      </div>
    </div>
    <div class="juejin-container-section">
      <div class="juejin-container-section-layout">
        <el-row :gutter="20">
           <el-col :span="16">
             <el-card shadow='never' class="card-list">
                <template #header>
                  <template v-for="(type, idx) in ArticleTypes" :key="idx">
                    <el-button
                      type="text"
                      class="card-list-button"
                      :class="{'card-list-button-active': activeType === type.type}"
                      @click="useChangeActiveType(type.type)"
                    >{{type.title}}</el-button>
                    <el-divider direction="vertical" v-if="idx+1 < ArticleTypes.length"></el-divider>
                  </template>
                </template>
                <TitleItem  v-for="item in 10" :key="item"/>
              </el-card>
           </el-col>
           <el-col :span="8">
             <el-card shadow='never'>
               good
            </el-card>
           </el-col>
         </el-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { useJueJinStore } from '/@/store/juejin';
import TitleItem from '/@/views/JueJin/components/TitleItem/index.vue'
const JueJinStore = useJueJinStore()

const NavigationHeight = computed(() => JueJinStore.getNavigationHeight + 'px')
const ClassificationHeight = computed(() => JueJinStore.classificationHeight + 'px')
const TopHeight = computed(() => JueJinStore.getTopHeight + 'px')
const SumHeight = computed(() => JueJinStore.getTopHeight)

const overScroll = ref(false)

const useIsShow = computed(() => {
  return (TopOrBootom.value === 'top' && cacheTop.value > SumHeight.value) ? false :  overScroll.value
})


const TransformNavigationHeight = computed(() => '-' + JueJinStore.getNavigationHeight + 'px')

const cacheTop = ref(0)

const TopOrBootom = ref('bootom')

// scroll event
const useScrollChange = () => {
  const windowsScrollTop = window.pageYOffset;
  if (windowsScrollTop > SumHeight.value) {
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


const LayoutWidth = computed(() => JueJinStore.getLayoutWidth + 'px')
const ArticleTypes = computed(() => JueJinStore.getArticleType)
const ClassificationOptions = computed(() => JueJinStore.getClassificationOptions)
const activeType = ref('hot')
const activeClassification = ref(ClassificationOptions[0] || '')

const useChangeActiveType = (v) => {activeType.value = v}
const useChangeActiveClassification = (v) => {activeClassification.value = v}


</script>

<style lang="scss">
.juejin-container{
  padding-top: v-bind(TopHeight);
  background-color:#f4f5f5;

  .is-show {
    transform: translate(0, v-bind(TransformNavigationHeight));
  }

  &-header{
    position: fixed;
    z-index: 9;
    top: 0;
    width: 100%;
    height: v-bind(TopHeight);
    background-color: #fff;
    transition: .3s all linear;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);



    &-navigation{
      height: v-bind(NavigationHeight);
      box-sizing: border-box;
      border-bottom: 1px solid #f1f1f1;

    }
    &-classification{
      height: v-bind(ClassificationHeight);
      box-sizing: border-box;

      &-layout{
        width: v-bind(LayoutWidth);
        margin: 0 auto;
      }

      &-button {
        color: #909090;

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
      width: v-bind(LayoutWidth);
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
