import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  CamLivepeer  from "@scapula/joysticklabs-livepeer-rtmp/src"


import { io } from "socket.io-client";
import { usePlaybackInfo } from '@livepeer/react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
  Player
} from '@livepeer/react';
import MonitorHealth from '@scapula/joysticklabs-livepeer-rtmp/src/monitorHealth'

 const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "67c2eb79-4f24-42c7-9e9e-b6b9c2622ba6",
  }),
});



function App() {
  // const { data: playbackInfo } = usePlaybackInfo("d40fauyr7kmgnx1u");
  // console.log(playbackInfo,"info")

  return (
   
       <LivepeerConfig client={ livepeerClient}>
      
       
   
        <div className=' w-full py-20 px-8' >
           <div className='w-full flex space-x-10'>
              <div className='w-2/5'>
                <CamLivepeer
                    url={"ws://localhost:5001"} 
                    streamKey={"1ea6-htsc-qb9x-wabv"} 
                    streamName={"Testing"}
                    />
                </div>

                <div className='w-2/5 '>
                <Player 
                    title={""}
                    playbackId={"d40fauyr7kmgnx1u"}
                    autoPlay
                    theme={{
                      borderStyles: {
                        containerBorderStyle: 'hidden',
                      },
                      colors: {
                        accent: '#00a55f',
                      },
                      space: {
                        controlsBottomMarginX: '10px',
                        controlsBottomMarginY: '5px',
                        controlsTopMarginX: '15px',
                        controlsTopMarginY: '10px',
                      },
                      radii: {
                        containerBorderRadius: '0px',
                      },
                      display:"inline"
                    }}
                
                />

          
               </div>     
      
            </div> 

           </div>
           <div className='w-full px-8'>
                  <MonitorHealth 
                      streamId={"d40fcf0b-0051-487f-bf30-d2e4aef22d49"}
                      apiKey={"68ba74d0-ae73-43b4-9fce-0494773f7ddf"}
                  />


               </div>
      
        </LivepeerConfig>
  
  )
}

export default App
