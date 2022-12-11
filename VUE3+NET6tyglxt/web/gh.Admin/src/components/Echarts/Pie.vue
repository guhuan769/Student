<script lang="ts" setup>
//安装过了就要使用TS导入饼图
import * as echarts from 'echarts'
//页面加载完成后加载我们的图标
//onMounted 在VUE中相当于页面加载时间
import { onMounted } from 'vue'
onMounted(async () => {
    console.log(12321);
    //获取我们的div
    var chartDom = document.getElementById('echarsMain-Pie');
    //初始化我们的图表 初始化该chartDomDIV
    var myChart = echarts.init(chartDom as  HTMLElement);
    //设置饼图的高宽
    myChart.resize({
        width: 800,
        height: 400
    });
    //属性 option
    // const option = {
    //     title:
    //     {
    //         Text:'Text',
    //         subtext:'Fake Data',
    //         left:'center'

    //     },
    //     tooltip:{trigger:'item'},
    //     legend: {
    //         orient: 'vertical',
    //         x: 'left',
    //         data: ['A', 'B', 'C', 'D', 'E']
    //     },
    //     series: [
    //         {
    //             type: 'pie',
    //             radius: ['50%', '70%'],
    //             avoidLabelOverlap: false,
    //             label: {
    //                 show: false,
    //                 position: 'center'
    //             },
    //             labelLine: {
    //                 show: false
    //             },
    //             emphasis: {
    //                 label: {
    //                     show: true,
    //                     fontSize: '30',
    //                     fontWeight: 'bold'
    //                 }
    //             },
    //             data: [
    //                 { value: 335, name: 'A' },
    //                 { value: 310, name: 'B' },
    //                 { value: 234, name: 'C' },
    //                 { value: 135, name: 'D' },
    //                 { value: 1548, name: 'E' }
    //             ]
    //         }
    //     ]
    // };
    const option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    //绘制图标
    myChart.setOption(option);
})
</script>
<!-- 页面 -->
<template>
    <div id="echarsMain-Pie">
    </div>
</template>