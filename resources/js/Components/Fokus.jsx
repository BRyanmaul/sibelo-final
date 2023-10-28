import { motion } from 'framer-motion'
import React from 'react'
import pp from './../../image/profile.png'
import logo from './../../image/logo_sibelo.png'
const Fokus = () => {
    return (
        <section>
            <motion.div className='h-full mb-10 relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <h3 className='absolute top-1 uppercase lg:tracking-[20px] tracking-wide text-gradient text-4xl md:text-5xl '>
                    Apa Fokus Utama Kami?
                </h3>

                <div className='relative w-full h-full flex overflow-y-hidden snap-x snap-mandatory z-20'>

                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen">

                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={logo}
                            alt="" width="400" height="280"
                        />

                        <div className='space-y-10 px-0 md:px-12 max-w-6xl  '>
                            <h4 className='lg:text-3xl text-2xl  font-semibold text-center'>
                                <span className="underline decoration-[#F7AB0A]/50 text-orange-700 text-2xl font-sans">
                                    Kami memberikan fasilitas atau jalan bagi Anda yang ingin mendapatkan informasi beasiswa dan lomba diantaranya:
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="w-full absolute top-[30%] dark-gradient2 left-0 h-[450px] -skew-y-12" />
            </motion.div>

        </section>
    )
}

export default Fokus