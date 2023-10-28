import React from 'react'
import Beasiswa1 from '../../../image/Beasiswa1.png'
import Authenticated from '@/Layouts/AuthenticatedLayout';

const BeasiswaDetail = ({ auth, beasiswa, title }) => {
  console.log('isi beasiswa ', beasiswa)
  const storagePoster = "/storage/" + beasiswa.poster
  return (
    <Authenticated user={auth.user}>
      <section className='w-full h-full gradient-base pb-24'>
        <h1 className='pl-36 lg:text-4xl sm:text:3xl pt-20 font-bold uppercase'>{title}</h1>
        <container className="h-screen mx-20 w-full border-black">
          <div className='mx-32 border h-full border-black'>
            <div className='flex-col justify-start '>
              <h1 className='ml-12 mt-9 lg:text-3xl sm:text-2xl w-full '>{beasiswa.title}</h1>
              <div className='flex'>
                {
                  beasiswa.poster ?
                    <img src={storagePoster} className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                    :
                    <img src="https://loremflickr.com/320/240/beasiswa" className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                }
                <div className='flex-col w-1/2 justify-between'>
                  <h2 className='text-lg pt-5'>Nama Beasiswa : {beasiswa.nama_beasiswa}</h2>
                  <h2 className='text-lg '>Jadwal Berlangsung : {beasiswa.tanggal_mulai_b} - {beasiswa.tanggal_berakhir_b}</h2>
                  <h2 className='text-lg '>Link Beasiswa  : <span className='inline underline'> https://register.djarumbeasiswaplus.org</span></h2>
                </div>
              </div>
            </div>
            <div className='pt-8 mx-16'>
              <h1 className='text-xl'>  Deskripsi : </h1>
              <article className="text-justify mb-14 mt-4 mx-12 "
                dangerouslySetInnerHTML={{ __html: beasiswa.body }}
              />


            </div>
          </div>

        </container>
      </section>
    </Authenticated>
  )
}

export default BeasiswaDetail
