import React from 'react'

const Hero2 = () => {
  return (
    <section className="w-full flex flex-row flex-wrap justify-start items-center bg-white rounded-2xl p-8 shadow-md gap-5">
      <div className="flex flex-col flex-1 justify-center items-center  ">
        <div className="bg-[#33363F] text-white flex-1 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:border-2 hover:border-primary hover:scale-105">
          <h1 className="font-bold text-xl mb-4">INFORMASI LOMBA</h1>
          <p className="mb-8">Lomba akademik, non-akademik, nasional & Internasional</p>
          <a className="bg-orange1 p-3 rounded-2xl text-white hover:bg-[#BA3636]" href="/browse"> Selengkapnya</a>
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="bg-[#33363F] text-white flex-1 rounded-2xl p-8 text-center shadow-md py-11 hover:shadow-2xl hover:border-2 hover:border-primary hover:scale-105">
          <h1 className="font-bold text-xl mb-4">INFORMASI BEASISWA</h1>
          <p className="mb-3 xl:mb-8">Beasiswa pemerintah, swasta, tidak mampu, hingga prestasi</p>
          <a className="bg-orange1 p-3 rounded-2xl text-white hover:bg-[#BA3636]" href="/browse2"> Selengkapnya</a>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="bg-[#33363F] text-white flex-1 rounded-2xl p-8 py-11 text-center shadow-md hover:shadow-2xl hover:border-2 hover:border-primary hover:scale-105">
          <h1 className="font-bold text-xl mb-4">CATAT LOMBA</h1>
          <p className="mb-8">Lakukan pencatatan lomba yang anda miliki!</p>
          <a className="bg-orange1 p-3 rounded-2xl text-white hover:bg-[#BA3636]" href="/catat-lomba">Catat Lomba!</a>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="bg-[#33363F] text-white flex-1 rounded-2xl p-8 py-11 text-center shadow-md hover:shadow-2xl hover:border-2 hover:border-primary hover:scale-105">
          <h1 className="font-bold text-xl mb-4">CATAT BEASISWA</h1>
          <p className="mb-3 xl:mb-8">Lakukan pencatatan beasiswa yang anda miliki!</p>
          <a className="bg-orange1 p-3 rounded-2xl text-white hover:bg-[#BA3636]" href="/catat-beasiswa">Catat Beasiswa!</a>
        </div>
      </div>
    </section>
  )
}

export default Hero2