<template>
  <h1 v-if="!isEmpty">没有数据</h1>

  <div v-else class="line-chart" ref="lineRef"></div>
</template>
<script>
import * as echarts from 'echarts/core'
// 监控元素大小变化
import ResizeListener from 'element-resize-detector'
import { merge } from 'lodash'
import baseOption from './defaultOption' // 默认基本配置
export default {
  name: 'LineChart',
  data: () => ({
    instanceChart: null // 图表组件实例
  }),
  mounted () {
    if (this.$refs.lineRef) {
      this.initializationChart()
      window.addEventListener('resize', this.handleWindowResize) // 监听窗口尺寸
      this.addChartResizeListener() // 对echart尺寸监听
    }
  },
  props: {
    // 业务数据
    seriesData: {
      type: Array,
      required: true,
      default: () => []
    },
    // 需要特殊定制的图表配置项
    extraOption: {
      type: Object,
      default: () => ({})
    }
  },
  // 监听业务数据的变化
  watch: {
    // 监听业务数据的变化，如果没有数据就不绘制图标，展示普通DOM元素即可
    isEmpty: {
      handler (newVal) {
        if (newVal) {
          this.$nextTick(() => {
            this.initializationChart() // 初始化图标数据
            window.addEventListener('resize', this.handleWindowResize) // 监听窗口尺寸
            this.addChartResizeListener() // 对echart尺寸监听
          })
        }
      }
    },
    // 监听业务数据的变化，更新视图
    seriesData: {
      deep: true,
      handler () {
        this.updateChartView()
      }
    },
    // 监听自定义配置项，适配字体大小
    extraOption: {
      deep: true,
      handler (newVal) {
        this.instanceChart.setOption(newVal) // 重新设置图例组件的大小
      }
    }
  },
  computed: {
    // 判断业务数据是否为空数据
    isEmpty () {
      return this.seriesData.length
    }
  },
  methods: {
    /* 01. 合并配置项数据，将默认配置项和自定以配置项和并为一个option */
    assembleDataToOption () {
      return merge(
        {},
        baseOption,
        {
          series: this.seriesData
        },
        this.extraOption
      )
    },
    // 02. 初始化图表
    initializationChart () {
      this.instanceChart = echarts.init(this.$refs.lineRef)
      const fullOption = this.assembleDataToOption() // 合并后的option
      this.instanceChart.setOption(fullOption, true)
    },
    // 03. 更新图表数据
    updateChartView () {
      if (!this.$refs.lineRef) return
      const fullOption = this.assembleDataToOption() // 合并后的option
      this.instanceChart.setOption(fullOption, true)
    },
    // 04. 对chart元素尺寸进行监听，当发生变化时同步更新echart视图
    addChartResizeListener () {
      const instance = ResizeListener({
        strategy: 'scroll',
        callOnAdd: true
      })
      instance.listenTo(this.$el, () => {
        if (!this.instanceChart) return
        this.instanceChart.resize()
      })
    },
    // 05. 当窗口缩放的时候，自动适配echart和字体
    handleWindowResize () {
      if (!this.$refs.lineRef) return
      this.instanceChart.resize()
    }
  }
}
</script>
<style scoped lang="scss">
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
