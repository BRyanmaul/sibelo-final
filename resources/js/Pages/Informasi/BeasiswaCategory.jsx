import React, { useState } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'
import Paginator from '@/Components/Paginator';

const BeasiswaCategory = ({ auth, beasiswa, category, title, props }) => {
    console.log("isi Props Beasiswa Berdasarkan Category", beasiswa)
    console.log("Kategori", category)
    console.log("Isi Props", props)

    return (
        <Authenticated user={auth.user}>
            <Head className="" title="Informasi Beasiswa" />
            <section className='b-2 h-full gradient-base logo w-full max-w-screen-full pb-2'>
                <h1 className='text-center py-9 text-4xl w-full lg:text-5xl uppercase font-bold lg:p-32 lg:pl-20 lg:pb-10 lg:text-left md:p-12 3xl:pl-72'>{title} : <span className='text-orange-800 opacity-90'>{category}</span></h1>

                {/* Mapping */}
                {beasiswa.data.map((data, i) => {
                    const syarat = data.syarat;
                    if (syarat != null) {
                        var syarats = syarat.substr(0, 370);
                        //......    
                    }
                    const storagePoster = "/storage/" + data.poster
                    return (
                        <>
                            <div key={i} className='h-2/4 md:w-full xl:w-[1300px] max-w-full relative mx-auto border rounded-lg border-primary bg-orange-100/20'>
                                <div className='lg:flex xl:justify-start justify-start items-center mb-6'>
                                    {data.poster ?
                                        <img src={storagePoster} className='w-[320px] h-[320px] xs:w-4/5 md:w-11/12  lg:aspect-square lg:w-[320px] lg:h-[320px] aspect-auto md:aspect-video xl:aspect-square   m-10 mr-12 rounded-sm mb-5 xl:mr-4' alt="" />
                                        :
                                        <img src="https://loremflickr.com/320/320/beasiswa" className='w-auto h-auto xs:w-4/5 md:w-11/12 lg:aspect-square aspect-auto md:aspect-video xl:w-fit xl:h-fit xl:aspect-square  m-10 mr-12 rounded-sm mb-5 xl:mr-4' alt="" />
                                    }
                                    <div className='flex items-center justify-center xs:px-12 lg:p-8 xl:pr-8 '>
                                        <div>
                                            <h1 className='lg:text-3xl md:text-2xl text-3xl text-orange-950 font-medium '>{data.title}</h1>

                                            <p className='pt-5 text-base lg:text-lg '>{syarats}...</p>
                                            <Link href={route('beasiswa.show', { beasiswa: data.id })}>
                                                <button className='glass bg-primary hover:bg-orange-700 mt-5  px-8 p-1  text-emerald-100 normal-case text-base rounded-lg'>Baca Selengkapnya</button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='mt-9 bg-slate-300' />
                                </div>
                            </div>
                            <div className='mt-10' />
                        </>
                    )
                })
                }
                <div className='bg-transparent p-0 m-0'>
                    <Paginator meta={beasiswa} />
                </div>
            </section>
        </Authenticated>
    )
}

export default BeasiswaCategory