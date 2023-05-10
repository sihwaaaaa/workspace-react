import React from "react";
import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아 오도록 설정하고
const CSSModule = () => {
  return (
    <div>
      <div className={cx("wrapper", "inverted")}>
        안녕하세요 저는 <span className="something">CSS Module!</span>
      </div>
    </div>
  );
};

export default CSSModule;
