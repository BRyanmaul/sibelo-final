import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { motion } from 'framer-motion';
import logo from './../../image/logo_sibelo.png'
import { useTypewriter } from 'react-simple-typewriter'

const About = (props) => {
  const [text, count] = useTypewriter({
    words: ["Sibelo adalah Website yang menyediakan informasi Lomba dan Beasiswa terbaru serta memberikan  fitur  pencatatan diri  untuk Mahasiswa UNJA guna membantu mahasiswa untuk studi lanjutnya ", "Website ini dibuat karena kebutuhan akan informasi sangat tinggi bagi mahasiswa, tidak terkecuali informasi mengenai beasiswa dan lomba. Mahasiswa sangat peduli akan kualitas dirinya agar dapat bertahan dan menghadapi galapnya dunia kuliah bahkan kerja bila ia tidak dibekali oleh ilmu. "],
    typeSpeed: 30,
    deleteSpeed: 0,
    Loop: false,
  })


  return (
    <AuthenticatedLayout user={props.auth.user}>
      <section className='w-full h-full gradient-base'>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="flex  relative flex-col  h-screen text-center md:text-left 
        md:flex-row max-w-7xl px-3 justify-evenly mx-auto items-center  ">
          <h3 className="absolute top-14 sm:top-28 uppercase bold  tracking-[12px] text-primary lg:text-6xl xl:text-7xl text-5xl text-gradient  "> Tentang SIBELO</h3>

          <div className='lg:w-[1200px] xl:flex '>
            <motion.img
              initial={{
                x: -200,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={logo}
              // 
              className=" flex-shrink-0 w-64 h-64  m-auto mt-96 xl:mt-0 rounded-full 
            md:rounded-lg md:w-64 md:h-95 xl:w-[400] xl:h-[300px] xl"
            />
            <div className='space-y-7 w-auto px-0 lg:pt-14 md:px-10 pb-64 xl:pb-0 md:text-center xl:text-left'>
              <h4 className='text-3xl md:text-4xl  font-semibold'>
                Ini adalah {" "}
                <span className="underline decoration-primary/70 pb-2">sedikit </span>
                <span className='bg-clip-text gradient-base '>
                  background
                </span> website ini
              </h4>
              <p className='text-lg md:text-xl w-full'>
                {text}
              </p>
            </div>

          </div>

        </motion.div>
      </section>

    </AuthenticatedLayout>
  )
}

export default About