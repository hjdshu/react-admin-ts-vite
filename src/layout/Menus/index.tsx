import { CloudOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import Icons from "./Icons";
import resourceConfig, { resourceItemTye } from "../../config/resource";
import premisson from "../../config/mock-premisson";

type ResourceListType = resourceItemTye[];
interface MenuRourceItem extends resourceItemTye {
  children?: MenuRourceItem[];
}

type MenuItemType = {
  key: string;
  name: string;
  icon?: React.ReactNode;
  label: string;
  children?: MenuItemType[];
};
type MenuItemListType = MenuItemType[];

const App: React.FC = () => {
  const [items, setItems] = useState<MenuItemListType>([]);
  const [resource, setResource] = useState<ResourceListType>([]);
  const [openkeys, setOpenkeys] = useState<string[]>([]);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const realselect = useMemo(() => {
    return [pathname];
  }, [pathname, items]);

  const onOpenChange = (el: string[]) => {
    setOpenkeys(el);
  };

  useEffect(() => {
    const path: string[] = [];
    function distFindPath(name: string) {
      const currentSource = resource.find((item) => item.name == name);
      if (currentSource) {
        path.push(currentSource.path || "");
      }
      if (currentSource?.parent_name) {
        distFindPath(currentSource.parent_name);
      }
    }
    resource.forEach((item) => {
      if (item.path === pathname) {
        distFindPath(item.name);
      }
    });
    setOpenkeys(path);
  }, [pathname, resource]);

  const onClick: MenuProps["onClick"] = (item) => {
    navigate(item.key);
  };

  useEffect(() => {
    const itemsConfig = computedMenus(resourceConfig, premisson);
    console.log("init-menus");
    setResource(resourceConfig);
    setItems(itemsConfig);
  }, [resourceConfig, premisson]);

  return (
    <div className={styles["menus-side"]}>
      <div className={styles.logo}>
        <CloudOutlined style={{ fontSize: 24, color: "#1890FF" }} />
        &nbsp;&nbsp;&nbsp;React-Admin-Ts
      </div>
      <Menu
        mode="inline"
        selectedKeys={realselect}
        openKeys={openkeys}
        onOpenChange={onOpenChange}
        style={{ width: 207 }}
        items={items}
        onClick={onClick}
      />
    </div>
  );
};

export default App;

// 计算菜单
function computedMenus(
  resource: ResourceListType,
  premission: ResourceListType
) {
  const res: Array<MenuItemType> = [];
  let source: MenuRourceItem[] = JSON.parse(JSON.stringify(resource || {}));
  source = source.filter((n) => {
    return premission.find((m) => {
      return n.is_menu && m.name == n.name;
    });
  });

  source
    .filter((n) => n.is_menu == true)
    .forEach((item) => {
      if (!item.parent_name) {
        const resItem = {
          key: item.path || "",
          name: item.name,
          icon: <Icons name={item.menu_icon || ""}></Icons>,
          label: item.text,
          children: [],
        };
        res.push(resItem);
        distCreateMeuns(resource, resItem.name, resItem.children, resItem);
      }
    });

  function distCreateMeuns(
    resource: ResourceListType,
    parent: string,
    distRes: MenuItemType[],
    resItem: MenuItemType
  ) {
    source.forEach((item) => {
      if (item.parent_name == parent) {
        const newResItem: MenuItemType = {
          key: item.path || "",
          name: item.name,
          label: item.text,
          children: [],
        };
        if (item.menu_icon) {
          newResItem.icon = <Icons name={item.menu_icon || ""}></Icons>;
        }
        distRes.push(newResItem);
        distCreateMeuns(
          resource,
          newResItem.name,
          newResItem.children || [],
          newResItem
        );
      }
    });
    if (!distRes.length) {
      delete resItem.children;
    }
  }
  return res;
}
