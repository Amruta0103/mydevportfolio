import projectsData from './projectsData';
 
export default function WorkCards(){
  return(
    <div className='flex flex-col gap-8 w-full justify-center items-center'>
      {projectsData.map((item:any)=>(
        <div className="flex flex-col xs:flex-row gap-4 justify-evenly items-center w-full h-fit xs:even:flex-row-reverse">
        <img src={item.image} className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-3xl object-fill" alt="img"/>
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[350px]">
          <h4 className="font-fontJose">{item.title}</h4>
          <p className="font-fontJetMono text-base leading-[18px] sm:text-lg sm:leading-5">{item.description}</p>
          <div className='flex gap-3 items-center'>
          <a href={item.liveLink} className="cursor-pointer underline font-fontJose text-base leading-[18px]">Live Link</a>
          <a href={item.gitLink} className="cursor-pointer underline font-fontJose text-base leading-[18px]">GitHub</a>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}