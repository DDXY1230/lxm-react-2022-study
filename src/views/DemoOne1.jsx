import PropTypes from 'prop-types' //第三方包,用于规则校验
import React from 'react'
const DemoOne = function DemoOne(props) {
  let {children} = props
  children = React.Children.toArray(children)
  return (
    <div className="demo-box">
      <p>我是demoone</p>
      页眉---{children[0]}
      <br></br>
      {props.title}-{props.x}
      <br></br>
      页脚---{children[1]}
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