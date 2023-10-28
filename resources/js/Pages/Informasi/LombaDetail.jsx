import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

const LombaDetail = ({ auth, lomba, category }) => {
  console.log('Isi Lomba : ', lomba)
  console.log('Isi Kategori : ', category)
  const storagePoster = "/storage/" + lomba.poster
  return (
    <Authenticated user={auth.user}>
      <section className='w-full h-full gradient-base pb-24'>
        <h1 className='pl-36 lg:text-4xl sm:text:3xl pt-20 font-bold uppercase'>Informasi Lomba</h1>
        <container className="h-screen mx-20 w-full border-black">
          <div className='mx-32 border h-full border-black'>
            <div className='flex-col justify-start '>
              <h1 className='ml-12 mt-9 lg:text-3xl sm:text-2xl w-1/3 md:w-full '>{lomba.title}</h1>
              <div className='flex'>
                {
                  lomba.poster ?
                    <img src={storagePoster} className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                    :
                    <img src="https://loremflickr.com/320/240/kompetisi" className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                }
                <div className='flex-col w-1/3 justify-between'>
                  <h2 className='text-lg pt-5'>Nama Lomba : {lomba.nama_lomba}</h2>
                  <h2 className='text-lg '>Jadwal Berlangsung : {lomba.tanggal_mulai_l} - {lomba.tanggal_berakhir_l}</h2>
                  <h2 className='text-lg '>Jenis Lomba  : <Link as="a" className='text-primary/80 underline' href={(`/lomba/categories/${category.slug}`)}>{category.name}</Link></h2>
                  <h2 className='text-lg '>Sertifikasi Lomba  : {lomba.sertif}</h2>
                  <span className='text-lg '>Link Lomba   </span>: <span className='w-1/12 text-lg underline hover:text-primary'> https://docs.google.com/forms/d/e/


                    <h2 className='underline hover:text-primary' >
                      1FAIpQLSfD0OaVn74I22UE8VwAWXFg5RKxpeToZttLeYKvHUlwi5XZeA/viewform</h2></span>
                </div>
              </div>
            </div>
            <div className='pt-8 mx-16'>

              <article className="text-justify mb-14 mt-4 mx-12 "
                dangerouslySetInnerHTML={{ __html: lomba.body }}
              />

            </div>
          </div>

        </container>
      </section>
    </Authenticated>
  )
}

export default LombaDetail
