import Menus from "./Menus";
import Header from "./Header";
import React, { ReactNode } from "react";
import "./index.less";

type layoutProps = {
  hidelayout?: boolean;
  children: ReactNode;
};
const Menu = (props: layoutProps) => {
  const { hidelayout = false, children } = props;

  return (
    <div className="admin-layout">
      {!hidelayout && <Menus />}
      {!hidelayout && <Header></Header>}
      {hidelayout && <div className="no-layout-main">{children}</div>}
      {!hidelayout && <div className="main">{children}</div>}
    </div>
  );
};

export default Menu;
