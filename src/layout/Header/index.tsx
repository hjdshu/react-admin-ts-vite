import styles from "./index.module.less";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.layoutheader}>
      <div></div>
      <div className="user">
        <UserOutlined style={{ fontSize: 22, color: "#fff" }} />
      </div>
    </div>
  );
};

export default Header;
