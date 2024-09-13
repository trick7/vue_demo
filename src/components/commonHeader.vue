<script setup>
import { ref, computed } from "vue";
import { useAllDataStore } from "@/stores";
/**
 * 根据用户信息获取图像URL
 *
 * 此函数通过接收一个用户信息参数，构建该用户对应的图像路径，并返回图像的URL
 * 它使用了URL构造函数来创建一个新的URL对象，该对象指向用户图像的位置，确保了路径的正确性
 *
 * @param {string} user - 用户信息，此处假设为用户名，用于确定图像文件名
 * @return {string} - 返回用户的图像URL
 */
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;
};

const store = useAllDataStore();
const handelCollapse = () => {
  store.state.isCollapse = !store.state.isCollapse;
};
</script>

<template>
  <div class="header">
    <div class="left-content">
      <el-button size="small" @click="handelCollapse">
        <component class="icons" is="menu" />
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getImageUrl('user')" class="user" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.icons {
  width: 20px;
  height: 20px;
}
.left-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
:deep(.bread span) {
  color: #fff !important;
  cursor: pointer !important;
}
</style>
