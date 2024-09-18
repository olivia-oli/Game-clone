import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX} from "../../assets/svgs/icon-x-filled.svg"
import { ReactComponent as XIconoutline} from "../../assets/svgs/icon-x-outlined.svg"
import { ReactComponent as OIconoutline} from "../../assets/svgs/icon-o-outlined.svg"
import { ReactComponent as IconO} from "../../assets/svgs/icon-o-filled.svg"
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { SfxContext } from "../../contexts/SfxContext";


function GameCell({ cellItem, index,isWinningCell }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const {hoverSfx , clickSfx,winSfx} =useContext(SfxContext)
  const { handleModal } = useContext(ModalContext)

  const cellClickHandler = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board)
    if(result){
      roundComplete(result);
      if (result !== "draw"){
        winSfx();
      }
      setTimeout(()=>{
        handleModal(<RoundOverModal/>)
      }, 2000)
      
    }
    
  };
  if (cellItem === "x"){
    return (
    <CellStyle isWinningCell={isWinningCell ?? false}>
      <IconX className="markedItem"  />
    </CellStyle>
    );
  } else if(cellItem === "o"){
    return (
      <CellStyle isWinningCell={isWinningCell ?? false}>
        <IconO className="markedItem"/>
      </CellStyle>
      );
  }
  return (<CellStyle onClick={cellClickHandler}onMouseEnter={() => hoverSfx()}>{game.turn === "x" ? (
  
  <XIconoutline className="outlineIcon"/> 

  ) :( 
  <OIconoutline className="outlineIcon"/>

  )}</CellStyle>);
}

export default GameCell;
