import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import {
  createMessage,
  deleteMessage,
  editMessage,
  getMessages,
} from "../api/messages";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Web() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formMode, setFormMode] = useState(null);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
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
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined onClick={() => onShowMessage(record)} />
          <EditOutlined onClick={() => onEditMessage(record)} />
          <DeleteOutlined onClick={() => onDeleteMessage(record)} />
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getMessages()
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [loading]);

  const onSaveMessage = () => {
    const data = form.getFieldsValue();
    createMessage(data)
      .then(() => {
        messageApi.success("Mensaje creado");
        setLoading(!loading);
      })
      .catch(() => messageApi.error("Ha ocurrido un error con el servidor"));
    setIsOpen(false);
  };

  const onSaveEditMessage = () => {
    const data = form.getFieldsValue();
    editMessage(data.id, data)
      .then(() => {
        messageApi.success("Mensaje editado");
        setLoading(!loading);
      })
      .catch(() => messageApi.error("Ha ocurrido un error con el servidor"));
    setIsOpen(false);
  };

  const onDeleteMessage = (record) => {
    deleteMessage(record.id)
      .then(() => {
        messageApi.success("Mensaje eliminado");
        setLoading(!loading);
      })
      .catch(() => messageApi.error("Ha ocurrido un error con el servidor"));
  };

  const onShowMessage = (record) => {
    setIsOpen(true);
    form.setFieldsValue(record);
    setFormMode(null);
  };

  const onEditMessage = (record) => {
    setIsOpen(true);
    form.setFieldsValue(record);
    setFormMode("edit");
  };

  const onCreateMessage = () => {
    setIsOpen(true);
    form.resetFields();
    setFormMode("create");
  };

  const footer = () => (
    <>
      {formMode === "create" && (
        <Button type="primary" onClick={onSaveMessage}>
          Guardar
        </Button>
      )}
      {formMode === "edit" && (
        <Button type="primary" onClick={onSaveEditMessage}>
          Editar
        </Button>
      )}
    </>
  );
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
            {contextHolder}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.id}
              />
              <Button
                type="primary"
                style={{ alignSelf: "center" }}
                onClick={onCreateMessage}
              >
                Crear Mensaje
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        title="Deja un mensaje"
        footer={footer}
      >
        <Form layout="vertical" form={form} disabled={!formMode}>
          <Form.Item label="Creador" name="sender">
            <Input />
          </Form.Item>
          <Form.Item label="Asunto" name="subject">
            <Input />
          </Form.Item>
          <Form.Item label="Mensaje" name="body">
            <Input.TextArea rows={6} />
          </Form.Item>
          <Form.Item name="id" hidden />
        </Form>
      </Modal>
    </div>
  );
}
