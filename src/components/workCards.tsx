import liftSimSm from '../assets/liftSimSm.png';

export default function WorkCards(){
  return(
    <div className="topLeft flex flex-col justify-center items-center xs:w-[350px] xs:h-[450px] md:flex-row gap-1 md:w-[600px] md:h-[350px] lg:w-[800px] lg:h-[400px] xl:h-[600px] xl:w-[1200px] 2xl:w-[1400px] 2xl:h-[700px] rounded-2xl">
      <div className='leftSection flex flex-row md:flex-col gap-1 w-full md:w-1/4 h-full'>
        <div className='h-full md:h-1/2 w-full text-black rounded-2xl bg-[#ffffff] p-2'>top block</div> 
        <div className='h-full md:h-1/2 w-full text-black rounded-2xl bg-[#ffffff] p-2'>bottom block</div>
      </div>
      <img src={liftSimSm} className="w-full md:w-1/2 h-full rounded-2xl object-fill" alt="img"/>
      <div className="flex flex-col gap-3 justify-center items-start h-full w-full md:w-1/4 p-2 bg-[#ffffff] rounded-2xl">
        <h4 className="font-medium font-fontlaila text-[#1D2276]">Lift Simulation</h4>
        <p className="text-black"> This is the description of the project</p>
      </div>
    </div>
  )
}