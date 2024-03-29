import { useEffect } from "react";
import LandingPageHeader from "../components/Landing/LandingPageHeader";
import LoginButton from "../components/buttons/LoginButton";
import LogoutButton from "../components/buttons/LogoutButton";
import RegisterButton from "../components/buttons/RegisterButton";
import AdminButton from "../components/buttons/AdminButton";
import GameList from "../components/GameList/GameList";
import { Container } from "react-bootstrap";
import keycloak from "../keycloak/keycloak";


const LandingPage = () => {

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${"https://e0.pxfuel.com/wallpapers/884/480/desktop-wallpaper-post-apocalypse-background-apocalypse-city.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100%",
          height: "100vh",
          backgroundColor: "rgb(255,255,255)",
                  
        }}
      >
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <AdminButton />
        <LandingPageHeader />
        <GameList />
      </Container>
    </>
  );
};
export default LandingPage;