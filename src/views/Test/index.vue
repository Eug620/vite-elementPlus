<template >
  <div >
    <p>
      {{TestStore}}
    </p>
    <p>
      {{getCount}}
    </p>
    <p>
      <el-button @click="TestStore.updateCount">Default</el-button>
    </p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTestStore } from '/@/store/test'
const TestStore = useTestStore()
// storeToRefs 用法
const { getCount } =  storeToRefs(TestStore)
</script>

<style lang="scss">
</style>
