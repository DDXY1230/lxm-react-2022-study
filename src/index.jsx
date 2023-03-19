// /* 多es6内置api做兼容处理 */
// import 'react-app-polyfill/ie9'
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'
// 暂时不用处理兼容

import React from "react";// react语法核心
import ReactDOM from "react-dom/client";// 构建html的核心
import '@/index.less'
// import DemoOne from "@/views/DemoOne";
import Dialog from "./components/Dialog";
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <>
    <Dialog title="友情提示" content="今天天气真真好!"></Dialog>
    <Dialog content="好好学习,天天向上!">
      <button>取消</button>
      <button>确定</button>
    </Dialog>
  </>
)





//---------------------------
// root.render(
//   <React.StrictMode>
//     <div>学习react</div>
//     <DemoOne x={100} title='标题'>
//       <span slot="footer">我是DemoOne的子元素2</span>
//       <span slot="header">我是DemoOne的子元素1</span>
//       <span>我是DemoOne的子元素-默认的子元素</span>
//     </DemoOne>
//     <DemoOne></DemoOne>
//   </React.StrictMode>
// );
/**
 * 1.基于babel-preset-react-app把jsx编译为React.createElement
 * 2.再把createElement
 * 3. React.Fragment拿到的是Symbol(react.fragment)
 * 
 * createElement 方法执行, 创建出virtualDOM虚拟DOM对象  也称之为jsx元素,jsx对象,reactChild对象
 */
// fetch('/jian/subscriptions/recommended_collections').then(response => {
//   return response.json()
// }).then(value=> {
//   console.log(value)
// })

// fetch('/zhi/news/latest').then(response => {
//   return response.json()
// }).then(value=> {
//   console.log(value)
// })
