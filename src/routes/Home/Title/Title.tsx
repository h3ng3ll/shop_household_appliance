// import { useTranslation } from "react-i18next";

import { Children } from "react";

export default function Title(props: any) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0px",
      }}
    >
      <p style={{ fontSize: "55px", margin: "0px" }}> {props.title}</p>
      {props.children}
    </div>
  );
}
