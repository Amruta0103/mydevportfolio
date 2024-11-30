import { useState } from "react";
import "./App.css";
// import grainscreen from './assets/grainscreen.jpg';
import me from './assets/me.webp'
// import flyingComp from "./assets/galaxy.webp";
import Linkedin from "./assets/Linkedin.svg";
import Github from "./assets/Github.svg";
import Twitter from "./assets/Twitter.svg";
import courseCert from './assets/CourseraGoogleUXDesign.jpg';

function App() {
  const [tab, setTab] = useState('Home');
  return (
    <div className="App z-0 relative flex flex-col justify-between items-center w-full h-full max-h-screen text-greyBlack scroll-smooth">
      {/* { tab === 'Home' && <img src={grainscreen} className="bgImage" alt="img"/>}
      { tab === 'About' && <img src={flyingComp} className="bgImage" alt="img"/>}
      { tab === 'Works' && <img src={grainscreen} className="bgImage" alt="img"/>}
      { tab === 'Connect' && <img src={flyingComp} className="bgImage" alt="img"/>} */}
      <div className="flex gap-6 justify-evenly items-center h-screen w-full">
        <div className="w-3/5 h-4/5">
          { tab === 'Home' &&
            <div className="HomeTab flex flex-col justify-around items-center w-full h-full">
              <img src={me} className="w-[300px] rounded-3xl" alt="img"/>
              <div className="flex flex-col gap-3 justify-center items-center text-center max-h-[300px] py-6">
                <p className="font-fontJetMono text-[52px] leading-[54px] text-[#000000b2]">Amruta Dharap</p>
                <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">UI / UX / FRONTEND</p>
              </div>
            </div>
          }
          { tab === 'About' &&
            <div className="AboutTab flex flex-col gap-20 py-10 justify-around items-center w-full h-full overflow-y-auto">
              <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
                <h2 className="font-fontJose font-[550]">Hello 👋</h2>
                <p className="font-fontJetMono text-center leading-6">I’m someone who loves solving problems through code and has a newfound passion for design. My focus is on building UIs that not only look good but also deliver smooth, intuitive user experiences.<br/>
                Currently, I’m diving deeper into UX design, while sharpening my skills in coding, Hindustani Classical Violin playing, and Japanese language studies (because why not add some culture to creativity?). <br/>
                This space is my journey, where I’ll document my growth and share my projects. 
                Whether it’s code, design, or a mix of both, I’m excited to learn and create cool stuff.</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-start w-full h-fit">
                <h3 className="font-fontJose font-[500]">Achievements</h3>
                <div className="w-full h-fit">
                  <img src={courseCert} alt="img"/>
                </div>
              </div>
            </div>
          }
          { tab === 'Works' &&
            <div className="WorksTab flex flex-col justify-around items-center w-full h-full">
              works
            </div>
          }
          { tab === 'Connect' &&
            <div className="ConnectTab flex flex-col justify-around items-center w-full h-full">
              <div className="flex flex-col justify-center items-center gap-5 w-3/4">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h2 className="font-fontJose font-[550]">Let's Connect</h2>
                  <p className="font-fontJetMono text-lg leading-[22px] text-center">Let’s connect, share ideas, and build something incredible together! 🌟</p>
                </div>
                <div className="flex gap-4 justify-center items-center w-fit p-2">
                  <img src={Linkedin} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='img'/>
                  <img src={Github} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='img'/>
                  <img src={Twitter} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='img'/>
                </div>
              </div>
            </div>
          }         
        </div>
        <ul className="flex flex-col gap-4 text-2xl font-fontJetMono w-1/5">
          <button onClick={()=> setTab('Home')} className={`${tab === 'Home' ? 'border-b-2 border-greyBlack': 'border-b border-transparent'} cursor-pointer w-fit list-none p-2`}>Home</button>
          <button onClick={()=> setTab('About')} className={`${tab === 'About' ? 'border-b-2 border-greyBlack': 'border-b border-transparent'} cursor-pointer w-fit list-none p-2`}>About</button>
          <button onClick={()=> setTab('Works')} className={`${tab === 'Works' ? 'border-b-2 border-greyBlack': 'border-b border-transparent'} cursor-pointer w-fit list-none p-2`}>Works</button>
          <button onClick={()=> setTab('Connect')} className={`${tab === 'Connect' ? 'border-b-2 border-greyBlack': 'border-b border-transparent'} cursor-pointer w-fit list-none p-2`}>Connect</button>
        </ul>
      </div>
    </div>
  )
}

export default App;
