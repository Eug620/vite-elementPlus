<template>
  <div class="juejin-container-header-navigation-layout">
    <el-image
      class="JueJinLogo"
      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
    ></el-image>

    <template v-for="(Navigation, idx) in NavigationOptions">
      <template v-if="idx !== NavigationOptions.length - 1">
        <el-button
          :key="Navigation"
          type="text"
          class="juejin-container-header-navigation-button"
          :class="{'juejin-container-header-navigation-button-active': activeNavigation === Navigation}"
          @click="useChangeActiveNavigation(Navigation)"
        >{{Navigation}}</el-button>
      </template>

      <template v-else>
        <el-badge value="2021" class="juejin-container-header-navigation-end">
          <el-button
            :key="Navigation"
            type="text"
            class="juejin-container-header-navigation-button"
            :class="{'juejin-container-header-navigation-button-active': activeNavigation === Navigation}"
            @click="useChangeActiveNavigation(Navigation)"
          >{{Navigation}}</el-button>
        </el-badge>
      </template>
    </template>

     <el-input
       class="navigation-search"
       v-model="searchInput"
       size="small"
       :placeholder="searchInputPlaceholder"
       @focus="useSearchFocus"
       @blur="useSearchBlur"
      >
      <template #suffix>
         <el-icon class="el-input__icon"><Search /></el-icon>
       </template>
     </el-input>

    <el-button v-if="isShowButton" size="small" class="navigation-right-button creator-center">创作者中心</el-button>
    <el-dropdown v-if="isShowButton" trigger="click" split-button type="primary" size="small" class="navigation-write-an-article">
      写文章
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>发布沸点</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useJueJinStore } from '/@/store/juejin';
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons'
const JueJinStore = useJueJinStore()
const Router = useRouter()

const useToHome = () => {
  Router.push('Home')
}

const NavigationOptions = computed(() => JueJinStore.getNavigationOptions)
const activeNavigation = ref(NavigationOptions.value[0] || '')
const useChangeActiveNavigation = (v) => {activeNavigation.value = v}

// is show right button
const isShowButton = ref(true)
// searchInput
const searchInput = ref('')
const searchInputPlaceholder = ref('探索稀土掘金')

const useSearchFocus = () => {
  searchInputPlaceholder.value = '搜索文章/小册/标签/用户'
  isShowButton.value = false
}
const useSearchBlur = () => {
  searchInputPlaceholder.value = '探索稀土掘金'
  isShowButton.value = true
}
</script>

<style lang="scss">
.JueJinLogo{
  position: absolute;
  width:116px;
  height:24px;
  transform:translateX(-100%);
  margin-right: 20px;
}
.navigation-search {
  .el-input__inner{
    border: none;
    background-color:#f4f5f5;
  }
}

.navigation-right-button {
  margin: 0 20px;
  border: none;
}
.creator-center{
  background-color: #e8f3ff;
  color: #1e80ff;
  font-size: 14px;
}
.navigation-write-an-article{
  width: 370px;
}
</style>
