
const UNREGISTERED_EVENT_TIP = '事件未注册'
const INVALID_EVENT_TIP = '无效事件'
/**
 * 发布订阅模式构造函数简化版
 */
export default class Event {
  constructor() {}
  handlers = {}

  /**
   * 绑定事件
   * @param type 事件名称
   * @param handler 事件处理函数
   */
  addEventListener(type, handler) {
    if(!this.handlers.hasOwnProperty(type)) {
      handler[type] = []
    }
    this.handlers[type].push(handler)
  }

  /**
   * 触发事件
   * @param type 事件名称
   * @param params 给处理函数的参数
   * @returns {Error}
   */
  dispatchEvent(type, ...params) {
    if(!this.handlers.hasOwnProperty(type)) {
      return new Error(UNREGISTERED_EVENT_TIP)
    }
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  /**
   * 移除事件
   * @param type 事件名称
   * @param handler? 移除的处理函数
   */
  removeEventListender(type, handler) {
    if(!this.handlers.hasOwnProperty(type)) {
      return new Error(INVALID_EVENT_TIP)
    }
    if(!handler) {
      delete this.handlers[type]
    } else {
      const ind = this.handlers[type].findIndex(el => el === handler)
      if(ind === undefined) {
        return
      }
      this.handlers[type].splice(ind, 1)
      if (this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }
}

