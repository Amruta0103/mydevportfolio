import projectsData from './projectsData';
import "../App.css";
 
export default function WorkCards(){
  return(
    <div className='allCards flex flex-row gap-6 w-full h-full justify-start items-stretch overflow-auto !py-16 sm:p-4'>
      {projectsData.map((item:any, index:number)=>(
        <div key={index} className="cardMain flex flex-col xs:flex-row gap-4 justify-around items-center min-w-[200px] p-4 xs:min-w-[400px] lg:min-w-[500px] rounded-2xl shadow-xl">
        {/* <img src={item.image} className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-3xl object-fill" width={'100%'} height={'100%'} loading="lazy" alt="img"/> */}
        <div className="cardInfos flex flex-col justify-between gap-2 p-3 sm:gap-4 min-w-[200px] w-full h-full">
          <h3 className="cardTitle font-medium font-fontJose">{item.title}</h3>
          <p className="cardDescription font-fontJetMono w-full p-2 xs:p-0 xs:w-[300px] md:w-[350px] text-base leading-[18px] sm:text-lg sm:leading-5">{item.description}</p>
          <div className='cardLinks flex gap-3 items-center'>
          <a href={item.liveLink} className="cursor-pointer underline font-fontJose text-base leading-[18px]">Live Link</a>
          <a href={item.gitLink} className="cursor-pointer underline font-fontJose text-base leading-[18px]">GitHub</a>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}