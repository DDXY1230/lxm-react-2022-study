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