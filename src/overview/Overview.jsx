import React from "react";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import {
  AutonomyIcon,
  CssIcon,
  DjangoIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  ReactNativeIcon,
  SelfLearningIcon,
  TeamWorkIcon,
} from "../components/icons";
import UtfsmLogo from "../assets/images/Departamento-de-Informtica_HORIZONTAL.png";

const { Title, Paragraph } = Typography;

export default function Overview() {
  return (
    <div style={{ margin: 20 }}>
      <Row gutter={[20, 20]}>
        <Col span={8} style={{ alignItems: "stretch", display: "flex" }}>
          <Row gutter={[10, 10]}>
            <Card>
              <Image
                width={150}
                src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBaPN38gHDV0ZuPI7hd4HjmDPt_ibKKVZ_w8azw3vDt1T2qiqFqdTz8pQ75Xjv6Op1aGQ55woftDN1Za2Q_OJHBLQaW=s1600"
                preview={false}
              />
              <Typography>
                <Title level={2}>Fabián Fernández Alfaro</Title>
                <Title level={3}>Acerca de mi</Title>
                <Paragraph>
                  Ingeniero civil en informática titulado de la Universidad
                  Técnica Federico Santa María de Chile con conocimiento
                  principalmente en el desarrollo software. Tengo experiencia en
                  el uso de tecnologías tales como: Python, JavaScript, SQL,
                  React, Django, React Native, Docker y otras. Además, he
                  trabajado en proyectos que utilizaron patrones como API REST,
                  Serverless, MVC, POO y ORM. Estoy interesado especialmente en
                  el desarrollo full-stack y siempre dispuesto a aprender las
                  nuevas tecnologías requeridas por la industria.
                </Paragraph>
              </Typography>
            </Card>
            <Card
              style={{ flex: 1 }}
              title={<Title level={3}>Habilidades y Tecnologías </Title>}
            >
              <Typography>
                <Space wrap size={[20, 20]}>
                  <Space>
                    JavaScript <JavaScriptIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    Python <PythonIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    React <ReactIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    React Native
                    <ReactNativeIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    Django <DjangoIcon style={{ fontSize: 30 }} />
                  </Space>

                  <Space>
                    Git <GitIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    CSS <CssIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    HTML <HtmlIcon style={{ fontSize: 30 }} />
                  </Space>
                  <Space>
                    Autoaprendizaje <SelfLearningIcon style={{ width: 30 }} />
                  </Space>
                  <Space>
                    Trabajo en equipo <TeamWorkIcon style={{ width: 30 }} />
                  </Space>
                  <Space>
                    Autonomía <AutonomyIcon style={{ width: 30 }} />
                  </Space>
                </Space>
              </Typography>
            </Card>
          </Row>
        </Col>
        <Col span={16} style={{ alignItems: "stretch", display: "flex" }}>
          <Card
            title={<Title level={3}>Experiencia</Title>}
            bodyStyle={{ padding: "0px 20px" }}
          >
            <Typography>
              <Title level={5}>
                Desarrollador Full-Stack | Unholster | Abril 2022 - Abril 2023
              </Title>
              Trabajo part-time remoto en el cual desempeñé el cargo de
              ingeniero de software, mis funciones fueron las de aprender y
              utilizar un conjunto de tecnologías para apoyar en el desarrollo
              de sistemas de distintos proyectos de la empresa Unholster S.A. El
              proyecto en el cual trabajé principalmente fue en el desarrollo de
              una aplicación web que apoyaba la gestión de instrucciones de pago
              para una empresa financiera.
              <br />
              Algunas de mis tareas en específicas fueron:
              <ul>
                <li>
                  Desarrollar vistas del software basadas en maquetas propuestas
                  por el equipo UX/UI de la empresa utilizando React, JavaScript
                  y Css.
                </li>
                <li>
                  Desarrollar diferentes end-points necesarios para los
                  completar los requisitos del sistema utilizando Django Rest
                  Framework, Python y Postman.
                </li>
                <li>
                  Conectar las vistas del front-end y con los end-points del
                  backend a través de la librería de Axios.
                </li>
                <li>
                  Acceder y administrar los ambientes de desarrollo, qa y
                  producción para la aplicación, a tráves del uso de protocolo
                  SSH, terminal Unix y Docker.
                </li>
                <li>
                  Asistir y coordinar reuniones diarias con miembros del equipo
                  para informar avances, problemas y dudas relacionadas a las
                  tareas asignadas.
                </li>
                <li>
                  Discutir y estimar la duración de las tareas asociadas al
                  Sprint mensual con los miembros del equipo del proyecto.
                </li>
              </ul>
              Esta experiencia me permitió:
              <ul>
                <li>
                  Trabajar en equipo de manera remota para lograr desarrollar
                  una aplicación según los requisitos del cliente.
                </li>
                <li>
                  Aprender un conjunto de tecnologías que me permite desarrollar
                  mi trabajo como desarrollador Full-Stack.
                </li>
                <li>Aplicar en la práctica la metodología Scrum.</li>
              </ul>
              <Title level={5}>
                Desarrollador móvil | Memoria UTFSM | Agosto 2022 - Agosto 2023
              </Title>
              Desarrollo de una aplicación móvil Android para optar al grado de
              Ingeniero civil en Informática. El software desarrollado buscaba
              apoyar en la gestión del aprendizaje autorregulado y disminuir la
              procastinación de los estudiantes de primer año de ingeniería
              civil informática de la Universidad Técnica Federico Santa María.
              <br />
              En esta experiencia aprendí lo siguiente:
              <ul>
                <li>
                  Crear una aplicación móvil desde cero utilizando React Native
                  y Expo.
                </li>
                <li>
                  Desarrollar un sistema de navegación y ruteo utilizando React
                  Navigation.
                </li>
                <li>
                  Construir vistas utilizando conceptos básicos de React Native
                  y la librería React Native Elements.
                </li>
                <li>
                  Administrar archivos asociados a la aplicación utlizando Expo
                  SDK.
                </li>
                <li>
                  Administrar datos de la aplicación utlizando AsyncStorage.
                </li>
                <li>
                  Administrar notificaciones de la aplicación utilizando
                  Notifee.
                </li>
              </ul>
              <Title
                level={3}
                style={{
                  paddingLeft: "2px",
                }}
              >
                Estudios
              </Title>
              <div
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  marginLeft: "-20px",
                  marginRight: "-20px",
                  marginBottom: "26px",
                }}
              ></div>
              <Paragraph>
                Ingeniería civil en Informática, Universidad Técnica Federico
                Santa María | 2015-2023{" "}
                <Image src={UtfsmLogo} preview={false} width={350} />
              </Paragraph>
            </Typography>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
