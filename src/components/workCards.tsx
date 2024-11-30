// import liftSimSm from '../assets/liftSimSm.png';
 
export default function WorkCards(){
  return(
    <div className="topLeft flex flex-row gap-6 w-full">
      {/* <div className='leftSection flex flex-row md:flex-col gap-1 w-full md:w-1/4 h-full'>
        <div className='h-full md:h-1/2 w-full text-black rounded-2xl bg-[#ffffff] p-2'>top block</div> 
        <div className='h-full md:h-1/2 w-full text-black rounded-2xl bg-[#ffffff] p-2'>bottom block</div>
      </div>
      <img src={liftSimSm} className="w-full md:w-1/2 h-full rounded-2xl object-fill" alt="img"/>
      <div className="flex flex-col gap-3 justify-center items-start h-full w-full md:w-1/4 p-2 bg-[#ffffff] rounded-2xl">
        <h4 className="font-medium font-fontlaila text-[#1D2276]">Lift Simulation</h4>
        <p className="text-black"> This is the description of the project</p>
      </div> */}
      <div className="relative flex flex-col gap-5 justify-center items-center w-full max-w-[250px] h-[250px] rounded-3xl border border-black text-center">
        {/* <img src={liftSimSm} className="absolute -z-10 w-full h-full rounded-2xl object-fill opacity-40" alt="img"/> */}
        <h4>Title</h4>
        <p>description - the whole card is live link</p>
      </div>
      <div className="relative flex flex-col gap-5 justify-center items-center w-full max-w-[250px] h-[250px] rounded-3xl border border-black text-center">
        {/* <img src={liftSimSm} className="absolute -z-10 w-full h-full rounded-2xl object-fill opacity-40" alt="img"/> */}
        <h4>Title</h4>
        <p>description - the whole card is live link</p>
      </div>
      <div className="relative flex flex-col gap-5 justify-center items-center w-full max-w-[250px] h-[250px] rounded-3xl border border-black text-center">
        {/* <img src={liftSimSm} className="absolute -z-10 w-full h-full rounded-2xl object-fill opacity-40" alt="img"/> */}
        <h4>Title</h4>
        <p>description - the whole card is live link</p>
      </div>
    </div>
  )
}