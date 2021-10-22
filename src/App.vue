<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <el-button type="success">Success !!!</el-button>
    <el-descriptions
      title="Vertical list with border"
      direction="vertical"
      :column="4"
      border
    >
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address"
        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
        Province</el-descriptions-item
      >
    </el-descriptions>
    <el-backtop :bottom="100" :right="100">
      <el-icon size="28">
        <top />
      </el-icon>
   </el-backtop>
</template>

<style lang="scss">
.box{
  height:100px;
}
</style>
