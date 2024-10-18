import logo from '../assets/logo512.png';

export default function About(){
  return(
    <div className='AboutContainer h-full w-full flex justify-center items-center bg-gradient-to-t from-white via-[#99DDFF] to-white py-[90px]'>
      <div className="AboutTab w-full h-full flex flex-col md:flex-row justify-around p-2 max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1024px]">
        <div className='flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-[8px_8px_10px_#99DDFF]'>
        <div className="Info w-full max-w-[350px] p-4 flex justify-center items-center">
          <p className='text-lg font-fontlaila'>
            Hello,
            I am a Frontend Developer who immensly loves coding and building amazing apps that help people ease their lives.
          </p>
        </div>
        <div className="ImgTitle flex flex-col gap-10 w-full max-w-[350px] justify-center items-center">
          <img src={logo} alt="Amruta" className={`w-full max-w-[300px] h-full max-h-[450px] rounded-2xl`}/>
          <div>
          <h2 className='font-fontRale font-semibold'>Amruta Dharap</h2>
          <p className='text-xl'>Frontend Developer</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}