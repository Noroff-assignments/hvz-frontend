import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import keycloak from "../../keycloak/keycloak";
import styles from "./Buttons.module.css";

const RegisterButton = () => {
    return (
        <Container fluid>
            <Row>
            <Col lg={1} xs={4} className={styles.colLoginSignup}>
                {!keycloak.authenticated && (
                    <Button className={styles.loginBtn} onClick={() => keycloak.register()}>
                        Register
                    </Button>
                )}
            </Col>
            </Row>
        </Container>
    );
};
export default RegisterButton;