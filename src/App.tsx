import "./App.css";
import Work from "./tabs/work";
import Connect from "./tabs/connect";
import Home from "./tabs/home";

function scrollToElement(id:any) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <div className="App flex flex-col justify-center items-center w-full h-screen bg-[#ededed]">
      <div className="flex justify-center gap-4 w-full max-h-[80px] bg-[#ffffff] shadow-[-8px_8px_24px_#FFF4] rounded-[0px_0px_16px_16px]">
        <div className="flex justify-between items-center w-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1024px] p-4">
          <h1 className='text-[40px] font-fontMonoFett'>Amruta Dharap</h1>
          <div className="flex justify-end">
            <div onClick={() => scrollToElement('home')} 
            // className={`${scrollToElement(id) === 'home' ? 'border-b-2 border-b-black':'border-b-2 border-b-transparent'} cursor-pointer w-max py-1 px-2 text-[20px] leading-[22px] font-fontlaila `}
            >Home</div>
            <div onClick={() => scrollToElement('work')} 
            // className={`${work ? 'border-b-2 border-b-black':'border-b-2 border-b-transparent'} cursor-pointer w-max py-1 px-2 text-[20px] leading-[22px] font-fontlaila`}
              >Works</div>
            <div onClick={() => scrollToElement('connect')} 
            // className={`${connect ? 'border-b-2 border-b-black':'border-b-2 border-b-transparent'} cursor-pointer w-max py-1 px-2 text-[20px] leading-[22px] font-fontlaila`}
              >Connect</div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center items-center py-[72px] px-[208px]">
        <div className="h-full w-full max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1224px]">
          <div className="h-fit w-full" id="home">
            <Home/> 
          </div>            
          <div className="h-fit w-full" id="work">
            <Work/>
          </div>            
          <div className="h-fit w-full" id="connect">
            <Connect/>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
