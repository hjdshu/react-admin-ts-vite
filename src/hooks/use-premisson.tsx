// todo这里的权限，后面是可以从接口里获取，并存到redux里
import premisson from "../config/mock-premisson";
import React from "react";

type propsType = {
  name: string;
  children: React.ReactElement;
};

const usePremission = () => {
  const Premission = (props: propsType) => {
    if (premisson.find((item) => item.name === props.name)) {
      return props.children;
    } else {
      return null;
    }
  };
  return {
    Premission: Premission,
  };
};

export default usePremission;
