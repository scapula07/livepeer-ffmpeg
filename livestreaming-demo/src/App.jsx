import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CamLivepeer from "@scapula/joysticklabs-livepeer-rtmp/src/monitorHealth"
import { io } from "socket.io-client";

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
  const [count, setCount] = useState(0)

  return (
   
       <LivepeerConfig client={ livepeerClient}>
      
       
   
        <div className=' w-full' >
           <div className='w-full flex '>
                {/* <CamLivepeer
                  url={"ws://localhost:5001"} 
                  streamKey={"1ea6-htsc-qb9x-wabv"} 
                  streamName={"Testing"}
                  /> */}
                  <MonitorHealth 
                     streamId={"d40fcf0b-0051-487f-bf30-d2e4aef22d49"}
                     apiKey={"68ba74d0-ae73-43b4-9fce-0494773f7ddf"}
                  />
      
            </div> 
     
       
        </div>
          <div className='w-1/4 ' >  
           <Player 
              title={""}
              playbackId={"d40fauyr7kmgnx1u"}
              autoPlay
          
           />
         
     
          </div>
        </LivepeerConfig>
  
  )
}

export default App
