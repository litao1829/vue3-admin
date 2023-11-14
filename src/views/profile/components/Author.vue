<template>
  <div class="author-container">
    <div class="header">
      <my-avatar
        image="http://8.130.48.205:9000/litao/2023/11/08/backiee-109636_20231108193455A002.jpg"
        height="60px"
        width="60px"
      >
      </my-avatar>
      <div class="header-desc">
        <h3>李涛</h3>
        <span>软件工程专业学生</span>
      </div>
    </div>
    <div class="info">Web 全栈开发工程师</div>
  </div>
</template>

<script setup>
import MyAvatar from '@/components/MyAvatar/index.vue'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;
    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }
  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
