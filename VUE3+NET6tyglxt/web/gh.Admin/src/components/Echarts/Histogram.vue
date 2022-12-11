<script lang="ts" setup>
//安装过了就要使用TS导入饼图
import * as echarts from 'echarts'
//页面加载完成后加载我们的图标
//onMounted 在VUE中相当于页面加载时间
import { onMounted } from 'vue'
onMounted(async () => {
    console.log(12321);
    //获取我们的div
    var chartDom = document.getElementById('echarsMain-Histogram');
    //初始化我们的图表 初始化该chartDomDIV
    var myChart = echarts.init(chartDom as  HTMLElement);
    //设置饼图的高宽
    myChart.resize({
        width: 700,
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
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    //绘制图标
    myChart.setOption(option);
})
</script>
<!-- 页面 -->
<template>
    <div id="echarsMain-Histogram">
    </div>
</template>