<!-- 该页面准备调用组件 -->
<template>
    <div class="cardContent">
        <!-- 这样就实现了一个调用   -->
        <el-card class="box-card" v-for="item in list" >

        <!-- 那么该组件如何传值呢 之前在CardCom 定义了一个info  -->
            <CardCom :info="item" ></CardCom>
        </el-card>
        <el-card class="left">
            <!-- 饼图 -->
            <Pie></Pie>
        </el-card>
        <el-card class="right">
            <!-- 柱状图 -->
            <Histogram></Histogram>
        </el-card>
        <el-card class="lineCard">
            <!-- 折线图 -->
            <Line></Line>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
//使用VUE的ref方法
import { ref } from 'vue'
//导入卡片组件
import CardCom from '../../components/CardCom.vue'
const list=ref([
    {
        "Title": "新增用户",
        "Icon": "CoffeeCup",
        "Count": 10291
    },
    {
        "Title": "未读消息",
        "Icon": "Apple",
        "Count": 8912
    },
    {
        "Title": "成交金额",
        "Icon": "Drizzling",
        "Count": 9280
    },
    {
        "Title": "购物总量",
        "Icon": "Headset",
        "Count": 13600
    }
])
</script>

<!-- scoped 作用域 只在当前页面生效 -->
<style lang="scss" scoped>
.cardContent {
    width: 100%;
    margin: 0px auto;

    .box-card {
        float: left;
        width: 24%;
        margin-right: 5px;
        margin-bottom: 20px;
    }

    .left,
    .right {
        float: left;
        width: 48%;
        margin-bottom: 20px;
    }

    .lineCard {
        width: 97.5%;
    }

    .right {
        margin-left: 20px;
    }

}
</style>