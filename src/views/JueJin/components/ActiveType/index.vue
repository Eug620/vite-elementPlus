<template>
  <template v-for="(type, idx) in articleTypes" :key="idx">
    <el-button
      type="text"
      class="card-list-button"
      :class="{'card-list-button-active': activeType === type.type}"
      @click="useChangeActiveType(type.type)"
    >{{type.title}}</el-button>
    <el-divider direction="vertical" v-if="idx+1 < articleTypes.length"></el-divider>
  </template>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useJueJinStore } from '/@/store/juejin';

const JueJinStore = useJueJinStore()
const activeType = ref('hot')
const { articleTypes } = storeToRefs(JueJinStore)
const useChangeActiveType = (v) => {activeType.value = v}
</script>

<style lang="scss">
</style>
