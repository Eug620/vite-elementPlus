<template>
  <el-button
    v-for="options in classificationOptions"
    :key="options"
    type="text"
    class="juejin-container-header-classification-button"
    :class="{'juejin-container-header-classification-button-active': activeClassification === options}"
    @click="useChangeActiveClassification(options)"
  >{{options}}</el-button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useJueJinStore } from '/@/store/juejin';

const JueJinStore = useJueJinStore()
const { classificationOptions } = storeToRefs(JueJinStore)

const activeClassification = ref(classificationOptions.value[0] || '')
const useChangeActiveClassification = (v) => {activeClassification.value = v}

</script>

<style lang="scss">
</style>
