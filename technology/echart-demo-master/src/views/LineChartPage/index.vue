<template>
  <div class="chart">
    <line-cahrt :seriesData="seriesData" :extraOption="extraOption"/>
  </div>
</template>

<script>
import { fitChartSize } from '@/utils/echartUtils'
import LineCahrt from '@/components/LineCahrt/index'
// 业务数据
const seriesData = [
  { data: [140, 232, 101, 264, 90, 340, 250] },
  { data: [120, 282, 111, 234, 220, 340, 310] },
  { data: [320, 132, 201, 334, 190, 130, 220] },
  { data: [220, 402, 231, 134, 190, 230, 120] },
  { data: [220, 302, 181, 234, 210, 290, 150] }
]

export default {
  name: 'index',
  components: { LineCahrt },
  data: () => ({
    extraOption: {},
    seriesData
  }),
  created () {
    this.extraOption = this.extraEchartOption()
  },
  mounted () {
    // 在监听到窗口大小发生变化时，重新对自定义配置赋值，实现字体的适应
    window.addEventListener('resize', () => {
      this.extraOption = this.extraEchartOption()
    })
  },
  methods: {
    extraEchartOption () {
      return {
        title: {
          text: '黑色外套',
          textStyle: {
            fontSize: fitChartSize(12)
          }
        },
        tooltip: {
          textStyle: {
            fontSize: fitChartSize(12)
          }
        },
        legend: {
          top: fitChartSize(20),
          itemWidth: fitChartSize(25),
          itemHeight: fitChartSize(14),
          textStyle: {
            fontSize: fitChartSize(12)
          }
        },
        grid: {
          left: fitChartSize(2),
          right: fitChartSize(15),
          bottom: fitChartSize(2)
        },
        xAxis: [
          {
            axisLabel: {
              fontSize: fitChartSize(12)
            }
          }
        ],
        yAxis: [
          {
            axisLabel: {
              fontSize: fitChartSize(12)
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
