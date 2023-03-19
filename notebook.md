1. 项目中比较干净,主要是他把配置隐藏了, 另外用react-script来封装,打包命令给予react-script处理了

2. package.json中
 "eject": "react-script eject"// 暴露打包规则
 "web-vitals": "^2.1.4"// 性能检测
 "eslintConfig": { //  对webpack中eslint词法检测的相关配置,词法检测
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead", // 不考虑ie
      "not op_mini all" // 不考虑欧朋浏览器
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }

3. react默认配置的是sass预编译语言,但是我想用less,所以我要安装less`yarn add less less-loader@8`最新版本不支持,所以用8版本.
同时也卸载sass `yarn remove sass-loader`

4. 如果想通过修改环境变量的方式修改域名和端口号,首先要安装一个插件`yarn add cross-env`

5. /* 多es6内置api做兼容处理 */ 在src/index.js入口文件中添加
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

6. 跨域代理   `yarn add http-proxy-middleware`,然后在src心间setUpProxy文件,代理配置

7. React框架采用的是MVC体系; vue框架采用的是MVVM体系;
MVC: model数据层 + view视图层 + controller控制层
MVVM: model数据层 + view视图层 + viewModel数据/视图监听层

8. jsx : javascript and xml   
xml主要是自定义的标签
html是官方定义的标签

9. 让vscode支持jsx语法的方法,提供快捷语法,vscode右下角点击选择 :javascript React

10. 只能有一个更节点, 为了避免多处很多没用的标签,可以用哪个<></>空文档标签

11. PascalCase大驼峰命名  camelCase小驼峰命名  kabab-case 横杠命名

12. jsx中循环通畅用map, 但是有时候没有数组也要循环创建n次,可以自己创建一个数组
- new Array(5) 创建有5个空元素的稀疏数组, 稀疏数组是不能直接使用数组的迭代方法, 比如forEach,map等,要变成密集数组,密集数组就是每一项都有值,哪怕没每一项都是null或0都可以,通过fill(0) fill(null)填充
- new Array(5,10) 创建一个数组,里面的元素是5 , 10 一共两个
- new Array('5') 创建一个数组,里面的的元素是5 只有一个元素

13.  `npm i prop-types-S`安装prop-types做规则校验
