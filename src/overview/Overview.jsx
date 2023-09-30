import React from "react";
import { Layout } from "../components";
import { Card, Col, Image, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function Overview() {
  return (
    <Layout>
      <Card style={{ margin: 20 }}>
        <Row gutter={[40]}>
          <Col>
            <Image
              width={150}
              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBaPN38gHDV0ZuPI7hd4HjmDPt_ibKKVZ_w8azw3vDt1T2qiqFqdTz8pQ75Xjv6Op1aGQ55woftDN1Za2Q_OJHBLQaW=s1600"
              preview={false}
            />
          </Col>
          <Col span={20}>
            <Typography>
              <Title>
                Hola, soy Fabián y te doy la bienvenida a mi sitio web
              </Title>
              <Paragraph>
                El objetivo de esta pagina web es mostrar de forma práctica mis
                conocimientos adquiridos a través del estudio y mi experiencia
                como desarrollador de software. En este proyecto encontrarás
                ejemplos de prueba en donde muestro las diferentes tecnologías
                que he utilizado y una explicación asociada a cada una. Te
                invito a revisar el sitio a través de la barra de navegación
                ubicada en la parte superior.
              </Paragraph>
            </Typography>
          </Col>
        </Row>
        <Typography>
          <Title level={3}>Acerca de mi</Title>
          <Paragraph>
            Ingeniero civil en informática titulado de la Universidad Técnica
            Federico Santa María de Chile con conocimiento principalmente en el
            desarrollo software. Tengo experiencia en el uso de tecnologías
            tales como: Python, JavaScript, SQL, React, Django, React Native,
            Docker y otras. Además, he trabajado en proyectos que utilizaron
            patrones como API REST, Serverless, MVC, POO y ORM. Estoy interesado
            especialmente en el desarrollo full-stack y siempre dispuesto a
            aprender las nuevas tecnologías requeridas por la industria.
          </Paragraph>
          <Title level={3}>Experiencia</Title>
          <Title level={5}>
            Desarrollador Full-Stack | Unholster | Abril 2022 - Abril 2023
          </Title>
          Trabajo part-time remoto en el cual desempeñé el cargo de ingeniero de
          software, mis funciones fueron las de aprender y utilizar un conjunto
          de tecnologías para apoyar en el desarrollo de sistemas de distintos
          proyectos de la empresa Unholster S.A. El proyecto en el cual trabajé
          principalmente fue en el desarrollo de una aplicación web que apoyaba
          la gestión de instrucciones de pago para la empresa financiera FYNSA.
          Las tecnologías que utilicé en esta experiencia fueron las de Python,
          Javascript, React, Django, Django Rest Framework, Docker, PostgreSQL,
          Css, Postman entre otras. Algunas de mis tareas en específicas fueron:
          <ul>
            <li>
              Desarrollar vistas del software basadas en maquetas propuestas por
              el equipo UX/UI de la empresa utilizando React, JavaScript y Css.
            </li>
            <li>
              Desarrollar diferentes end-points necesarios para los completar
              los requisitos del sistema utilizando Django Rest Framework,
              Python y Postman.
            </li>
            <li>
              Conectar las vistas del front-end y con los end-points del backend
              a través de la librería de Axios.
            </li>
          </ul>
        </Typography>
        <Title level={5}>
          Desarrollador móvil | Memoria UTFSM | Marzo 2022 - Agosto 2023
        </Title>
        Desarrollo de una aplicación móvil para mi memoria de titulación de
        Ingeniería civil en Informática.
      </Card>
    </Layout>
  );
}
