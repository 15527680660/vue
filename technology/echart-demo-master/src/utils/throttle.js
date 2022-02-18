/**
 * @desc 函数节流
 * @param {*} func func 函数
 * @param {*} wait wait 延迟执行毫秒数
 * @param {*} type 1 表时间戳版，2 表定时器版
 */

export default function throttle (func, wait, type) {
  let previous = 0
  let timeout = null
  if (type === 1) {
    previous = 0
  } else if (type === 2) {
    timeout = null
  }
  return function () {
    const _this = this
    const args = arguments
    if (type === 1) {
      const now = Date.now()
      if (now - previous > wait) {
        func.apply(_this, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(_this, args)
        }, wait)
      }
    }
  }
}
