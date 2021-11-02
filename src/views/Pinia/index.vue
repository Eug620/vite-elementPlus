<script setup>
import { ref, onMounted, onBeforeMount, computed } from 'vue'
import { useConfigStore } from '/@/store/config'
import { useRouter } from 'vue-router'

// state
const isShow = ref(false)
const tops = ref(0)

// store & router
const config = useConfigStore()
const Router = useRouter()

// style computed
const defaultHeaderHeight = computed(() => config.getHeaderHeight)
const domHeight = computed(()=>config.getHeaderHeight + 'px')
const transtionTop = computed(()=>'-' + config.getHeaderHeight + 'px')

// color
const _defaultColor = computed(() => config.defaultColor)
const _scrollColor = computed(() => config.scrollColor)

// scroll event
const useScrollChange = () => {
  const windowsScrollTop = window.pageYOffset;
  const scrollHeight = document.body.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  tops.value = (windowsScrollTop/(scrollHeight-clientHeight) * 100).toFixed(0)
  if (windowsScrollTop > defaultHeaderHeight.value) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}

// add scroll event
onMounted(() => {
  window.addEventListener('scroll', useScrollChange)
})

// remove event
onBeforeMount(() => {
  window.removeEventListener('scroll', useScrollChange)
})


// to home
const useToHome = () => {
  Router.push('Home')
}


</script>

<template>
  <div class="pinia-content">
    <div class="pinia-content-header-box" :class="{'is-box-shadow': isShow}">
      <div class="pinia-content-header-content" :class="{'is-hidden': isShow}">
        <div class="pinia-content-header-box-red">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-button round @click="useToHome">To Home</el-button>
            </el-col>
            <el-col :span="6">
              red
            </el-col>
            <el-col :span="6">
              {{tops}}%
            </el-col>
            <el-col :span="6">
              <el-progress :percentage="tops" />
            </el-col>
          </el-row>
        </div>
        <div class="pinia-content-header-box-green">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-button round @click="useToHome">To Home</el-button>
            </el-col>
            <el-col :span="6">
              green
            </el-col>
            <el-col :span="6">
              {{tops}}%
            </el-col>
            <el-col :span="6">
              <el-progress :percentage="tops" />
            </el-col>
          </el-row>
        </div>
      </div>

    </div>
    <div class="pinia-content-section">
      <el-row :gutter="20">
        <el-col :span="6">
        1
        </el-col>
        <el-col :span="12">
          <el-space direction="vertical"  style="width: 100%;" fill>
            <el-card v-for="i in 10" :key="i">
              <template #header>
                <div class="card-header">
                  <span>Card name</span>
                  <el-button class="button" type="text">Operation button</el-button>
                </div>
              </template>
              <div v-for="o in 4" :key="o" class="text item">
                {{ 'List item ' + o }}
              </div>
            </el-card>
          </el-space>
        </el-col>
        <el-col :span="6">
          2
        </el-col>
      </el-row>


    </div>
    <el-backtop />

  </div>

</template>

<style lang="scss" >

  .pinia-content{
    padding-top: v-bind(domHeight);

    .is-box-shadow{
      box-shadow: 0 5px 10px #ccc;
    }

    &-header-box {
      height:v-bind(domHeight);
      position: fixed;
      width: 100%;
      top: 0;
      text-align: center;
      font-size:30px;
      overflow: hidden;
      transition: .3s all linear;
      z-index:20;

      &-red{
        height:100%;
        background-color: v-bind(_defaultColor);
      }
      &-green {
        height:100%;
        background-color: v-bind(_scrollColor);
      }

      .is-hidden{
        transform: translate(0, v-bind(transtionTop));
      }
    }

    &-header-content {
      height: 100%;
      transition: .3s all linear;
    }


    &-section {
      &-box{
        height:300px;
        border: 1px solid #000;

      }
    }
  }
</style>
