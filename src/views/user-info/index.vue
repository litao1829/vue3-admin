<template>
  <div class="container">
    <el-card class="print-box">
      <el-button type="primary" :loading="printLoading" v-print="printObj">打印用户信息</el-button>
    </el-card>
    <el-card>
      <div class="user-info-box" id="userInfoBox">
        <!-- 标题 -->
        <h2 class="title">用户信息</h2>

        <div class="header">
          <!-- 头部渲染表格 -->
          <el-descriptions :column="2" border>
            <el-descriptions-item label="姓名">{{ userInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ userInfo.sex }}</el-descriptions-item>
            <el-descriptions-item label="民族">{{ userInfo.nation }}</el-descriptions-item>
            <el-descriptions-item label="手机号">{{ userInfo.mobile }}</el-descriptions-item>
            <el-descriptions-item label="地址">{{ userInfo.address }}</el-descriptions-item>
            <el-descriptions-item label="入职时间">{{ userInfo.date }}</el-descriptions-item>
            <el-descriptions-item label="备注" :span="2">
              <el-tag class="remark" size="small">{{ userInfo.remark }}</el-tag>
            </el-descriptions-item>
          </el-descriptions>
          <!-- 头像渲染 -->
          <el-image class="avatar" :src="userInfo.avatar"></el-image>
        </div>
        <div class="body">
          <!-- 内容渲染表格 -->
          <el-descriptions direction="vertical" :column="1" border>
            <el-descriptions-item label="个人经历">
              <ul>
                <li v-for="(item, index) in userInfo.experience" :key="index">
                  <span>
                    {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                    ----
                    {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}</span
                  >
                  <span>{{ item.title }}</span>
                  <span>{{ item.desc }}</span>
                </li>
              </ul>
            </el-descriptions-item>
            <el-descriptions-item label="专业">
              {{ userInfo.major }}
            </el-descriptions-item>
            <el-descriptions-item label="岗位">
              {{ userInfo.post }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <!-- 尾部签名 -->
        <div class="foot">{{ userInfo.foot }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

// 打印相关
const printLoading = ref(false)

const printObj = {
  // 打印区域
  id: 'userInfoBox',
  // 打印标题
  popTitle: 'imooc-vue-element-admin',
  // 打印前
  beforeOpenCallback(vue) {
    printLoading.value = true
  },
  // 执行打印
  openCallback(vue) {
    printLoading.value = false
  }
}

// 数据相关
const userInfo = ref({
  name: '李涛',
  sex: '男',
  nation: '汉',
  mobile: '17751111829',
  address: '南京市栖霞区仙林大学城羊山北路1号',
  date: '2000-08-08',
  remark: '超级管理员',
  avatar: 'http://8.130.48.205:9000/litao/2023/11/08/backiee-109636_20231108193455A002.jpg',
  experience: [
    {
      startTime: '2018/10',
      endTime: '2019/03',
      title: '校企合作',
      desc: '智慧社区后台管理系统'
    },
    {
      startTime: '2021/10',
      endTime: '2012/03',
      title: '校企合作',
      desc: '智慧社区uni-app客户端'
    }
  ],
  major: '软件工程技术',
  post: 'Web 全栈开发',
  foot: '。。。。。'
})
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
.print-box {
  margin-bottom: 20px;
  text-align: right;
}
.user-info-box {
  width: 1024px;
  margin: 0 auto;
  .title {
    text-align: center;
    margin-bottom: 18px;
  }
  .header {
    display: flex;
    ::v-deep .el-descriptions {
      flex-grow: 1;
    }
    .avatar {
      width: 187px;
      box-sizing: border-box;
      padding: 30px 20px;
      border: 1px solid #ebeef5;
      border-left: none;
    }
    .remark {
      margin-right: 12px;
    }
  }
  .body {
    ul {
      list-style: none;
      li {
        span {
          margin-right: 62px;
        }
      }
    }
  }
  .foot {
    margin-top: 42px;
    text-align: right;
  }
}
</style>
