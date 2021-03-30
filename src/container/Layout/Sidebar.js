//antd
import { Menu, Layout } from "antd";
//icons
import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
//uirouter
import { UISref } from "@uirouter/react";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item icon={<HomeOutlined />}>
          <UISref to="home">
            <a href="#">Home</a>
          </UISref>
        </Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />}>
          <UISref to="about">
            <a href="#">About</a>
          </UISref>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
