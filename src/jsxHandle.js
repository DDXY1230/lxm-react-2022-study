
const each = function each(obj, callback) {
  if(obj === null || typeof obj !== 'object') throw new TypeError('obj is not a object')
  if(typeof callback !== 'function') throw new TypeError('callback is not a function')
  let keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    let value = obj[key]
    //每一次迭代都把回到函数执行
    callback(value, key)
  })
}

export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol('react.element'),
    key: null,
    ref: null,
    type: null,
    props: {},
  }
  let len = children.length
  virtualDOM.type = ele;
  if(props == null) {
    virtualDOM.props = {
      ...props
    }
  }
  if(len === 1) {
    virtualDOM.props.children = children[0]
  }
  if(len > 1) virtualDOM.props.children = children
  return virtualDOM
}
/**render 把虚拟dom变为真实dom */
export function render(virtualDOM, container) {
  let {type, props} = virtualDOM;
  if(typeof type === 'string') {
    let ele = document.createElement(type)
    //为标签设置相关的属性 子节点
    each(props, (value, key) => {
      //className的处理
      if(key === 'className') {
        ele.className = value
        return
      }
      if(key === 'style') {
        each(value,(val,attr) => {
          ele.style[attr] = val
        })
        return 
      }
      if(key === 'children') {
        let children = value
        if(!Array.isArray(children)){
          children = [children]
        }
        children.forEach(child => {
          // 判断子节点的类型
          // 子节点是文本节点直接插入
          // if(typeof child === 'string' || typeof child === 'number') {
            if(/^(string|number)$/.test(typeof child))
            ele.appendChild(document.createTextNode(child))
            return
          }
          // 子节点是virtualDOM需要递归
          render(child, ele)
        })
        return
      }
      ele.setAttribute(key, value)// 这样设置可以在标签上体现
    })
    // 把新增的标签增加到指定的容器中
    container.appendChild(ele)
  }
}