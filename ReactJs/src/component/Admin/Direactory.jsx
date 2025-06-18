import { Col, Container, Row } from "react-bootstrap";
import Teamadmin from "./Team";
import TeamMemeberadmin from "./TeamMembers";

function Direactoryadmin() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: '3%',
        backgroundColor: "#f5f5f5",
      }}
    >
      <Row style={{ width: "98vw" }}>

        <Col
          xs={12}
          md={{ span: 9, offset: 0 }}
          lg={{ span: 10, offset: 0 }}
          style={{
            paddingLeft: "20px",
            paddingTop: "5px",
            height: "80vh",
            margin: "auto",
          }}
        >
          <div
            className="d-flex flex-column mt-2 justify-content-start border rounded"
            style={{
              height: "100%",
              backgroundColor: "#fff",
              padding: "15px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Teamadmin />
            <TeamMemeberadmin />
            <div
              style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#fff",
                zIndex: "1000",
                borderRadius: "8px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.15)",
              }}
            >
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Direactoryadmin;
