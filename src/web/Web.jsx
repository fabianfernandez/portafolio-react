import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table, Typography } from "antd";
import { getMessages } from "../api/messages";

const { Title, Paragraph } = Typography;

export default function Web() {
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "Creador",
      dataIndex: "sender",
    },
    {
      title: "Asunto",
      dataIndex: "subject",
    },
    {
      title: "Acciones",
      dataIndex: "actions",
    },
  ];
  useEffect(() => {
    getMessages()
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <Card>
        <Title>Conocimientos básicos</Title>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Paragraph>
              Uno de los conocimientos más utilizados en el desarrollo de
              software es la creación de un CRUD. A Continuación es posible ver
              una Tabla en la cual se pueden agregar, leer, eliminar y editar
              datos.
            </Paragraph>
          </Col>
          <Col span={12}>
            <Table
              columns={columns}
              dataSource={data}
              rowKey={(record) => record.id}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
