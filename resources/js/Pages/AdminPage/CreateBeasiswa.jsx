import React, { useRef, useEffect } from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Layouts/Navbar';

const CreateBeasiswa = (props) => {
    const user = usePage().props.auth.user;
    const message = props.flash.message
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: '',
        nama_beasiswa: '',
        slug: '',
        category_id: null,
        penyelenggara_beasiswa: '',
        tanggal_mulai_b: '',
        tanggal_berakhir_b: '',
        body: '',
        poster: null,
        sertif: '',

        // poster Poster
    });

    // console.log('title : ', data.title);

    //Untuk Handle Submit Form 
    const submit = (e) => {
        e.preventDefault();
        post(route('posting.beasiswa', data, {
            // preserveState: false,

            forceFormData: true,
            // _method: 'put'
        }));
    };



    // Trix Editor
    const trixInput = useRef('');
    if (trixInput.current != '') {
        trixInput.current.addEventListener('trix-change',
            (e) => setData('body', e.target.value)
        )
    }



    document.addEventListener('trix-file-accept', function (e) {
        e.preventDefault()
    })

    //Create Slug 
    const nama_beasiswa = document.querySelector('#nama_beasiswa');
    const slug = document.querySelector('#slug');
    if (nama_beasiswa != null) {
        nama_beasiswa.addEventListener('change', function (e) {
            fetch('/administrator/beasiswa/create/createSlug?nama_beasiswa=' + nama_beasiswa.value)
                .then(response => response.json())
                .then(data => slug.value = data.slug)
                .catch(err => {
                    console.log('error making slug', err);
                })
        })
        console.log('slug', slug.value)
        data.slug = slug.value
    }

    console.log('isi body : ', data.body)
    console.log('isi title : ', data.title)
    return (
        <>
            <Head title="Dashboard Admin" />
            <section className='w-full h-full pb-3'>
                <Navbar />
                {/* Content */}
                <section className="drawer drawer-mobile h-full ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center pt-9 gradient-base   rounded-lg">
                        {/* <!-- Page content here --> */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        <h1 className='bg-clip-text text-transparent text-5xl dark-gradient3 pb-10'>Buat Postingan Beasiswa</h1>
                        <div className="mockup-window w-4/5 h-auto border bg-base-300 mb-24">
                            <div className="flex justify-center px-4 py-16 bg-base-200 ">

                                {/* FORM */}
                                <form onSubmit={submit} className='w-[600px]' encType="multipart/form-data">
                                    {/* Judul Postingan */}
                                    <div>
                                        <InputLabel htmlFor="title" value="Judul Postingan" />
                                        <TextInput
                                            id="title"
                                            name="title"
                                            className="my-2 block bg-base-100 w-full"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            isFocused
                                            placeholder="Masukkan Judul Postingan"
                                        />
                                        <InputError className="mt-2" message={errors.title} />
                                    </div>

                                    {/* Nama beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="nama_beasiswa" value="Nama Beasiswa" />
                                        <TextInput
                                            id="nama_beasiswa"
                                            name="nama_beasiswa"
                                            value={data.nama_beasiswa}
                                            type="text"
                                            className="my-2 block w-full bg-base-100"
                                            onChange={(e) => setData('nama_beasiswa', e.target.value)}
                                            placeholder="Masukkan nama beasiswa"
                                        />
                                        <InputError className="my-2" message={errors.nama_beasiswa} />
                                    </div>

                                    {/* Slug */}
                                    <div>
                                        <InputLabel htmlFor="slug" value="Slug" />
                                        <TextInput
                                            id="slug"
                                            name="slug"
                                            type="text"
                                            className="my-2 block w-full bg-base-100"
                                            placeholder="Masukkan Slug"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                        />
                                        <InputError className="my-2" message={errors.slug} />
                                    </div>

                                    {/* Kategori  */}
                                    <div className='my-2'>
                                        <InputLabel htmlFor="category_id" value="Kategori Beasiswa" />
                                        <select className="select select-primary w-full max-w-xs font-thin" name="category_id" id="category_id"
                                            value={data.category_id}
                                            onChange={(e) => setData('category_id', e.target.value)}>
                                            <option aria-readonly defaultValue={0} disabled >Set Kategori</option>
                                            <option value={11}>Pemerintah</option>
                                            <option value={12}>Swasta</option>
                                            <option value={13}>Riset</option>
                                            <option value={14}>Pertukaran Pelajar</option>
                                            <option value={15}>LPDP</option>
                                            <option value={16}>Ikatan Dinas</option>
                                            <option value={17}>Lainnya</option>
                                        </select>
                                        <InputError className="my-2" message={errors.category_id} />
                                    </div>

                                    {/* Penyelenggara Beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="penyelenggara_beasiswa" value="Penyelenggara Beasiswa" />
                                        <TextInput
                                            id="penyelenggara_beasiswa"
                                            name="penyelenggara_beasiswa"
                                            type="text"
                                            className="my-2 block w-full bg-base-100"
                                            value={data.penyelenggara_beasiswa}
                                            onChange={(e) => setData('penyelenggara_beasiswa', e.target.value)}
                                            placeholder="Masukkan penyelenggara beasiswa"
                                        />
                                        <InputError className="my-2" message={errors.penyelenggara_beasiswa} />
                                    </div>

                                    {/* Tanggal Mulai beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="tanggal_mulai_b" value="Tanggal Mulai Beasiswa" />
                                        <input
                                            id="tanggal_mulai_b"
                                            name="tanggal_mulai_b"
                                            type="date"
                                            className="my-2 block w-full bg-base-100"
                                            value={data.tanggal_mulai_b}
                                            onChange={(e) => setData('tanggal_mulai_b', e.target.value)}
                                            placeholder="Masukkan Tanggal Mulai Beasiswa"

                                        />
                                        <InputError className="my-2" message={errors.tanggal_mulai_b} />
                                    </div>

                                    {/* Tanggal Berakhir Beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="tanggal_berakhir_b" value="Tanggal Berakhir Beasiswa" />
                                        <input
                                            id="tanggal_berakhir_b"
                                            name="tanggal_berakhir_b"
                                            type="date"
                                            min={data.tanggal_mulai_b}
                                            className="my-2 block w-full bg-base-100"
                                            value={data.tanggal_berakhir_b}
                                            onChange={(e) => setData('tanggal_berakhir_b', e.target.value)}
                                            placeholder="Masukkan tanggal_berakhir_b"
                                        />
                                        <InputError className="my-2" message={errors.tanggal_berakhir_b} />
                                    </div>

                                    {/* Sertif */}
                                    <div className='my-2'>
                                        <InputLabel htmlFor="sertif" value="Sertifikasi" />
                                        <select name="sertif" id="sertif" className="select select-primary w-full max-w-xs font-thin " onChange={(e) => setData('sertif', e.target.value)}>
                                            <option disabled selected className=''>Set Sertifikasi</option>
                                            <option>Ada</option>
                                            <option>Tidak Ada</option>
                                        </select>
                                        <InputError className="my-2" message={errors.sertif} />
                                    </div>


                                    {/* body */}
                                    <div className="w-fit">
                                        <InputLabel className="my-2" htmlFor="body" value="Deskripsi" />
                                        <TextInput type="hidden" id="body" className="w-full bg-base-100 " placeholder="body" onChange={(e) => setData('body', e.target.value)} />
                                        <trix-editor input="body" ref={trixInput} placeholder="Body"
                                            className="w-full bg-primary" ></trix-editor>
                                        <InputError className="my-2" message={errors.body} />
                                    </div>

                                    {/* Gambar Poster*/}
                                    <InputLabel className='my-2' htmlFor="poster" value="Gambar Untuk Postingan" />
                                    <input type="file" name='poster' id='poster'
                                        onChange={(e) => setData('poster', e.target.files[0])}
                                        className="my-2 block file-input font-thin text-sm file-input-bordered file-input-primary w-full max-w-xs" />
                                    <InputError className="my-2" message={errors.poster} />

                                    {/* Button */}
                                    <button type='submit' href="#my_modal_8" className="my-13 btn-glass">Posting
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>

                                    <div className="modal" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-gray-700">{message}</h3>
                                            <p className="py-4"></p>
                                            <div className="modal-action">
                                                <a href="#" className="btn">OK!</a>
                                            </div>
                                        </div>
                                    </div>


                                    {message &&
                                        <div className="alert alert-success bg-base-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="w-full">{message}</span>
                                        </div>}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* SideBar */}
                    <sidebar className="drawer-side">
                        <ul className="menu p-3 w-64 bg-base-100 text-base-content">
                            {/* <!-- Sidebar content here --> */}
                            <Link href={route('dashboard.admin')} active={route().current('dashboard.admin')} className={route().current('dashboard.admin') ? 'bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                                <li><a>Pengajuan Mahasiswa</a></li>
                            </Link>

                            <Link href={route('show.informasi')} active={route().current('create.beasiswa')} className={route().current('create.beasiswa') ? 'bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                                <li><a>Postingan</a></li>
                            </Link>
                        </ul>
                    </sidebar>
                </section>
            </section>
        </>
    )

}


export default CreateBeasiswa