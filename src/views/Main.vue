<script setup>
import CommonAside from "@/components/commonAside.vue";
import CommonHeader from "@/components/commonHeader.vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 自定义左侧组件 -->
      <CommonAside />
      <el-container>
        <el-header class="el-header">
          <!-- 自定义头部组件 -->
          <CommonHeader />
        </el-header>
        <el-main class="right-main">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout,
.lay-container {
  height: 100%;
}
.el-header {
  background-color: #333;
}
</style>
