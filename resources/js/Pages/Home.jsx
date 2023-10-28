import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import Hero from '../Components/Hero'
import foto from './../../image/depanunja.png'
import foto2 from './../../image/foto_home2.jpg'
import foto3 from './../../image/xul.jpg'
import foto4 from './../../image/pic.jpg'
import Fokus from '@/Components/Fokus';
import { useTypewriter } from 'react-simple-typewriter'
import Hero2 from '@/Components/Hero2';


export default function Home({ auth }) {
  const [text, count] = useTypewriter({
    words: ["Membantu Meningkatkan kualitas serta membekalkan diri mahasiswa agar dapat berhasil di dunia kampus ataupun kerja. "],
    typeSpeed: 40,
    deleteSpeed: 0,
  })

  // console.log(usePage().props)
  return (
    <div className="h-screen w-screen">
      <AuthenticatedLayout user={auth.user}  >
        <Head className="" title="Home" />


        <section className='gradient-base  hover:blur-none '>
          <Hero className=" z-50 border-2 pb-20" />
        </section>

        <section className='container items-start sm:p-8 my-12'>
          <Hero2 />
        </section>

        <section className='lg:w-[900px] mx-auto rounded-lg my-16 justify-center h-fit lg:flex bg-base-100/40 '>
          <div className="carousel flex-none w-fit rounded-lg ">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={foto} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={foto2} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={foto3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={foto4} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>

          </div>

          <div className=" bg-orange-50 flex-none block  lg:w-96 p-8 py-24 ">
            <h2 className="text-gradient text-3xl uppercase pb-5 ">Sibelo</h2>
            <h2 className="">Penyedia Informasi Beasiswa dan Lomba Terbaru untuk mempersiapkan studi lanjut di Universitas Jambi</h2>
            <div className="py-5 ">
              <h1 className='text-primary text-gradient text-xl'>VISI dan MISI</h1>
              <p className='mt-4  text-gray-700 text-base'>{text}</p>
              <Link href={route('about')}>
                <button className="btn glass bg-orange-400 text-orange-800 mt-3  hover:bg-primary hover:scale-105 text-xl">Lihat <span>
                </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className='flex py-24'>
          <Fokus />
        </section>


        <section className="carousel w-full">
          <div id="item1" className="carousel-item w-screen">
            <div className="hero min-h-screen bg-base-100/10">
              <div className='dark-gradient border2 shadow-2xl border-transparent bg-clip-border'></div>
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold  mx-20 flex">Informasi Beasiswa</h1>
                  <p className="py-6">Beasiswa pemerintah, swasta, tidak mampu, hingga prestasi</p>
                  <button className="btn-glass">Lihat Beasiswa Terkini</button>
                </div>
              </div>
            </div>
          </div>

          <div id="item2" className="carousel-item w-full">
            <div className="hero min-h-screen  bg-base-100/10">
              <div className='dark-gradient border2 shadow-2xl border-transparent bg-clip-border'></div>
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold flex mx-20">Informasi Lomba</h1>
                  <p className="py-6">Lomba akademik, non-akademik, nasional, hingga internasional.</p>
                  <button className="btn-glass">Lihat Lomba Terkini</button>
                </div>
              </div>
            </div>

          </div>

          <div id="item3" className="carousel-item w-full ">
            <div className="hero min-h-screen  bg-base-100/10">
              <div className='dark-gradient border2 shadow-2xl border-transparent bg-clip-border'></div>
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold flex mx-20">Pencatatan Diri</h1>
                  <p className="py-6">Ingin memperkenalkan diri anda akan prestasi yang dimiliki?
                    Lakukan pencatatan sesuai kategori yang anda miliki!.</p>
                  <Link href={route('catatan')}>
                    <button className="btn-glass">Catat Diri</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="flex justify-center   w-full py-2 pt-6 gap-2 mb-24">
          <a href="#item1" className="btn gradient-base btn-xl">1</a>
          <a href="#item2" className="btn gradient-base btn-xl">2</a>
          <a href="#item3" className="btn gradient-base btn-xl">3</a>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}   
