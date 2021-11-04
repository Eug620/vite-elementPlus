<template>
  <el-button
    v-for="options in ClassificationOptions"
    :key="options"
    type="text"
    class="juejin-container-header-classification-button"
    :class="{'juejin-container-header-classification-button-active': activeClassification === options}"
    @click="useChangeActiveClassification(options)"
  >{{options}}</el-button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useJueJinStore } from '/@/store/juejin';

const JueJinStore = useJueJinStore()

const ClassificationOptions = computed(() => JueJinStore.getClassificationOptions)
const activeClassification = ref(ClassificationOptions.value[0] || '')
const useChangeActiveClassification = (v) => {activeClassification.value = v}

</script>

<style lang="scss">
</style>
