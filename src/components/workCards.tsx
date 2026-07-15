import projectsData from './projectsData';
// @ts-ignore: allow importing CSS side-effect in TSX without type declarations
import "../App.css";
 
export default function WorkCards(){
  return(
    <div className='allCards flex flex-row gap-3 w-full h-full justify-start overflow-x-auto px-1 pb-5 snap-x snap-mandatory cursor-default scrollbar-w-none' style={{scrollbarWidth: 'thin'}}>
      {projectsData.map((item:any, index:number)=>(
        <div key={index} className="cardMain flex flex-col xs:flex-row gap-1 justify-around items-center min-w-[200px] p-4 sm:min-w-[400px] max-w-[400px] border border-gray-200 rounded-2xl shadow-lg snap-start cursor-default">
        <div className="cardInfos flex flex-col justify-between gap-1.5 p-3 sm:gap-4 w-full h-full">
        {item.image && <img src={item.image} className="w-[250px] h-[150px] rounded-3xl object-cover self-center" width={'100%'} height={'100%'} loading="lazy" alt="img"/>}
          <p className="cardTitle font-medium font-fontJetMono text-wrap text-lg">{item.title}</p>
          <p className="cardDescription font-fontRale w-full p-2 text-base leading-[18px] sm:leading-5">{item.description}</p>
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