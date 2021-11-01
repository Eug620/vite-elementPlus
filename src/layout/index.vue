<template >
  <router-view v-slot="{ Component, route }">
    <transition name="slide-fade" mode="out-in">
      <keep-alive >
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup>

</script>

<style >
</style>
