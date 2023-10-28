import React from 'react'
import { Head } from "@inertiajs/react";
import { Link, usePage, } from '@inertiajs/react';
import route from 'ziggy-js';

const ViewLomba = ({ title, lomba, category }) => {
  const message = usePage().props.flash.message;
  const storagePoster = "/storage/" + lomba.poster
  return (
    <section>
      <Head title="Dashboard Admin" />
      <section>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl ">Postingan Lomba</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>


        {/* Content */}
        <section className='w-full h-full gradient-base pb-24'>
          <h1 className='pl-36 lg:text-4xl sm:text:3xl pt-20 font-bold uppercase'>Informasi Lomba</h1>

          <Link href={route('show.informasi')} className='uppercase text-2xl flex justify-end xl:mr-32 -mt-7 '>Back
            <svg className="ml-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </Link>
          <container className="h-screen mx-20 w-full border-black">
            <div className='mx-32 border h-full border-black'>
              <div className='flex-col justify-start '>
                <h1 className='ml-12 mt-9 lg:text-3xl sm:text-2xl w-1/3 md:w-full '>{lomba.title}</h1>


                <div className='flex items-center mx-auto '>
                  {
                    lomba.poster ?
                      <img src={storagePoster} className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                      :
                      <img src="https://loremflickr.com/320/240/kompetisi" className=' mx-12 mt-4 w-72 h-72 ' alt="" />
                  }
                  <div className='flex-col w-1/3 justify-between '>
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

      </section>

    </section>
  )
}

export default ViewLomba