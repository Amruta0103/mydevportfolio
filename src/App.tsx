import { useState } from "react";
// @ts-ignore: allow importing CSS side-effect in TSX without type declarations
import './App.css';
import me from './assets/me.webp'
// import flyingComp from "./assets/galaxy.webp";
import Linkedin from "./assets/Linkedin.svg";
import Github from "./assets/Github.svg";
import Twitter from "./assets/Twitter.svg";
import File from "./assets/File.svg";
import idIcon from "./assets/idIcon.svg";
import flagIcon from "./assets/flagIcon.svg";
import linkIcon from "./assets/linkIcon.svg";
import folderIcon from "./assets/folderIcon.svg"
import close from "./assets/X.svg";
import courseCert from './assets/CourseraGoogleUXDesign.webp';
import React from "react";
import WorkCards from "./components/workCards";
// const WorkCards = React.lazy(() => import("./components/workCards.js"));
// import Resume from "./assets/files/AmrutaDharap_2024.pdf";

function App() {
  const [tab, setTab] = useState('/');
  const [open, setOpen] = useState(false);
  // const downloadResume = () => {
  //   const pdfUrl = "./assets/files/AMRUTADHARAP_2024.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "AMRUTADHARAP_2024"; // specify the filename
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  // const downloadFile = (fileContent:any, fileName:any) => {
  //   // Create a Blob from the file content
  //   const blob = new Blob([fileContent], { type: 'text/plain' });
  //   const url = URL.createObjectURL(blob);

  //   // Create an anchor element to trigger the download
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = fileName; // Set the desired file name
  //   document.body.appendChild(link);

  //   // Trigger the download
  //   link.click();

  //   // Clean up
  //   link.remove();
  //   URL.revokeObjectURL(url);
  // };


  return (
    <div className="App z-0 relative flex flex-col justify-between items-center w-full h-full text-greyBlack scroll-smooth snap-start cursor">
      <div className={`mainContainer h-full w-4/5`}>
        {/* <div className={`contentContainer flex flex-col gap-20 w-4/5 sm:w-3.5/5 h-4/5 snap-mandatory ${open === true ? 'z-0 cursor-not-allowed opacity-30': ''}`}> */}
          <div id="Home" className="HomeTab flex flex-col justify-start sm:justify-evenly items-center w-full h-screen">
            <div className="flex flex-col min-[950px]:flex-row gap-6 w-full justify-center items-center">
              <div className="flex flex-col gap-4 justify-center items-center w-full h-full basis-1/3">
                <img src={me} className="w-[300px] max-w-[300px] rounded-full py-2" width={300} height={350} loading="lazy" alt="img" fetchPriority="high"/>
                <div className="flex flex-col gap-3 justify-center items-center text-center max-h-[300px] py-3 sm:py-6">
                  <h2 className="font-fontJetMono text-[30px] leading-[32px] font-[500]">Amruta Dharap</h2>
                  <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">Game Programmer</p>
                  <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">Unity • C#</p>
                  <div className="flex gap-4 justify-center items-center w-fit p-2">
                    <a href={'https://www.linkedin.com/in/amruta-d-4366341b8/'} className="cursor-pointer">
                    <img src={Linkedin} className="w-4 h-4 xl:w-7 xl:h-7" width={'100%'} height={'100%'} loading="lazy" alt='LinkedIn'/>
                    </a>
                    <a href={'https://github.com/Amruta0103'} className="cursor-pointer">
                      <img src={Github} className="w-4 h-4 xl:w-7 xl:h-7" width={'100%'} height={'100%'} loading="lazy" alt='GitHub'/>
                    </a>
                    <a href={'https://x.com/AmrutaDharap'} className="cursor-pointer">
                      <img src={Twitter} className="w-4 h-4 xl:w-7 xl:h-7" width={'100%'} height={'100%'} loading="lazy" alt='X'/>
                    </a>
                    <a href={"https://drive.google.com/file/d/1WdnG2_rZ8iRB-JKnYqrUVyMdpl2BKLEg/view?usp=drivesdk"} className="cursor-pointer">
                      <img src={File} className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer" width={'100%'} height={'100%'} loading="lazy" alt='Resume'/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center items-start w-full min-[950px]:w-fit h-full basis-2/3 overflow-x-hidden">
                <p className="font-fontRale font-[500] text-lg text-left leading-6 px-4 italic">
                  <span className="font-semibold text-lg leading-[22px]">Building games through code.</span><br/><br/>
                  I've always been fascinated by how games are built, just as much as how they're played.<br/>
                  Now I'm turning that curiosity into playable experiences with Unity & C#.<br/>
                  My background in frontend development gave me a strong foundation in building user-centered software and writing clean, maintainable code.
                  <br/>
                  Today, I'm exploring gameplay mechanics, solving interesting programming challenges, and learning by building one project at a time.
                  <br/>
                  Beyond programming, I enjoy Hindustani Classical Violin, studying Japanese, and exploring new ideas simply because I love understanding how things work.
                </p>
                <div className="flex flex-col gap-3 h-fit w-full">
                  <p className="font-fontRale font-semibold text-xl text-left leading-[22px] px-4 italic">Games & Projects</p>
                  <WorkCards/>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div className={`popupDiv ${open === true ? 'fixed left-0 top-0 right-0 bottom-0 z-20 opacity-100 ' : 'hidden'} flex self-center justify-self-center`}>
          <button onClick={()=>setOpen(false)} className="absolute z-30 top-0 right-0 cursor-pointer shadow-md rounded-xl">
            <img src={close} height={24} width={24} loading="lazy" alt="close"/>
          </button>
          <img src={courseCert} className="w-full xs:max-w-[400px] sm:max-w-[550px] md:max-w-[730px] xl:max-w-[900px]" width={'100%'} height={'100%'} loading="lazy" alt="img"/>
        </div> */} 
      </div>
    </div>
  )
}

export default App;
