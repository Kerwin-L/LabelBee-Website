import React from "react";
import AnnotationOperation from "@labelbee/lb-components";
import "antd/dist/antd.css";
import "@labelbee/lb-components/dist/index.css";

const imgUrl = "https://images.spot.im/v1/production/kjafqimm6nndssffmlez"; // You need to change imgUrl

const imgList = [
  {
    id: 1,
    url: imgUrl,
    result: "{}",
  },
];

const step = 1;
const stepList = [
  {
    step: 1, //  当前步骤
    dataSourceStep: 0, // 当前依赖步骤，若为原图则为 0
    tool: "rectTool", // 具体查询下方工具列表指定工具
  },
];

const App = () => {
  /**
   * 监听数据提交操作： 翻页
   * @param {IFileItem[]} data 当前提交的数据
   * @param {ESubmitType} submitType 触发 onSubmit 的方向判断
   * @param {number} imgIndex 提交结果的图片下标
   */
  const onSubmit = () => {};

  return (
    <AnnotationOperation
      headerName="Annotation Showing"
      imgList={imgList}
      step={step}
      stepList={stepList}
      onSubmit={onSubmit}
      goBack={() => {
        window.location.href = "/";
      }}
      // style={{
      //   layout: {
      //     width: "500px",
      //     height: "400px",
      //   },
      // }}
    />
  );
};

export default App;
