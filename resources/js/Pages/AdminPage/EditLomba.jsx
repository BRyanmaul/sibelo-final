import React, { useState, useRef, useEffect } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import pp from "./../../../image/profile.png"
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import logo from '@/../image/logo_sibelo.png'
import Navbar from '@/Layouts/Navbar';



const Index = ({ lomba, flash, title }) => {

    const user = usePage().props.auth.user;
    const [isNotif, setIsNotif] = useState(false)
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: lomba.title,
        nama_lomba: lomba.nama_lomba,
        slug: lomba.slug,
        category_id: lomba.category_id,
        sertif: lomba.sertif,
        penyelenggara_lomba: lomba.penyelenggara_lomba,
        tingkat: lomba.tingkat,
        tanggal_mulai_l: lomba.tanggal_mulai_l,
        tanggal_berakhir_l: lomba.tanggal_berakhir_l,
        body: lomba.body,
        poster: null,

        oldImage: lomba.poster,
        //Message 

        // Id
        id: lomba.id
    });

    console.log('Isi Lomba ', lomba)

    //Untuk Handle Submit Form 
    const submit = (e) => {
        e.preventDefault();
        post(route('update.lomba', data, {
            forceFormData: true,
            _method: 'patch',
            // image: data.image

        }));
        setIsNotif(true);
        setData('');
    };

    // Previev Image
    function previewImage(e) {
        const image = document.querySelector('#poster')
        const imgPreview = document.querySelector('.img-preview')
        setData('poster', e.target.files[0])
        const Reader = new FileReader();
        Reader.readAsDataURL(image.files[0]);
        Reader.onload = function (e) {
            imgPreview.src = e.target.result;
        };
    };
    const storagePoster = "/storage/" + lomba.poster

    // Trix-editor
    const trixInput = useRef('');
    useEffect(() => {
        trixInput.current.addEventListener('trix-change',
            (e) => setData('body', e.target.value)
        )
    }, [trixInput])
    // Create Slug
    const nama_lomba = document.querySelector('#nama_lomba');
    const slug = document.querySelector('#slug');
    if (nama_lomba != null) {
        nama_lomba.addEventListener('change', function (e) {
            fetch('/administrator/lomba/create/createSlug?nama_lomba=' + nama_lomba.value)
                .then(response => response.json())
                .then(data => slug.value = data.slug)
            // .then(data.slug = slug.value)
        })
        console.log('slug', slug.value)
        data.slug = slug.value
    }

    const message = flash.message

    return (
        <body>
            <Head title="Dashboard Admin" />
            <Navbar />

            {/* Content */}
            <section className="drawer drawer-mobile h-full ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-9 gradient-base   rounded-lg">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h1 className='bg-clip-text text-transparent text-5xl dark-gradient3 pb-10'>Edit Postingan Lomba</h1>
                    <div className="mockup-window w-4/5 h-auto border  bg-base-300 mb-24">
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

                                {/* Nama lomba */}
                                <div>
                                    <InputLabel htmlFor="nama_lomba" value="Nama Lomba" />
                                    <TextInput
                                        id="nama_lomba"
                                        type="text"
                                        className="my-2 block w-full bg-base-100"
                                        value={data.nama_lomba}
                                        onChange={(e) => setData('nama_lomba', e.target.value)}
                                        required
                                        autoComplete="nama_lomba"
                                        placeholder="Masukkan nama lomba"

                                    />
                                    <InputError className="my-2" message={errors.nama_lomba} />
                                </div>

                                {/* Slug */}
                                <div>
                                    <InputLabel htmlFor="slug" value="Slug" />
                                    <TextInput
                                        id="slug"
                                        name="slug"
                                        type="text"
                                        defaultValue={lomba.slug}
                                        className="my-2 block w-full bg-base-100"
                                        placeholder="Masukkan Slug"
                                        onChange={(e) => setData('slug', e.target.value)}
                                    />
                                    <InputError className="my-2" message={errors.slug} />
                                </div>

                                {/* Kategori  */}
                                <div className='my-2'>
                                    <InputLabel htmlFor="category_id" value="Kategori Lomba" />
                                    <select className="select select-primary w-full max-w-xs font-thin" name="category_id" id="category_id"
                                        onChange={(e) => setData('category_id', e.target.value)}>
                                        <option aria-readonly defaultValue={0} disabled className=''>Set Kategori</option>
                                        <option value={1}>Desain Grafis</option>
                                        <option value={2}>Fotografi</option>
                                        <option value={3}>UI Design</option>
                                        <option value={4}>Ux Design</option>
                                        <option value={5}>Bisnis</option>
                                        <option value={6}>Programming</option>
                                        <option value={7}>Musik</option>
                                        <option value={8}>Videografi</option>
                                        <option value={9}>Karya Ilmiah</option>
                                        <option value={10}>E-sport</option>
                                        <option value={17}>Lainnya</option>

                                    </select>
                                    <InputError className="my-2" message={errors.category_id} />
                                </div>

                                {/* Sertif */}
                                <div className='my-2'>
                                    <InputLabel htmlFor="sertif" value="Sertifikasi" />
                                    <select className="select select-primary w-full max-w-xs font-thin "
                                        onChange={(e) => setData('sertif', e.target.value)}
                                        value={data.sertif}>
                                        <option disabled className=''>Set Sertifikasi</option>
                                        <option>Ada</option>
                                        <option>Tidak Ada</option>

                                    </select>
                                    <InputError className="my-2" message={errors.sertif} />
                                </div>

                                {/* Penyelenggara Lomba */}
                                <div>
                                    <InputLabel htmlFor="penyelenggara_lomba" value="Penyelenggara Lomba" />
                                    <TextInput
                                        id="penyelenggara_lomba"
                                        type="text"
                                        className="my-2 block w-full bg-base-100"
                                        value={data.penyelenggara_lomba}
                                        onChange={(e) => setData('penyelenggara_lomba', e.target.value)}
                                        required
                                        autoComplete="penyelenggara_lomba"
                                        placeholder="Masukkan penyelenggara lomba"

                                    />
                                    <InputError className="my-2" message={errors.penyelenggara_lomba} />
                                </div>

                                {/* Tingkat Lomba */}
                                <div>
                                    <InputLabel htmlFor="tingkat" value="Tingkat Lomba" />
                                    <select name="tingkat" id="tingkat" className="select select-primary w-full max-w-xs font-thin" defaultValue={lomba.tingkat}
                                        onChange={(e) => setData('tingkat', e.target.value)}>
                                        <option disabled className=''>Set Tingkat Lomba</option>
                                        <option>Kabupaten</option>
                                        <option>Kota</option>
                                        <option>Provinsi</option>
                                        <option>Nasional</option>
                                        <option>Internasional</option>
                                    </select>
                                    <InputError className="my-2" message={errors.tingkat} />
                                </div>

                                {/* Tanggal Mulai Lomba */}
                                <div>
                                    <InputLabel htmlFor="tanggal_mulai_l" value="Tanggal Mulai Lomba" />
                                    <TextInput
                                        id="tanggal_mulai_l"
                                        name="tanggal_mulai_l"
                                        defaultValue={lomba.tanggal_mulai_l}
                                        type="date"
                                        className="my-2 block w-full bg-base-100"
                                        onChange={(e) => setData('tanggal_mulai_l', e.target.value)}
                                        placeholder="Masukkan Tanggal Mulai Lomba"

                                    />
                                    <InputError className="my-2" message={errors.tanggal_mulai_l} />
                                </div>

                                {/* Tanggal Berakhir Lomba */}
                                <div>
                                    <InputLabel htmlFor="tanggal_berakhir_l" value="Tanggal Berakhir Lomba" />
                                    <TextInput
                                        id="tanggal_berakhir_l"
                                        name="tanggal_berakhir_l"
                                        defaultValue={lomba.tanggal_berakhir_l}
                                        type="date"
                                        min={data.tanggal_mulai_l}
                                        className="my-2 block w-full bg-base-100"
                                        onChange={(e) => setData('tanggal_berakhir_l', e.target.value)}
                                        placeholder="Masukkan Tanggal Berakhir Lomba"
                                    />
                                    <InputError className="my-2" message={errors.tanggal_berakhir_l} />
                                </div>

                                {/* body */}
                                <div className="w-fit">
                                    <InputLabel className="my-2" htmlFor="body" value="Deskripsi" />
                                    <TextInput type="hidden" id="body" className="w-full bg-base-100 " name='body' placeholder="Body"
                                        defaultValue={data.body} on={(e) => setData('body', e.target.value)} />
                                    <trix-editor input="body" ref={trixInput} defaultValue={data.body} placeholder="Body"
                                        className="w-full bg-primary" ></trix-editor>
                                    <InputError className="my-2" message={errors.body} />
                                </div>


                                {/* Gambar */}
                                <InputLabel className='my-2' htmlFor="poster" value="Gambar Untuk Postingan" />
                                <input type="hidden" name='oldImage' id='oldImage' value={data.oldImage} />
                                {
                                    data.oldImage ?
                                        <img src={storagePoster} className=' w-72 h-72 img-preview' />
                                        : <img className={data.poster ? 'img-preview w-72 h-72' : 'img-preview'} />
                                }

                                <input type="file" name='poster' id='poster'
                                    onChange={previewImage}
                                    className="my-2 block file-input font-thin text-sm file-input-bordered file-input-primary w-full max-w-xs" />
                                <InputError className="my-2" message={errors.poster} />
                                {/* Button */}
                                <button type='submit' disabled={processing} className="my-13 btn-glass">Posting
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>
                                {message &&
                                    <div className="alert alert-success bg-base-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

                        <Link href={route('show.informasi')} active={route().current('edit.lomba')} className={route().current('edit.lomba') ? 'bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                            <li><a>Postingan</a></li>
                        </Link>
                    </ul>
                </sidebar>
            </section>
        </body>

    )
}

export default Index