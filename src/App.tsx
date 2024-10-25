import "./App.css";
// import helloWhite from './assets/hello-white.svg';
// import typing from './assets/typing.svg';
// import connect from './assets/connect.svg';
// import win from './assets/win.svg';
import elementalscreen from './assets/elementalscreen.jpg';
import grainscreen from './assets/grainscreen.jpg';
// import heatscreen from './assets/heatscreen.jpg';
// import metallicscreen from './assets/metallicscreen.jpg';
import mountain from './assets/mountain.mp4';
// import Works from "./tabs/works";
// import Contact from "./tabs/contact";
// import About from "./tabs/about";

// function scrollToElement(id:any) {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// }

function App() {
  return (
    <div className="App z-0 relative flex flex-col justify-between items-center w-full min-h-screen h-full bg-[#010812] text-white">
      {/* <video autoPlay muted loop>
        <source src={mountain} type="video/mp4"/>
      </video> */}
      <div className="max-h-screen relative h-screen w-full flex justify-center items-center">
        <img src={grainscreen} className="bgImage h-screen" alt="img"/>
        <div className="absolute w-full h-full text-center flex flex-col gap-3 justify-center items-center">
          <p className="font-fontJetMono text-[60px] text-[#000000b2]">Amruta Dharap</p>
          <p className="font-fontRale text-xl font-semibold text-[#0000009c]">UI / UX / FRONTEND</p>
        </div>
      </div>
      <div className="flex w-full h-screen justify-center">
        <div className="flex flex-col justify-center items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full">
          <h1 className="font-fontlaila">Hello</h1>
          <p className="font-fontJetMono text-center w-[70%]">I love coding and recently I've got more curious about Designing. <br/>Creating amazing UI's with smooth UX is the goal. I'll be posting in here my journey and learn from you when we connect and create cool stuff :&#41; </p>
        </div>
      </div>
      {/* <div className="flex w-full justify-center border-b-2 border-b-[#ECECEC]">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full">
          <h1 className="font-fontlaila">Amruta Dharap</h1>
          <h4 className="font-fontRale">Frontend Developer</h4>
        </div>
      </div> */}
      <div className="relative h-screen w-full flex justify-center items-center">
        <video autoPlay muted loop>
          <source src={mountain} type="video/mp4"/>
        </video>
        {/* <img src={heatscreen} className="bgImage min-h-full max-h-full" alt="img"/> */}
        <div className="mainBox w-[80%] max-w-[1224px] h-full max-h-[1224px] flex gap-3 items-center justify-center p-2">
          <div className="topContainer w-full h-full flex gap-3 items-center justify-center">
            <div className="topLeft bg-[rgba(255,255,255,0.5)] flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[1224px] h-full max-h-[1224px] p-2">
              {/* <img src={helloWhite} alt="hello" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/> */}
              {/* <img src={heatscreen} className="bgImage min-h-full max-h-full" alt="img"/> */}
              <h4 className="font-medium font-fontlaila text-[#1D2276]">Hello</h4>
            </div>
            {/* <div className="topRight bg-[rgba(255,255,255,0.5)]  flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[35%] h-full p-2">
              <img src={typing} alt="typing" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
              <h4 className="font-medium font-fontlaila text-[#998A00]">Hello</h4>
            </div> */}
          </div>
          {/* <div className="bottomContainer w-full h-full flex gap-3 items-center justify-center min-w-[200px]">
            <div className="bottomLeft bg-[rgba(255,255,255,0.5)]  flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[40%] h-full p-2">
              <img src={connect} alt="connect" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
              <h4 className="font-medium font-fontlaila text-[#99000A]">Hello</h4>
            </div>
            <div className="bottomRight bg-[rgba(255,255,255,0.5)]  flex flex-col gap-2  justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[60%] h-full p-2">
              <img src={win} alt="win" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
              <h4 className="font-medium font-fontlaila text-[#00993C]">Hello</h4>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex w-full h-screen justify-center">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full">
          <h1 className="font-fontlaila">Amruta Dharap</h1>
          <h4 className="font-fontRale">Frontend Developer</h4>
        </div>
      </div>
      <div className="max-h-screen relative h-screen w-full flex justify-center items-center">
        <img src={elementalscreen} className="bgImage h-screen" alt="img"/>
        <div className="absolute w-full h-full text-center flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-3 justify-center items-center w-[150px] h-[150px] overflow-hidden md:w-[500px] md:h-[350px] bg-white rounded-2xl text-black">
          <p className="font-fontJetMono text-[60px]">Amruta Dharap</p>
          <p className="font-fontRale text-xl font-semibold">UI / UX / FRONTEND</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
