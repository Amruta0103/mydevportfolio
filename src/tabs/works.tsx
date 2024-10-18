export default function Works(){
  return(
    <div className="WorksContainer h-full w-full flex justify-center items-center bg-gradient-to-t from-white via-[#FF99A0] to-white py-[90px]">
      <div className="AboutTab w-full h-full p-2 max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1024px]">
        <div className="flex flex-col gap-6">
        <h2 className="font-fontRale self-start">Works</h2>
        <div className="flex self-center">
          <div className="Card bg-white rounded-2xl border-dashed border-[#FF99A0] border-4 w-[350px] h-[450px] flex flex-col justify-end items-start">
            <div className="titles flex flex-col p-6">
              <h3 className="font-fontJose">Title</h3>
              <p className="font-fontJetMono text-lg leading-5">description</p>
            </div>
          </div>
        </div>
        <div className="flex self-end">arrows</div>
        </div>
      </div>
    </div>
  )
}