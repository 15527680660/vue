/*
 * @Author: 黑色外套
 * @Date: 2021-12-3 14:35:26
 * @Description: 可共用的折线图组件
 * @FilePath: src\components\LineCahrt\defaultOption.js
 */
import { fitChartSize } from '@/utils/echartUtils.js'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
])

export default {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    textStyle: {
      fontSize: fitChartSize(12)
    }
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      fontSize: fitChartSize(12)
    },
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    top: fitChartSize(20),
    itemWidth: fitChartSize(25),
    itemHeight: fitChartSize(14),
    textStyle: {
      fontSize: fitChartSize(12)
    },
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  // 工具箱
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: fitChartSize(2),
    right: fitChartSize(15),
    bottom: fitChartSize(2),
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        fontSize: fitChartSize(12)
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        fontSize: fitChartSize(12)
      }
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgba(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgba(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgba(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgba(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgba(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    }
  ]
}
