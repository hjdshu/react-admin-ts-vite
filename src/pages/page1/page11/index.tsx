import { Button } from "antd";
import usePremission from "../../../hooks/use-premisson";

const page11 = () => {
  const { Premission } = usePremission();

  return (
    <div>
      <div style={{ color: "#222" }}>page1的儿子page11</div>
      <div>
        下面有个按钮，有权限才显示，权限在config/mock-premission.ts里配置
      </div>
      <Premission name="login-btn">
        <Button type="primary">按钮</Button>
      </Premission>
    </div>
  );
};

export default page11;
