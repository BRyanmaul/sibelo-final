import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'
import Paginator from '@/Components/Paginator';
import moment from 'moment'


const Beasiswa = ({ auth, beasiswa, reqCategory, title, search }) => {
  const beasiswas = beasiswa.data
  console.log("isi Beasiswa ", beasiswa)

  return (
    <Authenticated user={auth.user}>
      <Head className="" title="Informasi Lomba" />
      <section className='b-2 h-full gradient-base logo w-full max-w-screen-full pb-2'>
        <h1 className='text-center py-7 text-4xl w-full md:text-5xl uppercase font-bold md:p-12 '>{title}</h1>
        {/* Search Bar */}
        <div className="flex justify-center items-center w-full pb-9   ">
          <form className="lg:w-1/2 w-4/5 ">
            <div className="form-control ">
              <div className="input-group ">
                {
                  reqCategory &&
                  <input type="hidden" name="category" defaultValue="" value={reqCategory} />
                }

                <input type="text" placeholder="Search…" className="w-full input input-bordered " name="search" defaultValue={search} />
                <button className="btn btn-square bg-secondary  ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>



              </div>
            </div>
          </form>
        </div>
        {/* Mapping */}
        {beasiswas.map((data, i) => {
          const excerpt = data.excerpt;
          if (excerpt != null) {
            var excerpts = excerpt.substr(0, 200);
            //......    
          }
          const storagePoster = "/storage/" + data.poster
          return (
            <>
              <div key={i} className='h-2/4 md:w-full xl:w-[1300px] max-w-full relative mx-auto border rounded-lg border-primary bg-orange-100/20'>
                <div className='lg:flex xl:justify-start justify-start items-center mb-6'>
                  {data.poster ?
                    <img src={storagePoster} className='w-auto h-fit xs:w-4/5 md:w-11/12  lg:aspect-square xl:w-fit xl:h-fit xl:aspect-square aspect-auto  md:aspect-video  m-10 mr-4 rounded-sm  mb-5' alt="" />
                    :
                    <img src="https://loremflickr.com/320/320/beasiswa" className='w-auto h-fit xs:w-4/5 md:w-11/12  lg:aspect-square xl:w-fit xl:h-fit xl:aspect-square aspect-auto  md:aspect-video  m-10 mr-4 rounded-sm  mb-5' alt="" />
                  }
                  <div className='flex items-center justify-center xs:px-12 lg:p-8 xl:pr-8 '>
                    <div>
                      <h1 className='lg:text-4xl md:text-3xl text-3xl '>{data.title}</h1>
                      <Link as='button' href={(`/beasiswa?category=${data.category.slug}`)}>
                        <h1 className='text-sm glass w-fit px-2 p-1 rounded-lg bg-primary/40 mt-1 hover:bg-secondary'>{data.category.name}</h1>
                      </Link>
                      <p className='pt-5 text-base lg:text-lg '>{excerpts}...</p>
                      <small className="block m-auto  text-base-300/90 font-bold text-sm  ">{moment(data.created_at).fromNow()}</small>
                      <Link href={route('beasiswa.show', { beasiswa: data.slug })}>
                        <button className='glass bg-primary hover:bg-orange-700 mt-5  px-8 p-1  text-emerald-100 normal-case text-base rounded-lg'>Baca Selengkapnya</button>
                      </Link>
                    </div>
                  </div>

                  <div className='mt-10 bg-slate-300' />
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
      {/* </div> */}


    </Authenticated>

  )
}

export default Beasiswa