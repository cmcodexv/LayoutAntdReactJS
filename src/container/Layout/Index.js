//antd
import { Layout } from "antd";
//styles
import "../../App.css";
//uirouter
import { UIView } from "@uirouter/react";
//components
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const { Content } = Layout;

const Lay = () => {
  return (
    <Layout>
      <Nav />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Navigation />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <UIView />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Lay;
