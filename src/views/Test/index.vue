<template >
  <div>
    <template v-if="false">
      <p>
        {{TestStore}}
      </p>
      <p>
        {{getCount}}
      </p>
      <p>
        <el-button @click="TestStore.updateCount">Default</el-button>
      </p>
    </template>
    <InterfaceLog/>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTestStore } from '/@/store/test'
import InterfaceLog from '/@/views/Test/components/InterfaceLog.vue'
const TestStore = useTestStore()
// storeToRefs 用法
const { getCount } =  storeToRefs(TestStore)

const useDemo = (p,m) => {
  const _array = []
  const _people = p
  let _money = m

  const randomNumber = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2)
  }

  for (var i = 1; i <= _people; i++) {
    if (i === _people) {
      _array.push(_money)
    } else {
      let v = randomNumber(0,_money)
      _array.push(Number(v))
      _money = Number((_money - v).toFixed(2))
    }
  }
  console.log(_array);
}
useDemo(5, 100)
</script>

<style lang="scss">
</style>
