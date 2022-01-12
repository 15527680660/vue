// 定义设计稿的尺寸
const designWidth = 1920
const designHeight = 1080

const styleUtil = {
  px2vw: function (_px) {
    return (_px * 100) / designWidth + 'vw'
  },
  px2vh: function (_px) {
    return (_px * 100) / designHeight + 'vh'
  }
}
export default styleUtil
