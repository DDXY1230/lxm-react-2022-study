import PropTypes from 'prop-types' //第三方包,用于规则校验
import React from 'react'
const DemoOne = function DemoOne(props) {
  let {children} = props
  children = React.Children.toArray(children)
  let headerSlot = children.filter(i => i.props.slot === 'header')
  let footerSlot = children.filter(i => i.props.slot === 'footer')
  let defaultSlot = children.filter(i => i.props.slot === undefined)
  return (
    <div className="demo-box">
      <p>我是demoone</p>
      页眉---{headerSlot}
      <br></br>
      {props.title}-{props.x}
      <br></br>
      默认的子元素 -- {defaultSlot}
      <br></br>
      页脚---{footerSlot}
      <hr></hr>
    </div>
  )
}
// 设置属性默认值
DemoOne.defaultProps = {
  x: 20,
  title:'默认的标题'
}
// 传值的规则校验
DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool
  ])
}
export default DemoOne