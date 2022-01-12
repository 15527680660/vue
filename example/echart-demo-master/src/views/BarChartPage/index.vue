<template>
  <div class="chart">
    <bar-chart :seriesData="seriesData" :extraOption="extraOption"/>
  </div>
</template>

<script>
import barChart from '@/components/BarChart'
import { fitChartSize } from '@/utils/echartUtils'
// 业务数据
const seriesData = [
  { data: [320, 332, 301, 334, 390, 330, 320] },
  { data: [120, 132, 101, 134, 90, 230, 210] },
  { data: [220, 182, 191, 234, 290, 330, 310] },
  { data: [150, 232, 201, 154, 190, 330, 410] },
  { data: [862, 1018, 964, 1026, 1679, 1600, 1570] },
  { data: [620, 732, 701, 734, 1090, 1130, 1120] },
  { data: [120, 132, 101, 134, 290, 230, 220] },
  { data: [60, 72, 71, 74, 190, 130, 110] },
  { data: [62, 82, 91, 84, 109, 110, 120] }
]
export default {
  name: 'BarChart',
  components: { barChart },
  data () {
    return { extraOption: {}, seriesData }
  },
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
        tooltip: {
          textStyle: {
            fontSize: fitChartSize(12)
          }
        },
        legend: {
          itemWidth: fitChartSize(20),
          itemHeight: fitChartSize(15),
          textStyle: {
            fontSize: fitChartSize(12),
            width: fitChartSize(12)
          }
        },
        grid: {
          left: fitChartSize(3),
          right: fitChartSize(3),
          bottom: fitChartSize(3)
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

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>
