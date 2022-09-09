export default {
  install (app:any) {
    // 定义指令
    defineDirective(app)
  }
}
// 定义指令
const defineDirective = (app:any) => {
  // 图片懒加载指令 v-lazy
  app.directive('lazy', {
    mounted (el:any, binding:any) {
      // 创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          //  处理图片加载失败 error 事件
          el.onerror = () => {
            // 加载失败，设置默认图
            el.src = '默认图'
          }
          el.src = binding.value
        }
      }, {
        threshold: 0 // 到达该dom顶部与可见视图底部相切距离时加载
      })
      // 开启观察
      observe.observe(el)
    }
  })
}
