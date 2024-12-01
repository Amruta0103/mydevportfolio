import grainscreen from '../assets/grainscreen.jpg';

 
export default function WorkCards(){
  return(
    <div className="flex flex-col xs:flex-row gap-4 justify-evenly items-center w-full h-fit xs:even:flex-row-reverse">
      <img src={grainscreen} className="w-[300px] h-[300px] rounded-3xl" alt="img"/>
      <div className="flex flex-col gap-2 sm:gap-4">
        <h4>Title</h4>
        <p>description - the whole card is live link</p>
      </div>
    </div>
  )
}