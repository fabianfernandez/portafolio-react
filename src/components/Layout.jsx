import React from "react";
import { Layout as DefaultLayout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = DefaultLayout;

const ITEMS = [
  { key: 1, label: <Link to="/">Resumen</Link> },
  { key: 2, label: <Link to="/web">Desarrollo web</Link> },
  { key: 3, label: <Link to="/mobile">Desarrollo móvil</Link> },
];

export default function Layout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
          defaultSelectedKeys={["1"]}
          items={ITEMS}
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
