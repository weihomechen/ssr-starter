
import React from 'react';

const Content = () => {
  const toHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    history.back();
  };

  return (
    <div className="error">
      <img className="img" alt="" src="https://macdn.microants.cn/app/h5/iyicaibao/assets/error.png" />
      <p className="zh fw-medium">抱歉，出错啦！</p>
      <p className="en fw-normal">Sorry, something wrong!</p>
      <div className="actions">
        {/* <div onClick={toHome}>返回首页</div>
        <div onClick={goBack}>返回上一页</div> */}
      </div>
    </div>
  );
};

export default Content;
