import liftSimSm from '../assets/liftSimSm.png';

export default function WorkCards(){
  return(
    <div className="topLeft flex flex-col gap-2 min-w-[200px] w-full max-w-[250px] min-h-[300px] h-full max-h-[400px] rounded-2xl bg-[#ffffffcc]">
      <img src={liftSimSm} className="min-h-[150px] h-full max-h-[50%] min-w-[200px] rounded-2xl" alt="img"/>

      <div className="flex flex-col gap-3 justify-center items-start max-h-[90%] h-fit w-full p-2">
        <h4 className="font-medium font-fontlaila text-[#1D2276]">Lift Simulation</h4>
        <p className="text-black"> This is the description of the project</p>
      </div>
    </div>
  )
}