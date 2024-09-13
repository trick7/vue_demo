<script setup>
import { ref, getCurrentInstance, onMounted } from "vue";
import api from "@/api/api";
/**
 * 根据用户获取图片URL
 *
 * 此函数用于构建一个指向特定用户图像的URL。它接收一个表示用户的参数，
 * 并返回该用户图像的完整URL路径。图像路径是相对于当前模块的路径计算得出的，
 * 确保图像的路径是正确的，无论从哪个模块调用此函数。
 *
 * @param {string} user - 用户名，用于定位对应的用户图像文件
 * @returns {string} - 用户图像的完整URL路径
 */
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.png`, import.meta.url).href;
};

const tableData = ref([]);

const tableLabel = ref({
  name: "商品",
  todayBuy: "今日购买",
  monthBuy: "本月购买",
  totalBuy: "总购买",
});
const getTableData = async () => {
  const data = await api.getTableData();
  tableData.value = data.tableData;
};
onMounted(() => {
  getTableData();
});
</script>

<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user" />
          <div class="user-info">
            <p class="user-info-admin">Admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2024-06-30</span></p>
          <p>上次登录地点：<span>成都</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" class="user-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  overflow: hidden;
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info {
      p {
        line-height: 40px;
      }
      .user-info-p {
        color: #999;
      }
      .user-info-admin {
        font-size: 30px;
      }
    }
  }
  .login-info {
    p {
      line-height: 30px; //行高
      font-size: 14px; //字体大小
      color: #999;
      span {
        color: #666;
        margin-left: 60px;
      }
    }
  }
  .user-table {
    margin-top: 20px;
  }
}
</style>
