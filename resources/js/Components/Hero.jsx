import React from 'react'
import pic from './../../image/pic.jpg'
import logo from './../../image/logo_sibelo.png'
import { motion } from 'framer-motion'


const Hero = () => {
  return (

    <section id="home" className=" lg:mx-44  lg:container">
      <div className="flex lg:flex-none flex-wrap container">
        <div className="w-full self-center px-4 lg:block lg:w-1/2 py-16">
          <h1 className="text-5xl lg:text-7xl text-center text-slate-700">Selamat Datang di <span className="text-8xl bg-clip-text text-transparent dark-gradient font-semibold" > SIBELO </span></h1>
          <h1 className="text-3xl text-center">
            <span className="bg-clip-text text-transparent dark-gradient">S</span>istem <span className="bg-clip-text text-transparent dark-gradient">I</span>nformasi <span className="bg-clip-text text-transparent dark-gradient">Be</span>asiswa dan
            <span className="bg-clip-text text-transparent dark-gradient"> Lo</span>mba
          </h1>
          {/* Gambar pas mobile */}
          <div className="mt-10 lg:hidden ring-primary ring-offset-base-100 ring-offset-3 bg-transparent relative">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
                scale: 0.8
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={logo}
              alt="" width="400" height="280"
              className="scale-75 rounded-full p-11 shadow-lg shadow-amber-700 max-w-full mx-auto" />
          </div>


          <p className=" py-7 text-center "> Kebutuhan akan informasi sangat tinggi bagi mahasiswa, tidak terkecual informasi mengenai beasiswa dan lomba. Mahasiswa sangat peduli akan kualitas dirinya agar dapat bertahan dan menghadapi galapnya dunia kuliah bahkan kerja bila ia tidak dibekali oleh ilmu.</p>

          <div className='flex'>
            <a href="#" className='mx-auto font-thin shadow-cyan-200  rounded-lg lg:w-full  text-xl lg:text-2xl hover:shadow-2xl
                    text-cyan-100 bg-orange-700 hover:text-cyan-200 outline-2 hover:outline-4 ring-2 ring-secondary
                    bg-gradient-to-br from-secondary/10 to-primary opacity-70 px-28 py-2 hover:ease-in-out hover:scale-105 hover:opacity-90 text-center transition-all '>Lihat lebih lanjut</a>
          </div>

        </div>

        <div className="hidden lg:collapse w-full avatar self-center px-4 py-7 xl:scale-[0.87] lg:w-1/2 md:w-3/4 lg:p-0 lg:m-auto ">
          <div className="mt-10 ring-primary ring-offset-base-100 ring-offset-3 bg-transparent relative">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
                scale: 0.8
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={logo}
              alt=""
              className="scale-75 rounded-full p-11 shadow-lg  shadow-amber-700 max-w-full mx-auto" />

          </div>

        </div>


      </div>


    </section>

  )
}

export default Hero