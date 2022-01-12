import * as echarts from 'echarts/core'
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent
} from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  BarChart,
  CanvasRenderer])
export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [{
    name: 'Direct',
    type: 'bar',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Email',
    type: 'bar',
    stack: 'Ad',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Union Ads',
    type: 'bar',
    stack: 'Ad',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Video Ads',
    type: 'bar',
    stack: 'Ad',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Search Engine',
    type: 'bar',
    emphasis: {
      focus: 'series'
    },
    markLine: {
      lineStyle: {
        type: 'dashed'
      },
      data: [[{ type: 'min' }, { type: 'max' }]]
    }
  },
  {
    name: 'Baidu',
    type: 'bar',
    barWidth: 5,
    stack: 'Search Engine',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Google',
    type: 'bar',
    stack: 'Search Engine',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Bing',
    type: 'bar',
    stack: 'Search Engine',
    emphasis: {
      focus: 'series'
    }
  },
  {
    name: 'Others',
    type: 'bar',
    stack: 'Search Engine',
    emphasis: {
      focus: 'series'
    }
  }]
}
