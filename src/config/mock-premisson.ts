import { resourceType } from "./resource";

const premisson: resourceType = [
  {
    name: "page1",
    text: "商品发布",
    path: "/page1/",
    menu_icon: "UsbOutlined",
    is_menu: true,
    is_page: false,
    is_feature: false,
  },
  {
    name: "page1-page11",
    path: "/page1/page11",
    text: "商品发布11",
    parent_name: "page1",
    is_menu: true,
    is_page: true,
    is_feature: false,
  },
  {
    name: "page1-page12",
    path: "/page1/page12",
    text: "商品发布12",
    parent_name: "page1",
    is_menu: true,
    is_page: false,
    is_feature: false,
  },
  {
    name: "page1-page12-page121",
    path: "/page1/page12/page121",
    text: "商品发布121",
    parent_name: "page1-page12",
    is_menu: true,
    is_page: false,
    is_feature: false,
  },
  {
    name: "page2",
    path: "/page2",
    text: "页面2",
    menu_icon: "MailOutlined",
    is_menu: true,
    is_page: true,
    is_feature: false,
  },
  {
    name: "singepage",
    path: "/singepage",
    text: "页面没在菜单里",
    is_menu: false,
    is_page: true,
    is_feature: false,
  },
  {
    name: "login-btn",
    text: "登录",
    is_menu: false,
    is_page: false,
    is_feature: true,
  },
];

export default premisson;
