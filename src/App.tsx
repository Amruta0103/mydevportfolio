import "./App.css";

function App() {
  return (
    <div className="App h-screen w-full flex m-auto text-white bg-[#0c0c0c]">
      {/* #1F1F1F -> for bg in light mode */}
      <div className="flex flex-col justify-between items-center w-full max-w-[1224px] h-full max-h-[700px] m-auto b b-black">
        <div className="flex justify-start items-start w-full">
          <h1 className="text-6xl">Amruta Dharap</h1>
        </div>
        <div onClick={()=>console.log("clicked")} className="bloby overflow-hidden m-4 md:m-auto h-full w-full md:max-h-[350px] md:max-w-[500px] max-h-[250px] max-w-[300px] cursor-pointer">
          <div className="move h-full w-full"></div>
        </div>
        <div className="flex justify-end items-end w-full">
          <h1 className="text-6xl">Frontend Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
