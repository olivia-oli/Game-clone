import React from "react";
import { Container,Title, Subtitle,} from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";
import { useContext } from "react";


function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>Tictactoe</Title>
      <Subtitle>Play with your friends , Higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play now
      </Button>
    </Container>
  );
}

export default Home;
