import React, { useEffect } from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


const TambahBeasiswa = (props) => {
  const { data, setData, post, errors, processing, reset, recentlySuccessful } = useForm({
    nama_beasiswa: '',
    penyelenggara_beasiswa: '',
    tanggal_mulai_b: '',
    tanggal_berakhir_b: '',
    poster: null,
  });

  console.log("data props terakhir: ", props);
  console.log("message: ", props.flash.message);
  console.log("Nama Beasiswa: ", props.nama_beasiswa);
  console.log("Penyelenggara: ", props.penyelenggara_beasiswa);
  const submit = (e) => {
    e.preventDefault();
    post(route('ajukan.beasiswa', data, {
      forceFormData: true,
      _method: 'post',
    }));
    reset('nama_beasiswa', 'penyelenggara_beasiswa', 'tanggal_mulai_b', 'tanggal_berakhir_b');
  };

  useEffect(() => {
    return () => {
      reset('nama_beasiswa', 'penyelenggara_beasiswa', 'tanggal_mulai_b', 'tanggal_berakhir_b',);
    };
  }, []);

  const message = props.flash.message

  return (
    <AuthenticatedLayout user={props.auth.user}>
      <section className=' gradient-base  -mb-7 p-2 pb-13'>

        <div className="container bg-white  max-w-xl border  border-secondary rounded-lg mx-auto p-11 my-7">
          <div className='bold text-4xl  py-7 bg-clip-text text-transparent dark-gradient text-left'>Pengajuan Catatan Beasiswa</div>
          {/* <input type="text" placeholder="Masukkan Nama Beasiswa" className="input input-bordered input-primary w-full max-w-xs" /> */}
          <form onSubmit={submit}>
            {/* Nama Beasiswa */}
            <div>
              <InputLabel htmlFor="nama_beasiswa" value="Nama Beasiswa" />
              <TextInput
                id="nama_beasiswa"
                className="mt-2 block w-full"
                placeholder="Masukkan nama beasiswa"
                value={data.nama_beasiswa}
                onChange={(e) => setData('nama_beasiswa', e.target.value)}
                isFocused
                autoComplete="nama_beasiswa"
              />
              <InputError className="mt-2" message={errors.nama_beasiswa} />
            </div>

            {/* Asal Beasiswa */}
            <div>
              <InputLabel htmlFor="penyelenggara_beasiswa" value="Asal/Penyelenggara Beasiswa" />
              <TextInput
                type="text"
                name="penyelenggara_beasiswa"
                value={data.penyelenggara_beasiswa}
                placeholder="Masukkan nama penyelenggara beasiswa"
                className="mt-2 block w-full"
                onChange={(e) => setData('penyelenggara_beasiswa', e.target.value)}
              />
              <InputError className="my-2" message={errors.penyelenggara_beasiswa} />
            </div>

            {/* Tanggal Awal */}
            <InputLabel htmlFor="tanggal_mulai_b" value="Tanggal Mulai Beasiswa" />
            <input
              type="date"
              name="tanggal_mulai_b"
              value={data.tanggal_mulai_b}
              onChange={(e) => setData('tanggal_mulai_b', e.target.value)}
              id="tanggal_mulai_b"
              className='my-2  rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
              focus:border-none focus:border-primary'
            />
            <InputError className="my-2" message={errors.tanggal_mulai_b} />


            {/* Tanggal Akhir */}
            <InputLabel htmlFor="tanggal_berakhir_b" value="Tanggal Akhir Beasiswa" />
            <input
              type="date"
              // {data.tanggal_mulai_b && disabled  }
              min={data.tanggal_mulai_b}
              value={data.tanggal_berakhir_b}
              name="tanggal_berakhir_b"
              id="tanggal_berakhir_b"
              className='my-2  rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
            focus:border-none focus:border-primary'
              onChange={(e) => setData('tanggal_berakhir_b', e.target.value)}
            />
            <InputError className="my-2" message={errors.tanggal_berakhir_b} />


            {/* Poster */}
            <InputLabel htmlFor="poster" value="Lampiran" />
            <input
              type="file"
              name='poster'
              id='poster'
              onChange={(e) => setData('poster', e.target.files[0])}
              className="mt-2 block file-input text-cyan-50 file-input-bordered file-input-primary w-full max-w-xs" />

            {/* Button */}
            <div className="flex items-center gap-4 py-3">
              <button type className='btn-glass ml-3 scale-125 rounded-xl  
                         hover:shadow-2xl hover:scale-[1.4] transition-all ease-in-out duration-500' htmlFor="my-modal-6" disabled={processing}>Ajukan
              </button>
              <Transition
                show={recentlySuccessful}
                enterFrom="opacity-0"
                leaveTo="opacity-0"
                className="transition ease-in-out"
              >
                {/* The button to open modal */}
                {/* <label htmlFor="my-modal-6" className="btn">open modal</label> */}

                {/* Put this part before </body> tag */}
                <input type="checkbox" checked id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle ">
                  <div className="modal-box ">
                    <h3 className="font-bold text-lg">{message}</h3>
                    <p className="py-4">Silahkan menunggu hingga datamu diverifikasi</p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn dark:bg-cyan-900">Yay!</label>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </form>


        </div>
      </section>
    </AuthenticatedLayout>
  )
}

export default TambahBeasiswa