<script lang="ts" setup>
// //导入图标
// import { CoffeeCup, Apple, Drizzling, Headset } from '@element-plus/icons-vue'
// //接收参数使用defineProps关键字进行接收即可
// import { defineProps } from 'vue';
// //导入model
// import { CardModel } from '../class/CardModel';
// defineProps({
//     info: CardModel
// })

import { CoffeeCup, Apple, Drizzling, Headset } from '@element-plus/icons-vue'
import { defineProps } from 'vue';
import { CardModel } from '../class/CardModel'
defineProps({
    info: CardModel
})
</script>
<template>
    <div class="card">
        <div class="left">
            <!-- <Apple v-if="info?.Icon == 'CoffeeCup'"></Apple> -->
            <coffee-cup v-if="info?.Icon == 'CoffeeCup'" />
            <apple v-if="info?.Icon == 'Apple'" />
            <drizzling v-if="info?.Icon == 'Drizzling'" />
            <headset v-if="info?.Icon == 'Headset'" />
            <p> {{ info?.Icon }}</p>
            <!-- <el-icon :size="20">
                <Edit />
            </el-icon> -->
        </div>
        <div class="right">
            <div><span>{{ info?.Title }}</span></div>
            <div><span>{{ info?.Count }}</span></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    height: 50px;
    line-height: 25px;
}

.left {
    width: 50px;
    height: 50px;
    float: left;

    .el-icon {
        font-size: 50px;
    }
}

.right {
    width: 100px;
    height: 50px;
    float: right;
}
</style>