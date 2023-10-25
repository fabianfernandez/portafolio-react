import React, { useState } from "react";
import { Layout as DefaultLayout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = DefaultLayout;

const ITEMS = [
  { key: "overview", label: <Link to="/">Resumen</Link> },
  { key: "web", label: <Link to="/web">Desarrollo web</Link> },
];

export default function Layout({ children }) {
  const [currentRoute, setCurrentRoute] = useState("overview");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onClick = (e) => {
    setCurrentRoute(e.key);
  };

  return (
    <DefaultLayout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentRoute]}
          items={ITEMS}
          onClick={onClick}
        />
      </Header>
      <Content>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Muestra de habilidades ©2023 Creada por Fabián Fernández
      </Footer>
    </DefaultLayout>
  );
}
