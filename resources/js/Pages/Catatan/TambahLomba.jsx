import React, { useState } from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


const TambahLomba = (props) => {
  const { data, setData, reset, post, errors, processing, recentlySuccessful } = useForm({
    nama_lomba: '',
    jenis: '',
    penyelenggara_lomba: '',
    tanggal_mulai_l: '',
    tanggal_berakhir_l: '',
    prestasi: '',
    dosen_pembimbing: '',
    sertif: null,
    bukti: null,
    message: props.flash.message,

  });

  // Tampilkan data di console
  console.log("data props terakhir: ", props);

  //Untuk Handle Submit Form       
  const submit = (e) => {
    e.preventDefault();
    post(route('ajukan.lomba', data, {
      forceFormData: true,
      _method: 'put',
    }));
    reset('nama_lomba', 'jenis', 'penyelenggara_lomba', 'tanggal_mulai_l', 'tanggal_berakhir_l', 'prestasi', 'dosen_pembimbing', 'sertif', 'bukti');
  };

  function previewSertif(e) {
    const image = document.querySelector('#sertif')
    setData('sertif', e.target.files[0])
    const imgPreview = document.querySelector('.img-preview')
    const Reader = new FileReader();
    Reader.readAsDataURL(image.files[0]);
    Reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
  };

  function previewBukti(e) {
    const image = document.querySelector('#bukti')
    setData('bukti', e.target.files[0])
    const imgPreview = document.querySelector('.img-preview2')
    const Reader = new FileReader();
    Reader.readAsDataURL(image.files[0]);
    Reader.onload = function (e) {
      imgPreview.src = e.target.result;
    };
  };
  const [isNotif, setIsNotif] = useState(false)

  return (
    <AuthenticatedLayout className="" user={props.auth.user}>
      <section className=' gradient-base -mb-7 p-2'>

        <div className="container bg-blue-50  max-w-xl border  border-secondary rounded-lg mx-auto p-11 my-7">
          <div className='bold text-4xl  py-7 bg-clip-text text-transparent dark-gradient text-center'>Ajukan Catatan Menang Lomba</div>

          {/* <input type="text" placeholder="Masukkan Nama lomba" className="input input-bordered input-primary w-full max-w-xs" /> */}
          <form onSubmit={submit} encType='multipart/form-data'>
            {/* Nama lomba */}
            <div>
              <InputLabel htmlFor="nama_lomba" value="Nama Lomba" />
              <TextInput
                id="name_lomba"
                name="nama_lomba"
                className="mt-2 block w-full"
                value={data.nama_lomba}
                onChange={(e) => setData('nama_lomba', e.target.value)}
                required
                isFocused
              />
              <InputError className="mt-2" message={errors.name} />
            </div>

            {/* Jenis */}
            <div>
              <InputLabel htmlFor="jenis" value="Jenis Lomba" className="pt-2" />
              <TextInput
                name="jenis"
                id="jenis"
                type="text"
                className="mt-2 block w-full"
                value={data.jenis}
                onChange={(e) => setData('jenis', e.target.value)}
                required
              />
              <InputError className="my-2" message={errors.jenis} />
            </div>

            {/* Asal lomba */}
            <div>
              <InputLabel htmlFor="penyelenggara_lomba" value="Penyelenggara Lomba" className="pt-2" />
              <TextInput
                name="penyelenggara_lomba"
                id="penyelenggara_lomba"
                type="text"
                className="mt-2 block w-full"
                value={data.penyelenggara_lomba}
                onChange={(e) => setData('penyelenggara_lomba', e.target.value)}
                required
              />
              <InputError className="my-2" message={errors.penyelenggara_lomba} />
            </div>

            {/* Tanggal Awal */}
            <InputLabel htmlFor="tanggal_mulai_b" value="Tanggal Mulai Lomba" className="pt-2" />
            <input
              name="tanggal_mulai_l"
              type="date"
              className='my-2  rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
              focus:border-none focus:border-primary'
              id="tanggal_mulai_b"
              value={data.tanggal_mulai_l}
              onChange={(e) => setData('tanggal_mulai_l', e.target.value)} />
            <InputError className="my-2" message={errors.tanggal_mulai_l} />

            {/* Tanggal Akhir */}
            <InputLabel htmlFor="tanggal_berakhir_l" value="Tanggal Akhir Lomba" className="pt-2" />
            <input
              name="tanggal_berakhir_l"
              id="tanggal_berakhir_l"
              type="date"
              min={data.tanggal_mulai_l}
              className='my-2  rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
              focus:border-none focus:border-primary/20'
              onChange={(e) => setData('tanggal_berakhir_l', e.target.value)}
            />
            <InputError className="my-2" message={errors.tanggal_berakhir_l} />


            {/* Prestasi */}
            <InputLabel className='pt-2' htmlFor="prestasi" value="Prestasi" />
            <select name='prestasi' id='prestasi' onChange={(e) => setData('prestasi', e.target.value)}
              className="select select-primary bg-primary/5 w-full max-w-xs font-thin text-emerald-800 focus:bg-primary/40 ">
              <option disabled selected className='bg-primary/5 '>Pilih Prestasi yang Anda Capai</option>
              <option>Juara 1</option>
              <option>Juara 2</option>
              <option>Juara 3</option>
              <option>Juara Harapan</option>
              <option>Lainnya</option>
            </select>
            <InputError className="my-2" message={errors.prestasi} />

            {/* Dosen Pembimbing */}
            <div>
              <InputLabel htmlFor="dosen_pembimbing" value="Dosen Pembimbing(opsional)" className="pt-3" />
              <TextInput
                name="dosen_pembimbing"
                id="dosen_pembimbing"
                type="text"
                className="mt-2 block w-full"
                value={data.dosen_pembimbing}
                onChange={(e) => setData('dosen_pembimbing', e.target.value)}
                required
              />
              <InputError className="my-2" message={errors.dosen_pembimbing} />
            </div>

            {/* Sertifikat */}

            <InputLabel className='mt-2' htmlFor="sertif" value="Sertifikat" />
            {/* <img className={data.sertif ? 'img-preview w-72 h-72' : 'img-preview'} /> */}
            <input type="file" name='sertif' id='sertif' onChange={previewSertif} className="border-t-primary border-l-primary border-r-secondary border-b-secondary rounded-lg focus:border-none focus:border-primary  mt-2 block file-input text-emerald-800 font-thin text-sm file-input-bordered file-input-primary w-full max-w-xs" />
            <InputError className="my-2" message={errors.sertif} />


            {/* Bukti Kegiatan */}
            <InputLabel className='mt-2' htmlFor="bukti" value="Bukti Kegiatan" />
            {/* <img className={data.bukti ? 'img-preview2 w-72 h-72' : 'img-preview2'} /> */}
            <input type="file" name='bukti' id='bukti' onChange={previewBukti} className="border-t-primary border-l-primary border-r-secondary border-b-secondary rounded-lg focus:border-none focus:border-primary  mt-2 block file-input text-emerald-800 font-thin text-sm file-input-bordered file-input-primary w-full max-w-xs" />
            <InputError className="my-2" message={errors.bukti} />

            {/* Button */}
            <div className="flex items-center gap-4 py-3">
              <button type='submit' className='btn-glass ml-3 scale-125 rounded-xl hover:shadow-2xl hover:scale-[1.4] transition-all ease-in-out duration-500' htmlFor="my-modal-6" disabled={processing}>Ajukan
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
                    <h3 className="font-bold text-lg">Data mu berhasil diajukan</h3>
                    <p className="py-4">Silahkan menunggu hingga datamu diverifikasi</p>
                    <div className="modal-action">
                      <label htmlFor="my-modal-6" className="btn bg-cyan-900">Yay!</label>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </form>



        </div>
      </section>
    </AuthenticatedLayout >
  )
}

export default TambahLomba