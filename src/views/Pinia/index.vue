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
  <div class="content">
    <div class="header-box" >
      <div class="wtf" :class="{'is-hidden': isShow}">
        <div class="header-box-red">
          <el-button round @click="useToHome">To Home</el-button>
          red - {{tops}}%
        </div>
        <div class="header-box-green">
          <el-button round @click="useToHome">To Home</el-button>
          greed - {{tops}}%
        </div>
      </div>

    </div>
    <div class="box" v-for="item in 10" :key="item">
      123
    </div>

  </div>

</template>

<style lang="scss" >
  .content{
    padding-top: v-bind(domHeight);
  }
  .is-hidden{
    transform: translate(0, v-bind(transtionTop));
  }
  .wtf{
    height: 100%;
    transition: .3s all linear;

  }
  .box{
    height:300px;
    border: 1px solid #000;

  }
  .box:first-of-type {
    background-color:yellow;
    margin-top:v-bind(domHeight);
  }

  .header-box {
    height:v-bind(domHeight);
    position: fixed;
    width: 100%;
    top: 0;
    text-align: center;
    font-size:30px;
    overflow: hidden;
    color:#fff;

    // background: linear-gradient(to right, #000 0%,#000 100%);


    &-red{
      height:100%;
      background-color: v-bind(_defaultColor);
    }
    &-green {
      height:100%;
      background-color: v-bind(_scrollColor);
    }
  }

</style>
