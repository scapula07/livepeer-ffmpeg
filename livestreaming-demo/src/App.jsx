import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CamLivepeer from './cam'


import { usePlaybackInfo } from '@livepeer/react';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
  Player
} from '@livepeer/react';


 const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "67c2eb79-4f24-42c7-9e9e-b6b9c2622ba6",
  }),
});



function App() {
  // const { data: playbackInfo } = usePlaybackInfo("d40fauyr7kmgnx1u");
  // console.log(playbackInfo,"info")
  const [streamKey,setKey]=useState()
  const [playbackId,setPlaybackId]=useState()
  // const wssUrl=`wss://docker.freetyl.io/rtmp://rtmp.livepeer.com/live/${streamKey}`
  const wssUrl=`ws://127.0.0.1:8000/${streamKey}`
  console.log(wssUrl,"wss")

  return (
   
       <LivepeerConfig client={ livepeerClient}>
      
       
   
        <div className=' w-full py-20 px-8' >
           <div className='w-full flex space-x-10'>
              <div className='w-2/5'>
                <CamLivepeer
                    url={wssUrl} 
                    streamKey={"6a17-2b5w-jg07-cmfn"} 
                    streamName={"Testing"}
                    />
                </div>

                <div className='w-2/5 '>
                <Player 
                    title={""}
                    playbackId={playbackId}
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
            <div className='w-full flex flex-col items-center py-8 space-y-4'>
                <div className='flex w-1/2 justify-center items-center space-x-10'>
                    <input 
                        className='w-full py-4 border py-1 px-5'
                        placeholder='Stream Key'
                        value={streamKey}
                        onChange={(e)=>setKey(e.target.value)}
                      />

                    <button className='bg-slate-400 rounded-lg px-8 py-2 text-slate-300'>Save</button>

                </div>
                <div className='flex w-1/2 justify-center items-center space-x-10'>
                    <input 
                        className='w-full py-4 border py-1 px-5'
                        placeholder='playback id'
                        value={playbackId}
                        onChange={(e)=>setPlaybackId(e.target.value)}
                      />

                    <button className='bg-slate-400 rounded-lg px-8 py-2 text-slate-300'>Save</button>

                </div>
               </div>

           </div>
           <div className='w-full px-8'>
                  {/* <MonitorHealth 
                      streamId={"d40fcf0b-0051-487f-bf30-d2e4aef22d49"}
                      apiKey={"68ba74d0-ae73-43b4-9fce-0494773f7ddf"}
                  /> */}


               </div>
      
        </LivepeerConfig>
  
  )
}

export default App
