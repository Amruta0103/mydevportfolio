import logo from '../assets/logo512.png';

export default function Home(){
  return(
    <div className="HomeTab w-full h-full flex flex-col md:flex-row justify-around p-2">
      <div className="Info w-full max-w-[350px] p-4 flex justify-center items-center">
        <p className='text-lg font-fontlaila'>
          Hello,
          I am a Frontend Developer who immensly loves coding and building amazing apps that help people ease their lives.
        </p>
      </div>
      <div className="ImgTitle flex flex-col gap-10 w-full max-w-[350px] justify-center items-center">
        <img src={logo} alt="Amruta" className={`w-full max-w-[300px] h-full max-h-[450px] rounded-2xl`}/>
        <div>
        <h1 className='text-3xl font-fontMonoFett'>Amruta Dharap</h1>
        <p className='text-xl'>Frontend Developer</p>
        </div>
      </div>
    </div>
  )
}