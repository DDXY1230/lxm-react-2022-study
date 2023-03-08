// /* 多es6内置api做兼容处理 */
// import 'react-app-polyfill/ie9'
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'
// 暂时不用处理兼容

import React from "react";
import ReactDOM from "react-dom/client";
import '@/index.less'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>学习react</div>
  </React.StrictMode>
);
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
