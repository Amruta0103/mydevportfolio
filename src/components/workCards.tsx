import grainscreen from '../assets/grainscreen.jpg';
import projectsData from './projectsData';
 
export default function WorkCards(){
  return(
    <div className='flex flex-col gap-8 w-full justify-center items-center'>
      {projectsData.map((item:any)=>(
        <div className="flex flex-col xs:flex-row gap-4 justify-evenly items-center w-full h-fit xs:even:flex-row-reverse">
        <img src={grainscreen} className="w-[300px] h-[300px] rounded-3xl" alt="img"/>
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[350px]">
          <h4 className="font-fontJose">{item.title}</h4>
          <p className="font-fontJetMono text-base leading-[18px] sm:text-lg sm:leading-5">{item.description}</p>
        </div>
        </div>
      ))}
    </div>
  )
}