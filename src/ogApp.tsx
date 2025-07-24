import "./App.css";
import { useState, useEffect } from "react";
// import flyingComp from "./assets/flyingComputer.mp4";
// import elementalscreen from './assets/elementalscreen.jpg';
import grainscreen from './assets/grainscreen.jpg';
// import mountain from './assets/mountain.mp4';
// import oldType from './assets/oldType.jpg';
// import typewriter from './assets/typewriter.mp4';
import arrowUp from './assets/chevron-up.svg';
import WorkCards from "./components/workCards";
import Linkedin from "./assets/Linkedin.svg";
import Github from "./assets/Github.svg";
import Twitter from "./assets/Twitter.svg";
import courseCert from './assets/CourseraGoogleUXDesign.jpg';

function OgApp() {
  const [openNav, setOpenNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
      if(currentScrollPos > prevScrollPos){
        setVisible(false)
        setOpenNav(false);
      }else{
        setVisible(true)
      }
      setPrevScrollPos(currentScrollPos)
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  })


  return (
    <div className="OgApp z-0 relative flex flex-col justify-between items-center w-full min-h-screen h-full bg-white scroll-smooth">
      {/* <video autoPlay muted loop>
        <source src={mountain} type="video/mp4"/>
      </video> */}
      <nav className={`sticky z-50 left-0 right-0 w-full flex justify-center ${visible ? 'top-0' : ''}`}>
        <div className={`navBar absolute z-50 h-fit w-full xs:flex xs:justify-center py-0 xs:py-2 bg-transparent xs:bg-white`}>
          <div className="navBarDiv h-fit w-[80%] max-w-[1224px] flex justify-between items-center">
            <h3 className="font-fontJetMono text-black max-xs:hidden">AD</h3>
            <ul className="xs:flex flex-row justify-center gap-3 list-none text-black max-xs:hidden">
              <li className="text-base leading-[22px] font-normal"><a href='#home'>Home</a></li>
              <li className="text-base leading-[22px] font-normal"><a href='#about'>About</a></li>
              <li className="text-base leading-[22px] font-normal"><a href='#works'>Works</a></li>
              <li className="text-base leading-[22px] font-normal"><a href='#connect'>Connect</a></li>
              <li className="text-base leading-[22px] font-normal"><a href='#wins'>Wins</a></li>
            </ul>
            <div className="flex flex-col justify-start items-start xs:hidden h-fit w-full">
              <div onClick={() => setOpenNav(!openNav)} className={`navBar left-0 top-0 z-50 h-fit w-fit p-2 bg-white text-black rounded-br-2xl`}>
                <div className="navBarDiv h-fit w-full flex justify-evenly items-center">
                  <img src={arrowUp} height={24} width={24} loading="lazy" alt='top' className={`${openNav? 'rotate-0': 'rotate-180'} transition-all duration-500 h-full`}/>
                </div>
              </div>
              <div className={`${openNav ? 'flex' : 'hidden'} bg-white left-0 right-0 w-1/2 h-full top-0 bottom-0 fixed justify-center items-center`}>
                <ul className="xs:flex flex-row gap-3 list-none text-black">
                  <li className="text-base leading-[22px] font-normal"><a href='#home'>Home</a></li>
                  <li className="text-base leading-[22px] font-normal"><a href='#about'>About</a></li>
                  <li className="text-base leading-[22px] font-normal"><a href='#works'>Works</a></li>
                  <li className="text-base leading-[22px] font-normal"><a href='#connect'>Connect</a></li>
                  <li className="text-base leading-[22px] font-normal"><a href='#wins'>Wins</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id='home' className="introBlock h-full min-h-max w-full py-8 md:py-[60px] px-4 md:px-0 relative flex flex-col gap-6 justify-center items-center bg-white">
        {/* <img src={grainscreen} className="bgImage h-screen" width={'100%'} height={'100%'} loading="lazy" alt="img"/> */}
        <div className="w-full h-full text-center flex flex-col gap-3 justify-center items-center max-h-[300px] py-6">
          <p className="font-fontJetMono text-[52px] leading-[54px] text-[#000000b2]">Amruta Dharap</p>
          <p className="font-fontRale text-xl leading-5 font-semibold text-[#0000009c]">UI / UX / FRONTEND</p>
        </div>
        <div className="flex justify-around items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full bg-black text-white rounded-3xl">
          <img src={grainscreen} className="h-4/5 w-[300px] rounded-3xl" width={'100%'} height={'100%'} loading="lazy" alt="img"/>
          <div className="flex flex-col gap-4 justify-center items-center w-full h-full max-w-[600px]">
            <h1 className="font-fontlaila">Hello 👋</h1>
            <p className="font-fontJetMono text-center w-[70%] leading-6">I’m someone who loves problem-solving through code and has a newfound passion for design. My focus is on building UIs that not only look good but also deliver smooth, intuitive user experiences.<br/>
            With a keen eye for detail and a growing love for creating intuitive user interfaces, my mission is to design and develop websites and applications that not only work seamlessly but also feel amazing to use. This space is my journey, where I’ll document my growth and share my projects.<br/>
            Whether it’s code, design, or a mix of both, I’m excited to connect, learn, and create cool stuff with you.</p>
          </div>
        </div>
      </div>
      <div id='works' className="projectsBlock h-full min-h-max w-full py-8 md:py-[60px] px-4 md:px-0 relative flex justify-center items-center">
        {/* <video autoPlay muted loop className="max-w-[1224px] max-h-[612px]">
          <source src={mountain} type="video/mp4"/>
        </video> */}
        <div className="mainBox w-full max-w-[1224px] h-full flex gap-3 items-center justify-center">
          <div className="cardsConstainer width-fit py-4 px-8 rounded-2xl overflow-auto">
            <WorkCards/>         
          </div>
        </div>
      </div>
      <div id='connect' className="connectBlock h-1/2 w-full py-8 md:py-[60px] px-4 md:px-0 relative flex justify-center">
        <div className="flex flex-col justify-center items-center gap-5 sm:gap-6 p-6 w-full max-w-[80%] h-[600px] rounded-3xl text-white relative">
        {/* <img src={oldType} className="absolute -z-10 object-fit w-full h-full rounded-3xl" width={'100%'} height={'100%'} loading="lazy" alt="img"/> */}
          {/* <video autoPlay muted loop className="opacity-85 bg-repeat-round">
            <source src={typewriter} type="video/mp4"/>
          </video> */}
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="font-fontlaila">Let's Connect</h1>
            <p className="font-fontJose text-xl leading-[22px] text-center">Let’s connect, share ideas, and build something incredible together! 🌟</p>
          </div>
          <div className="flex gap-4 justify-center items-center w-fit p-2">
            <img src={Linkedin} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" width={'100%'} height={'100%'} loading="lazy" alt='img'/>
            <img src={Github} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" width={'100%'} height={'100%'} loading="lazy" alt='img'/>
            <img src={Twitter} className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12" width={'100%'} height={'100%'} loading="lazy" alt='img'/>
          </div>
        </div>
      </div>
      <div id='wins' className="docsBlock h-screen min-h-max w-full py-8 md:py-[60px] px-4 md:px-0 relative flex justify-center items-center">
        <div className="flex justify-around items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full bg-black text-white rounded-3xl">
          {/* <div className="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] overflow-hidden md:w-[500px] md:h-[350px] bg-white rounded-2xl text-black">
          <p className="font-fontRale text-xl font-semibold">UI / UX / FRONTEND</p>
          </div> */}
          <div className="h-auto flex flex-col gap-10 justify-center items-center py-8 px-4">
            <p className="font-fontLaila text-[40px]">Achievements 🎉</p>
             <img src={courseCert} className="w-[800px]" width={'100%'} height={'100%'} loading="lazy" alt="img"/>
          </div>
        </div>
      </div>      
      <div className={`topBtn fixed z-50 right-2 sm:right-4 w-full h-fit flex justify-center ${visible === false ? 'bottom-16 sm:bottom-20' : 'hidden'}`}>
        <a href='#home'>
          <div className={`topBtnBox absolute right-4 z-50 h-fit w-fit py-2 bg-[#fffff9cc] text-black rounded-2xl p-2`}>
            <div className="topBtnDiv h-fit w-full flex justify-evenly items-center">
              <img src={arrowUp} height={24} width={24} loading="lazy" alt='top' />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default OgApp;
