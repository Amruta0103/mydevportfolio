import "./App.css";
import helloWhite from './assets/hello-white.svg';
import typing from './assets/typing.svg';
import connect from './assets/connect.svg';
import win from './assets/win.svg';
import screens from './assets/dots_screen.mp4'
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
    <div className="App z-0 relative flex flex-col justify-between items-center gap-6 md:gap-[50px] w-full min-h-screen h-full bg-[#010812] text-white">
      <video autoPlay muted loop>
        <source src={screens} type="video/mp4"/>
      </video>
      <div className="flex w-full justify-center border-b-2 border-b-[#ECECEC]">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full">
          <h1 className="font-fontlaila">Amruta Dharap</h1>
          <h4 className="font-fontRale">Frontend Developer</h4>
        </div>
      </div>
      <div className="mainBox w-[80%] max-w-[1224px] h-full max-h-[1224px] flex flex-col gap-3 items-center justify-center p-2">
        <div className="topContainer w-full h-full flex flex-col xs:flex-row gap-3 items-center justify-center min-w-[200px]">
          <div className="topLeft bg-[rgba(255,255,255,0.2)] flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[65%] h-full p-2">
            <img src={helloWhite} alt="hello" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
            <h4 className="font-medium font-fontlaila text-[#006599]">Hello</h4>
          </div>
          <div className="topRight bg-[#FFF599] flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[35%] h-full p-2">
            <img src={typing} alt="typing" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
            <h4 className="font-medium font-fontlaila text-[#998A00]">Hello</h4>
          </div>
        </div>
        <div className="bottomContainer w-full h-full flex flex-col xs:flex-row gap-3 items-center justify-center min-w-[200px]">
          <div className="bottomLeft bg-[#FF99A0] flex flex-col gap-2 justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[40%] h-full p-2">
            <img src={connect} alt="connect" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
            <h4 className="font-medium font-fontlaila text-[#99000A]">Hello</h4>
          </div>
          <div className="bottomRight bg-[#99FFC1] flex flex-col gap-2  justify-center items-center rounded-[32px] w-full max-w-[250px] xs:max-w-[60%] h-full p-2">
            <img src={win} alt="win" className="w-full max-w-[120px] md:max-w-[170px] xl:max-w-[220px] h-full max-h-[120px] md:max-h-[170px] xl:max-h-[220px]"/>
            <h4 className="font-medium font-fontlaila text-[#00993C]">Hello</h4>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-t-2 border-t-[#ECECEC]">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-0 sm:gap-3 px-4 xl:px-0 py-4 w-full max-w-[1224px] h-full">
          <h1 className="font-fontlaila">Amruta Dharap</h1>
          <h4 className="font-fontRale">Frontend Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
