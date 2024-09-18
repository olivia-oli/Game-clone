
import React, { createContext } from "react";
import useSound from "../hooks/useSound";


export const SfxContext  = createContext({});

export function SfxContextProvider({children}){
    const options = {
        volume: 0.05,
        timeout: 200
    }
    const hoverPath ="https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const clickPath ="https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
    const WinnerPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
    const completedPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";
    
    
    const hoverSfx = useSound(hoverPath , options)
    const clickSfx = useSound(clickPath , options)
    const winSfx = useSound(WinnerPath , {...options, timeout: 1000})
    const completedSfx = useSound(completedPath , {...options, timeout: 2000})
    return(
        <SfxContext.Provider value={{hoverSfx,clickSfx,winSfx,completedSfx}}>
            {children}
        </SfxContext.Provider>
    )
}
