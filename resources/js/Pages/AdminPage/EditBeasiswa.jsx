import React, { useState } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import pp from "./../../../image/profile.png"
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Navbar from '@/Layouts/Navbar';



const EditBeasiswa = ({ beasiswa, flash, title }) => {

    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: beasiswa.title,
        nama_beasiswa: beasiswa.nama_beasiswa,
        jenis: beasiswa.jenis,
        penyelenggara_beasiswa: beasiswa.penyelenggara_beasiswa,
        tanggal_mulai_b: beasiswa.tanggal_mulai_b,
        tanggal_berakhir_b: beasiswa.tanggal_berakhir_b,
        sertif: beasiswa.sertif,
        syarat: beasiswa.syarat,
        poster: beasiswa.poster,
        image: null,
        oldImage: beasiswa.poster,
        //Message 


        // Id
        id: beasiswa.id
    });



    //Untuk Handle Submit Form 
    const submit = (e) => {
        e.preventDefault();
        post(route('update.beasiswa', data, {
            forceFormData: true,
            _method: 'patch',
            image: data.image

        }));
        setData('');
    };


    function previewImage(e) {
        const image = document.querySelector('#image')
        const imgPreview = document.querySelector('.img-preview')
        const Reader = new FileReader();
        Reader.onload = function (e) {
            imgPreview.src = e.target.result;
        };
        Reader.readAsDataURL(image.files[0]);

        setData('image', e.target.files[0])

    };
    const storagePoster = "/storage/" + data.poster
    const message = flash.message

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
                        <h1 className='bg-clip-text text-transparent text-5xl dark-gradient3 pb-10'>Edit Postingan Beasiswa</h1>
                        <div className="mockup-window w-4/5 h-auto border  bg-base-300">
                            <div className="flex justify-center px-4 py-16 bg-base-200 ">

                                {/* FORM */}
                                <form onSubmit={submit} className='w-[600px]' method='patch' encType="multipart/form-data">
                                    {/* Judul Postingan */}
                                    <div>
                                        <InputLabel htmlFor="title" value="Judul Postingan" />
                                        <TextInput
                                            id="title"
                                            className="my-2 block bg-base-100 w-full"
                                            defaultValue={data.title}
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            required
                                            isFocused
                                            placeholder="Masukkan Judul Postingan"
                                        />
                                        <InputError className="mt-2" message={errors.title} />
                                    </div>

                                    {/* Nama Beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="nama_beasiswa" value="Judul Beasiswa" />
                                        <TextInput
                                            id="nama_beasiswa"
                                            type="text"
                                            className="my-2 block w-full bg-base-100"
                                            value={data.nama_beasiswa}
                                            onChange={(e) => setData('nama_beasiswa', e.target.value)}
                                            required
                                            autoComplete="nama_beasiswa"
                                            placeholder="Masukkan nama beasiswa"

                                        />
                                        <InputError className="my-2" message={errors.slug} />
                                    </div>

                                    {/* Penyelenggara beasiswa */}
                                    <div>
                                        <InputLabel htmlFor="jenis" value="Penyelenggara Beasiswa" />
                                        <TextInput
                                            id="jenis"
                                            type="text"
                                            className="my-2 block w-full bg-base-100"
                                            value={data.jenis}
                                            onChange={(e) => setData('penyelenggara_beasiswa', e.target.value)}
                                            required
                                            autoComplete="jenis"
                                            placeholder="Masukkan penyelenggara_beasiswa"

                                        />
                                        <InputError className="my-2" message={errors.penyelenggara_beasiswa} />
                                    </div>


                                    {/* Tanggal_mulai_b */}
                                    <div className='my-2'>
                                        <InputLabel htmlFor="sertif" value="Tanggal Mulai Beasiswa" />
                                        <input type="date" name="tanggal_mulai_b" className='my-2  bg-base-200 rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
                                        focus:border-none focus:border-primary' defaultValue={beasiswa.tanggal_mulai_b} onChange={(e) => { setData('tanggal_mulai_b', e.target.value) }} />
                                        <InputError className="my-2" message={errors.tanggal_mulai_b} />
                                    </div>

                                    {/* Tanggal_berakhir_b */}
                                    <div className='my-2'>
                                        <InputLabel htmlFor="sertif" value="Tanggal Berakhir Beasiswa" />
                                        <input type="date" name="tanggal_berakhir_b" className='my-2  bg-base-200 rounded-lg block w-full border-t-primary border-l-primary border-r-secondary border-b-secondary
                                        focus:border-none focus:border-primary' defaultValue={beasiswa.tanggal_berakhir_b} onChange={(e) => { setData('tanggal_berakhir_b', e.target.value) }} />
                                        <InputError className="my-2" message={errors.tanggal_mulai_b} />
                                    </div>

                                    {/* Sertifikat */}
                                    <div className='my-2'>
                                        <InputLabel htmlFor="sertif" value="Sertifikasi" />
                                        <select className="select select-primary w-full max-w-xs font-thin "
                                            onChange={(e) => setData('sertif', e.target.value)}
                                            value={data.sertif}>
                                            <option>Ada</option>
                                            <option>Tidak Ada</option>

                                        </select>
                                        <InputError className="my-2" message={errors.sertif} />
                                    </div>
                                    {/* body */}
                                    <div>
                                        <InputLabel className="my-2" htmlFor="syarat" value="Deskripsi" />
                                        <textarea className="textarea textarea-primary w-full h-80" id='syarat' name='syarat' placeholder="Body" value={data.syarat} onChange={(e) => setData('syarat', e.target.value)}></textarea>
                                    </div>


                                    {/* Gambar */}
                                    <InputLabel className='my-2' htmlFor="image" value="Gambar Untuk Postingan" />
                                    <input type="hidden" value={data.oldImage} name='oldImage' id='oldImage' />
                                    {
                                        data.poster ?
                                            <img src={storagePoster} className=' img-preview w-72 h-72 ' />
                                            : <img className={data.image ? 'img-preview w-72 h-72' : 'img-preview'} />
                                    }

                                    <input type="file" name='image' id='image'
                                        onChange={previewImage}
                                        className="my-2 block file-input font-thin text-sm file-input-bordered file-input-primary w-full max-w-xs" />
                                    <InputError className="my-2" message={errors.image} />
                                    {/* Button */}
                                    <button type='submit' disabled={processing} className="my-13 btn-glass">Posting
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                                    {message &&
                                        <div className="alert alert-success bg-base-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="w-full">{props.flash.message}</span>
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

                            <Link href={route('show.informasi')} active={route().current('edit.beasiswa')} className={route().current('edit.beasiswa') ? 'bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                                <li><a>Postingan</a></li>
                            </Link>
                        </ul>
                    </sidebar>
                </section>
            </section>
        </>

    )
}

export default EditBeasiswa