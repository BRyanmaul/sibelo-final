import React, { useState, useEffect } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Link, usePage, } from '@inertiajs/react';
import moment from 'moment'
import route from 'ziggy-js';
import Navbar from '@/Layouts/Navbar';
import Sidebar from '@/Layouts/Sidebar';
const Index = ({ auth, lomba, beasiswa, title, }) => {

    const message = usePage().props.flash.message;
    const [kategori, setKategori] = useState("Lomba")
    const [idhapus, setIdHapus] = useState('')


    console.log('route', route().current)
    return (
        <body>
            <Head title="Dashboard Admin" />
            <Navbar />


            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-9 gradient-base">
                    {/* Toggle For Responsife Mobile (Not Finish) */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Semua Postingan
                    </label>

                    {/* <!-- Page content here --> */}
                    {/* <h1 className='bg-clip-text text-transparent text-5xl dark-gradient3 pb-7 '>Semua Postingan</h1> */}
                    <div className=" mx-auto px-28 ">
                        <div className="flex flex-grow-0 flex-shrink-0  justify-start items-center py-7 relative ">
                            <h1 className='text-3xl   '>Kategori : </h1>

                            <div className="navbar-center lg:flex ">
                                <ul className="menu menu-horizontal absolute top-2 z-[999] items-center opacity-100 shrink-0 px-1 py-4">
                                    <li tabIndex={0}>
                                        <details>
                                            <summary className='text-xl uppercase text-primary'>{kategori}</summary>
                                            <ul className="p-2">
                                                <li default onClick={() => setKategori("Lomba")}><a>Lomba</a></li>
                                                <li onClick={() => setKategori("Beasiswa")}><a>Beasiswa</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {
                            kategori === "Lomba" ?
                                <>
                                    {lomba.length ?
                                        <table className="table overflow-scroll table-compact max-w-[2000px] min-w-max">
                                            <thead>
                                                <tr>
                                                    <th className='pl-6 pr-4 text-base text-center'>No</th>
                                                    <th>Name Postingan</th>
                                                    <th>Deskripsi</th>
                                                    <th>Tanggal Diupload</th>
                                                    <th className='text-center pr-6'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lomba.map((data, i) => {
                                                    if (data.title != null) {
                                                        var namaPostingan = data.title.substr(0, 24);
                                                        //......
                                                    }
                                                    if (data.excerpt != null) {
                                                        var excerpts = data.excerpt.substr(0, 35);
                                                    }


                                                    const handleDelete = (e) => {
                                                        e.preventDefault();
                                                        // router.delete('/beasiswa/delete/' + Idhapus)
                                                        router.visit('/administrator/lomba/delete/' + idhapus, {
                                                            method: 'delete',
                                                            data: { id: idhapus },
                                                        });
                                                    }
                                                    return (
                                                        <>
                                                            <tr key={i}>
                                                                <th className='pl-6 pr-4 text-lg text-center'>{i + 1}</th>
                                                                <td>{namaPostingan}</td>
                                                                <td>{excerpts}</td>
                                                                <td>{moment(data.created_at).fromNow()}</td>
                                                                <td className='text-center flex items-center justify-center pr-8 gap-1 pb-3'>
                                                                    {/* View */}
                                                                    <Link href={route('view.lomba', { lomba: data.slug })} method='get'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='stroke-cyan-700 hover:border-stroke-cyan-700  hover:scale-125 ease-in-out transition-all hover:stroke-cyan-500' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                                    </Link>
                                                                    {/* Edit */}
                                                                    <Link href={route('edit.lomba', { lomba: data.slug })} method='get' className='px-4'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='stroke-amber-600 hover:border-primary hover:border hover:scale-125 ease-in-out transition-all hover:stroke-amber-500' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                                    </Link>
                                                                    {/* Delete */}

                                                                    {/* Open Modal Confirmation First */}
                                                                    <label htmlFor="my_modal_7" > <svg onClick={() => setIdHapus(data.id)} xmlns="http://www.w3.org/2000/svg" className='stroke-primary hover:border-orange-400 hover:border  hover:scale-125 ease-in-out transition-all hover:stroke-red-600' width="27" height="27" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></label>


                                                                    {/* Modal */}
                                                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                                                    <div className="modal w-full z-[999]">
                                                                        <div className="modal-box">
                                                                            <p className="py-4 text-lg">Anda yakin ingin menghapus postingan ini?</p>
                                                                            <button onClick={handleDelete} className='flex btn-glass scale-90 items-center'>
                                                                                {/* <Link href={route('destroy.lomba', { lomba: hapus })} data={{ id: hapus }} method='delete' className='flex btn-glass scale-90 items-center'> */}

                                                                                <label htmlFor="my_modal_7" className="modal-backdrop uppercase ">Hapus</label>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className='stroke-primary hover:border-orange-400 hover:border  hover:scale-125 ease-in-out transition-all hover:stroke-red-600' width="27" height="27" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                                {/* </Link> */}
                                                                            </button>
                                                                            <button className=" btn-glass mx-4 scale-90">
                                                                                <label htmlFor="my_modal_7" className="modal-backdrop">Batal</label>
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                }
                                            </tbody>

                                            <tfoot>
                                                <tr>
                                                    <th></th>
                                                    <th>Name Postingan</th>
                                                    <th>Desciption</th>
                                                    <th>Tanggal Diupload</th>
                                                    <th className='ml-48 pl-24'>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        :
                                        <div className="text-gradient text-4xl m-20">Postingan Lomba Belum Ada </div>
                                    }

                                    <div className='flex justify-end items-center mt-3 mb-20 mx-2'>
                                        {message &&
                                            <div className="mr-40 w-fit alert alert-success bg-base-300 flex-1 items-center justify-items-center h-fit  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span className="w-full">{message}</span>
                                            </div>
                                        }
                                        <div>
                                            <Link href={route('create.lomba')} className="flex-grow-0">
                                                <button className="btn glass bg-orange-400 text-orange-800  hover:bg-primary hover:scale-105">Tambah Postingan Lomba<span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='stroke-orange-800' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                                </span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    {beasiswa.length ?
                                        <table className="table overflow-scroll table-compact max-w-[2000px] min-w-max ">
                                            <thead>
                                                <tr>
                                                    <th className='pl-6 pr-4 text-base text-center'>No</th>
                                                    <th>Name Postingan</th>
                                                    <th>Deskripsi</th>
                                                    <th>Tanggal Diupload</th>
                                                    <th className='text-center'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {beasiswa.map((data, i) => {
                                                    let title = data.title
                                                    if (title != null) {
                                                        var titles = title.substr(0, 24);
                                                        //......
                                                    }
                                                    if (data.excerpt != null) {
                                                        var excerpts = data.excerpt.substr(0, 35);
                                                    }
                                                    const handleDelete = (e) => {
                                                        e.preventDefault();
                                                        // router.delete('/beasiswa/delete/' + Idhapus)
                                                        router.visit('/administrator/beasiswa/delete/' + idhapus, {
                                                            method: 'delete',
                                                            data: { id: idhapus },
                                                        });
                                                    }
                                                    return (
                                                        <>
                                                            <tr>
                                                                <th className='pl-6 pr-4 text-lg text-center'>{i + 1}</th>
                                                                <td>{titles}...</td>
                                                                <td>{excerpts}</td>
                                                                <td>{moment(data.created_at).fromNow()}</td>
                                                                {/* View */}
                                                                <td className='text-center flex items-center justify-center pr-8 gap-1 pb-3'>
                                                                    <Link href={route('view.beasiswa', { beasiswa: data.slug })}  >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='stroke-cyan-700 hover:border-stroke-cyan-700  hover:scale-125 ease-in-out transition-all hover:stroke-cyan-500' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                                    </Link>
                                                                    {/* Edit */}
                                                                    <Link href={route('edit.beasiswa', { beasiswa: data.slug })} method='get' className='px-4'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className='stroke-amber-600 hover:border-primary hover:border hover:scale-125 ease-in-out transition-all hover:stroke-amber-500' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                                    </Link>
                                                                    {/* Delete */}
                                                                    {/* Open Modal Confirmation First */}
                                                                    <label htmlFor="my_modal_7" > <svg onClick={() => setIdHapus(data.id)} xmlns="http://www.w3.org/2000/svg" className='stroke-primary hover:border-orange-400 hover:border  hover:scale-125 ease-in-out transition-all hover:stroke-red-600' width="27" height="27" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></label>


                                                                    {/* Modal */}
                                                                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                                                                    <div className="modal w-full z-[999]">
                                                                        <div className="modal-box">
                                                                            <p className="py-4 text-lg">Anda yakin ingin menghapus postingan ini?</p>
                                                                            <button onClick={handleDelete} className='flex btn-glass scale-90 items-center'>
                                                                                <label htmlFor="my_modal_7" className="modal-backdrop uppercase ">Hapus</label>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className='stroke-primary hover:border-orange-400 hover:border  hover:scale-125 ease-in-out transition-all hover:stroke-red-600' width="27" height="27" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                                            </button>
                                                                            <button className=" btn-glass mx-4 scale-90">
                                                                                <label htmlFor="my_modal_7" className="modal-backdrop">Batal</label>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                                }


                                            </tbody>

                                            <tfoot>
                                                <tr>
                                                    <th></th>
                                                    <th>Name Postingan</th>
                                                    <th>Desciption</th>
                                                    <th>Tanggal Diupload</th>
                                                    <th className='ml-48 pl-24'>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        :
                                        <div className="text-gradient text-4xl m-20">Belum Ada Pengajuan Terbaru</div>
                                    }
                                    <div className='flex justify-end items-center mt-3 mb-20 mx-2'>
                                        {message &&
                                            <div className="mr-40 w-fit alert alert-success bg-base-300 flex-1 items-center justify-items-center h-fit  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span className="w-full">{message}</span>
                                            </div>
                                        }
                                        <div>
                                            <Link href={route('create.beasiswa')} className="flex-grow-0">
                                                <button className="btn glass bg-orange-400 text-orange-800  hover:bg-primary hover:scale-105">Tambah Postingan Beasiswa<span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='stroke-orange-800' width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                                </span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                {/* <!-- Page content End --> */}
                <label htmlFor="my-drawer-2" className="drawer-overlay">
                    <Sidebar />
                </label>
            </div>

        </body>

    )
}

export default Index