<template >
  <div class="">
    <el-card class="box-card">
       <template #header>
         <div class="card-header">
           <span>修改Pinia页面配置</span>
           <el-button class="button" type="text" @click="useToPinia">To Pinia</el-button>
         </div>
       </template>

       <el-form ref="RefForm" :model="form" label-width="120px">
         <el-form-item label="顶部高度">
           <el-input-number v-model="form.vHeight"  @change="handleChange" />
         </el-form-item>
         <el-form-item label="顶部颜色">
           <el-color-picker v-model="form.editDefaultColor" @active-change="useDefaultColorChange"/>
         </el-form-item>
         <el-form-item label="滚动颜色">
           <el-color-picker v-model="form.editScrollColor" @active-change="useScrollColorChange"/>
         </el-form-item>
       </el-form>
     </el-card>

     <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>修改JueJin页面配置</span>
            <el-button class="button" type="text" @click="useToJueJin">To JueJin</el-button>
          </div>
        </template>

        <el-form ref="RefJueJinForm" :model="JueJinForm" label-width="120px">
          <el-form-item label="navigationHeight">
            <el-input-number v-model="JueJinForm.navigationHeight" @change="handleNavigationHeightChange" />
          </el-form-item>
          <el-form-item label="classificationHeight">
            <el-input-number v-model="JueJinForm.classificationHeight" @change="handleClassificationHeightChange" />
          </el-form-item>
          <el-form-item label="layoutWidth">
            <el-input-number v-model="JueJinForm.layoutWidth" @change="handleLayoutWidthChange" />
          </el-form-item>
        </el-form>
      </el-card>
  </div>

</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '/@/store/config'
import { useJueJinStore } from '/@/store/juejin'
import { useRouter } from 'vue-router'
const Router = useRouter()
const config = useConfigStore()
const JueJinStore = useJueJinStore()

const {
  headerHeight,
  defaultColor,
  scrollColor
} = storeToRefs(config)

const {
  navigationHeight,
  classificationHeight,
  layoutWidth
} = storeToRefs(JueJinStore)

const form = reactive({
  vHeight: headerHeight.value,
  editDefaultColor: defaultColor.value,
  editScrollColor: scrollColor.value
})



const handleChange = (value) => {
  config.updateSystemConfig({type: 'headerHeight', value})
}
const useDefaultColorChange = (value) => {
  config.updateSystemConfig({type: 'defaultColor', value})
}
const useScrollColorChange = (value) => {
  config.updateSystemConfig({type: 'scrollColor', value})
}
const useToPinia = () => {
  Router.push('Pinia')
}




const JueJinForm = reactive({
  navigationHeight: navigationHeight.value,
  classificationHeight: classificationHeight.value,
  layoutWidth: layoutWidth.value
})
const handleNavigationHeightChange = (value) => {
  JueJinStore.updateJueJinStore({type: 'navigationHeight', value})
}
const handleClassificationHeightChange = (value) => {
  JueJinStore.updateJueJinStore({type: 'classificationHeight', value})
}
const handleLayoutWidthChange = (value) => {
  JueJinStore.updateJueJinStore({type: 'layoutWidth', value})
}
const useToJueJin = () => {
  Router.push('JueJin')
}
</script>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
  margin: 20px auto;
}
</style>
