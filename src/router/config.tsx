import React, { lazy, Suspense } from "react";
import Page11 from "../pages/page1/page11";
import Page121 from "../pages/page1/page12/page121/";
import SingePage from "../pages/singepage";
// 路由懒加载
const Page2 = lazy(() => import("../pages/page2"));

import { Navigate } from "react-router-dom";
export type routerBaseItem = {
  path: string;
  element?: React.ReactNode | null;
  children?: [routerBaseItem];
  hidelayout?: boolean;
};
export type routerAry = Array<routerBaseItem>;

const routes: routerAry = [
  {
    path: "/page1/",
    element: <Navigate to="/page1/page11" />,
  },
  {
    path: "/page1/page11",
    element: <Page11 />,
  },
  {
    path: "/page2",
    element: (
      <Suspense>
        <Page2 />
      </Suspense>
    ),
  },
  {
    path: "/page1/page12/page121",
    element: <Page121 />,
  },
  {
    path: "/singepage",
    hidelayout: true,
    element: <SingePage />,
  },
];

export default routes;
