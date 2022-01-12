<!--
 * @Author: your name
 * @Date: 2021-12-02 13:22:41
 * @LastEditTime: 2021-12-03 14:02:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \app\src\views\Home.vue
-->
<template>
  <div class="home" ref="home">
    <div class="left_container">
      <div class="left_top">
        <line-chart-page/>
      </div>
      <div class="left_center">
        <line-chart-page/>
      </div>
      <div class="left_bottom">
        <line-chart-page/>
      </div>
    </div>
    <div class="center_container">
      <div class="center_top">
        <Map/>
      </div>
      <div class="center_bottom">
        <bar-chart-page/>
      </div>
    </div>
    <div class="right_container">
      <div class="right_top">
        <line-chart-page/>
      </div>
      <div class="right_center">
        <line-chart-page/>
      </div>
      <div class="right_bottom">
        <line-chart-page/>
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../components/map.vue'
import BarChartPage from '@/views/BarChartPage'
// import styleUtil from '@/utils/styleUtil.js'
import LineChartPage from '@/views/LineChartPage/index'

export default {
  name: 'Home',
  components: {
    LineChartPage,
    Map,
    BarChartPage
  },
  mounted () {
    // const dom = document.createElement('div')
    // this.$refs.home.append(dom)
    // dom.style.width = styleUtil.px2vw(300)
    // dom.style.height = styleUtil.px2vw(500)
    // dom.style.background = '#ccc'
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  box-sizing: border-box;
  padding: vh(20);

  .left_container,
  .right_container {
    > div {
      min-width: 250px;
      width: vw(450);
      height: vh(330);
      background: rgb(202, 202, 202);
      border-radius: 10px;
    }

    .left_center,
    .right_center {
      margin: vh(20) 0;
    }
  }

  .center_container {
    // 需要设置一个最小宽高，否则再绘图的时候，发现宽高为0的话会引起Echarts报错
    min-width: 600px;
    width: vw(1200);
    height: vh(500);
    margin: 0 vh(20);

    .center_top {
      height: vh(680);
      background: rgb(202, 202, 202);
      border-radius: vh(10);
    }

    .center_bottom {
      height: vh(330);
      margin-top: vh(20);
      background: rgb(202, 202, 202);
      border-radius: vh(10);
    }
  }
}
</style>
