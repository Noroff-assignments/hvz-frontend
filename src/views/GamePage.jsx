import LandingPageHeader from "../components/Landing/LandingPageHeader";
import GameLobby from "../components/GameLobby/GameLobby";
import GameInfo from "../components/Game/GameInfo";
import GameMap from "../components/Game/GameMap";
import GameChat from "../components/Game/GameChat";
import LoginForm from "../components/Login/LoginForm";
import { Container, Row, Col } from "react-bootstrap";

const GameLobbyPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} xs={12}>
            <GameInfo />
            <GameChat />
          </Col>
          <Col lg={6} xs={12}>
            <GameMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GameLobbyPage;