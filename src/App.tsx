import { useState } from "react";
import "./App.css";

function App() {
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);
  return (
    <div className="App flex justify-center items-center w-full h-screen bg-new">
      <div className="flex flex-col gap-6 h-full py-4 md:py-28 px-4 max-w-[300px] max-h-[500px] sm:max-w-[600px] sm:max-h-[600px] md:max-w-[700px] lg:max-w-[900px] lg:max-h-[700px]">
        <div className={`top ${blue || yellow  === true ? 'hidden': 'flex max-h-full max-w-full'}`}>
          <div className={`${red === true ? 'h-full w-full z-20 bg-[#FF99A0] transition-all': 'w-full h-full flex justify-center items-center z-0'} ${green ? 'hidden': 'flex'}`}>
            <div onClick={()=>setRed(!red)} className="cursor-pointer">Click here 2</div>
          </div>
          <div className={`${green === true ? 'h-full w-full z-20 bg-[#99FFC1] transition-all': 'w-full h-full flex justify-center items-center z-0'} ${red ? 'hidden': 'flex'}`}>
            <div onClick={()=>setGreen(!green)} className="cursor-pointer">Click here 3</div>
          </div>
        </div>
        <div className={`mid ${blue || red || yellow || green  === true ? 'hidden': 'flex'} justify-center m-auto max-w-[800px] w-full max-h-[500px] h-full cursor-pointer z-0`}>
          <div className="flex flex-col gap-8 justify-center items-center w-full">
            <h1 className="text-6xl">Amruta Dharap</h1>
            <h1 className="text-4xl">Frontend Developer</h1>
          </div>
        </div>
        <div className={`bottom ${red || green  === true ? 'hidden': 'flex'}`}>
          <div className={`${blue === true ? 'h-full w-full z-20 bg-[#99DDFF] transition-all': 'w-full h-full flex justify-center items-center z-0'} ${yellow ? 'hidden': 'flex'}`}>
            <div onClick={()=>setBlue(!blue)} className="cursor-pointer">Click here 1</div>
          </div>
          <div className={`${yellow === true ? 'h-full w-full z-20 bg-[#FFF599] transition-all': 'w-full h-full flex justify-center items-center z-0'} ${blue ? 'hidden': 'flex'}`}>
            <div onClick={()=>setYellow(!yellow)} className="cursor-pointer">Click here 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
