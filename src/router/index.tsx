import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import routes, { routerAry } from "./config";
import Layout from "../layout";
import Page404 from "../pages/404";
import premisson from "../config/mock-premisson";

const filterRouter = (menus: routerAry) => {
  const defaultMenuItems = {
    path: "/",
    element: <Navigate to="/page1/page11" />,
  };
  const the404Page = {
    path: "*",
    element: <Page404></Page404>,
  };
  let createRouters = [];
  createRouters = menus.map((item) => {
    return {
      ...item,
      element: <Layout hidelayout={item.hidelayout}>{item.element}</Layout>,
    };
  });
  createRouters = createRouters.filter((item) => {
    if (premisson.find((n) => item.path == n.path)) {
      return true;
    } else {
      return false;
    }
  });
  createRouters.push(defaultMenuItems);
  createRouters.push(the404Page);
  return createRouters;
};

const router = createHashRouter(filterRouter(routes));

function Router() {
  // 这里可以接入获取用户的登录信息等，模拟路由守卫
  return <RouterProvider router={router} />;
}

export default Router;
