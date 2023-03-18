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
  
}