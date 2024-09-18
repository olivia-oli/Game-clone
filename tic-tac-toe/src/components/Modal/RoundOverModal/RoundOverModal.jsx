import React from 'react'
import {Title, Subtitle} from "../../../styles/General.styled"
import { ModalHeader, ModalBody,ModalFooter } from '../Modal.styled'
import Button from "../../Button/Button"
import { GameContext } from '../../../contexts/GameContext'
import { useContext } from 'react'
import { ModalContext } from "../../../contexts/ModalContext"
import { SfxContext, } from '../../../contexts/SfxContext'
import { useNavigate } from 'react-router-dom'

const RoundOverModal = () => {
  const { resetBoard, game, restartGame  } = useContext(GameContext)
  const { handleModal } = useContext(ModalContext)
  const {hoverSfx,  clickSfx, completedSfx} = useContext(SfxContext)
  

  const navigate =useNavigate();
  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner 
          ? `${game.roundWinner.name} wins Round` 
          : "Round draw"}
        </Title>
      </ModalHeader>
      <ModalBody>
      <Subtitle primary>Choice will be switched now.</Subtitle>
      <Subtitle primary>
        {game.player1.name} :{game.player1.score}
      </Subtitle>
      <Subtitle primary>
        {game.player2.name} : {game.player2.score}
      </Subtitle>
      </ModalBody>
      <ModalFooter>
        {" "}
      <Button 
      color="#f9c811"
      onClick={()=>{
        clickSfx()
        handleModal();
        resetBoard();  
      }}
      onMouseEnter = {()=> hoverSfx()}
      >
        Continue
      </Button>
      <Button 
      color="#8437f9"
      onMouseEnter = {()=> hoverSfx()}
      onClick ={()=>{
        completedSfx();
        restartGame();
        handleModal();
        navigate("/")
        
      }}
      >Restart
      </Button>
      </ModalFooter>
     
    </>
  )
}

export default RoundOverModal
