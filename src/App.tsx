import { useState } from "react";
import "./App.css";
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
import courseCert from './assets/CourseraGoogleUXDesign.jpg';
import WorkCards from "./components/workCards";
// import Resume from "./assets/files/AmrutaDharap_2024.pdf";

function App() {
  const [tab, setTab] = useState('/');
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
    <div className="App z-0 relative flex flex-col justify-between items-center w-full h-full text-greyBlack scroll-smooth snap-start ">
      <div className="flex flex-col sm:flex-row gap-6 justify-evenly items-center h-full w-full">
        <div className="contentContainer flex flex-col gap-20 w-4/5 sm:w-3/5 h-4/5 snap-mandatory">
            <div id="Home" className="HomeTab flex flex-col justify-start sm:justify-around items-center w-full h-screen mt-8">
              <div className="flex flex-col gap-5 items-center">
                <img src={me} className="w-[300px] rounded-3xl" alt="img"/>
                <div className="flex flex-col gap-3 justify-center items-center text-center max-h-[300px] py-3 sm:py-6">
                  <p className="font-fontJetMono text-[40px] sm:text-[52px] leading-[44px] sm:leading-[54px] text-[#000000b2]">Amruta Dharap</p>
                  <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">UI / UX / FRONTEND</p>
                </div>
              </div>
            </div>
            <div id="About" className="AboutTab flex flex-col gap-12 sm:gap-20 py-10 justify-around items-center w-full min-h-screen h-full">
              <div id="Intro" className="flex flex-col gap-4 justify-center items-center w-full h-fit">
                <h2 className="font-fontJose font-[550]">Hello 👋</h2>
                <p className="font-fontJetMono text-center leading-6">I’m someone who loves solving problems through code and has a newfound passion for design. My focus is on building UIs that not only look good but also deliver smooth, intuitive user experiences.<br/><br/>
                Currently, I’m diving deeper into UX design, while sharpening my skills in coding, Hindustani Classical Violin playing, and Japanese language studies (because why not add some culture to creativity?). <br/><br/>
                This space is my journey, where I’ll document my growth and share my projects. 
                Whether it’s code, design, or a mix of both, I’m excited to learn and create cool stuff.</p>
              </div>
              <div id="Wins" className="flex flex-col gap-4 justify-center items-start w-full h-fit">
                <h3 className="font-fontJose font-[500]">Achievements</h3>
                <div className="w-fit sm:w-full h-fit">
                  <img src={courseCert} className="w-full max-w-fit xl:max-w-[900px]" alt="img"/>
                </div>
              </div>
            </div>
            <div id="Works" className="WorksTab flex flex-col gap-6 py-10 justify-evenly items-center w-full min-h-screen h-full">
              <h2 className="font-fontJose font-[550] py-2">Projects & Case Studies</h2>
                {/* <p className="w-full h-fit text-center font-[550] font-fontRale">
                  Work is in Progress!! <br/>
                  Updates will be posted soon! <br/>
                </p>
                <p className="w-full h-fit text-center font-medium font-fontRale">Meanwhile you can checkout <a href={'https://github.com/Amruta0103'} className="cursor-pointer underline"> my Github here</a> : &#41;
                </p> */}
                <WorkCards/>
                <p className="w-full h-fit text-center font-medium font-fontRale py-2 sm:py-4">My new projects with more <span className="font-semibold italic">design-focused</span> approach will be posted soon! Stay Tuned!!</p>
            </div>
            <div id='Connect' className="ConnectTab flex flex-col justify-around items-center w-full min-h-screen h-full">
              <div className="flex flex-col justify-center items-center gap-5 w-3/4">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h2 className="font-fontJose font-[550]">Let's Connect</h2>
                  <p className="font-fontJetMono text-lg leading-[22px] text-center">Let’s connect, share ideas, and build something incredible together! 🌟</p>
                </div>
                <div className="flex gap-4 justify-center items-center w-fit p-2">
                  <a href={'https://www.linkedin.com/in/amruta-d-4366341b8/'} className="cursor-pointer">
                    <img src={Linkedin} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='LinkedIn'/>
                  </a>
                  <a href={'https://github.com/Amruta0103'} className="cursor-pointer">
                    <img src={Github} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='GitHub'/>
                  </a>
                  <a href={'https://x.com/AmrutaDharap'} className="cursor-pointer">
                    <img src={Twitter} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" alt='X'/>
                  </a>
                  <a href={"https://drive.google.com/file/d/1UaTtg18td1BGG7S_YLgkW21OC16T2qYk/view?usp=drive_link"} className="cursor-pointer">
                    <img src={File} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 cursor-pointer" alt='Resume'/>
                  </a>
                </div>
              </div>
            </div>   
        </div>
        <ul className="tabsContainer h-creen flex flex-row sm:flex-col p-4 gap-2 sm:gap-4 justify-center items-center font-fontJetMono w-full sm:w-1/5 bg-transparent sm:fixed top-0 right-0 bottom-0">
          <a href="/">
          <button onClick={()=>setTab("/")} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
            <img src={idIcon} className={`w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10 ${tab === "/" ? 'animate-[pulse_2s]': ''}`} alt='idIcon'/>
          </button>
          </a>
          <a href="#About">
          <button onClick={()=>setTab("AboutTab")} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={flagIcon} className={`w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10 ${tab === "AboutTab" ? 'animate-[pulse_2s]': ''}`} alt='flagIcon'/>
          </button>
          </a>
          <a href="#Works">
          <button onClick={()=>setTab("WorksTab")} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={folderIcon} className={`w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10 ${tab === "WorksTab" ? 'animate-[pulse_2s]': ''}`} alt='folderIcon'/>
          </button>
          </a>
          <a href="#Connect">
          <button onClick={()=>setTab("ConnectTab")} className={`cursor-pointer w-fit list-none p-1 sm:p-2`}>
          <img src={linkIcon} className={`w-4 h-4 md:w-8 md:h-8 xl:w-10 xl:h-10 ${tab === "ConnectTab" ? 'animate-[pulse_2s]': ''}`} alt='linkIcon'/>
          </button>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default App;
