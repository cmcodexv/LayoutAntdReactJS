//antd
import { Layout, Menu, Avatar } from "antd";
//icons
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Nav = () => {
  return (
    <Header className="header">
      <span className="tituloNavbar">Brand</span>
      <Menu className="menu" theme="dark" mode="horizontal">
        <Avatar size="large" icon={<UserOutlined />} />
      </Menu>
    </Header>
  );
};

export default Nav;
