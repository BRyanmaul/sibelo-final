import React, { useEffect, useState } from 'react'
import pp from "./../../../image/profile.png"
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import send from './../../../image/check-square.svg'
import route from 'ziggy-js';
import logo from '@/../image/logo_sibelo.png'
import Navbar from '@/Layouts/Navbar';
import Sidebar from '@/Layouts/Sidebar';


const Pengajuan = (props) => {
    console.log('Title Halaman Pengajuan : ', props.props.title)
    const user = usePage().props.auth.user;
    const pengajuans = props.props.pengajuan
    console.log('Isi Props Pengajuan : ', pengajuans)
    console.log('Isi Props  : ', props)
    const { data, setData, processing, recentlySuccessful, reset } = useForm({
        name: user.name,
        email: user.email,

        // Validasi
        validasi: [],
        nama_lomba: "",
        nama_beasiswa: "",
        id: [],
        user_id: [],
        // message
    });
    const [isSubmit, setIsSubmit] = useState(false)

    // useEffect(() => {
    //     return () => {
    //         reset('validasi', 'id');
    //     };
    // }, [isSubmit]);


    const handleChecked = (e) => {
        const checked = e.target.value
        const userId = e.target.name
        const idChecked = e.target.id
        if (e.target.checked) {
            // setData("validasi", [...data.validasi, checked]);
            // setData("user_id", [...data.user_id, userId])
            // setData("id", [...data.id, idChecked])
            setData({
                id: [...data.id, idChecked],
                user_id: [...data.user_id, userId],
            })
        } else {
            setData({
                id: data.id.filter((item) => {
                    // return item !== checked;
                    return item !== idChecked;
                }),
                user_id: data.user_id.filter((item) => {
                    // return item !== checked;
                    return item !== userId;
                }),
            })
        }
    };

    // if (isSubmit === true) {
    //     reset('validasi', 'id', 'user_id');
    // }
    // else () => setIsSubmit(!isSubmit)


    const message = props.props.flash.message
    return (
        // Navbar
        <body>
            <Navbar />

            {/* Sidebar */}
            <sidebar className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center pt-9 gradient-base  rounded-lg pb-11 h-full">
                    {/* <!-- Page content here --> */}
                    {/* <h1 className='bg-clip-text text-transparent text-5xl dark-gradient3 pb-10'>Semua Pengajuan</h1> */}
                    <div className="overflow-x-auto mx-auto w-fit max-w-fit">

                        {
                            pengajuans.length ?
                                <>
                                    <table className="table table-compact ">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name Mahasiswa</th>
                                                <th>Nama Pengajuan</th>
                                                <th>Asal/Penyelenggara</th>
                                                <th>Lampiran</th>
                                                <th>Keterangan Lainnya</th>
                                            </tr>
                                        </thead>
                                        {/* Pengajuan Lomba */}
                                        <tbody>
                                            {pengajuans.map((data, i) => {
                                                return (
                                                    <>
                                                        {/* row 1 */}
                                                        <tr key={i}>
                                                            <th>
                                                                <label>
                                                                    <input type="checkbox" value={true}
                                                                        onChange={handleChecked} className="checkbox" id={data.id} name={data.user_id} />
                                                                </label>
                                                            </th>
                                                            <td>
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="avatar">
                                                                        <div className="mask mask-squircle w-12 h-12">
                                                                            <img src={pp} alt="Avatar Tailwind CSS Component" />
                                                                        </div>
                                                                    </div>

                                                                    <div >
                                                                        <div className="font-bold">{data.mahasiswa}</div>
                                                                        <div className="text-sm opacity-50">F1E121083</div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            {/* JIka Ada Data Catatan Lomba */}
                                                            {data.nama_lomba &&
                                                                <>
                                                                    <td>{data.nama_lomba}<br /><span className="badge badge-ghost badge-sm">Lomba</span></td>
                                                                    <td>{data.penyelenggara_lomba} </td>
                                                                </>}
                                                            {/* JIka Ada Data Catatan Beasiswa */}
                                                            {data.nama_beasiswa &&
                                                                <>
                                                                    <td>{data.nama_beasiswa}<br /><span className="badge badge-ghost badge-sm">Lomba</span></td>
                                                                    <td>{data.penyelenggara_beasiswa} </td>
                                                                </>}
                                                            <th>
                                                                <button className="btn btn-ghost btn-xl hover-bordered hover:shadow-2xl ">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className='stroke-orange-500' viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></button>
                                                            </th>
                                                            <th>
                                                                <button className="btn btn-ghost btn-xs px-10">details</button>
                                                            </th>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                            }

                                        </tbody>

                                        {/* Pengajuan Beasiswa */}


                                        {/* foot */}
                                        <tfoot>
                                            <tr>
                                                <th></th>
                                                <th>Name Mahasiswa</th>
                                                <th>Nama Pengajuan</th>
                                                <th>Asal/Penyelenggara</th>
                                                <th>Lampiran</th>
                                                <th>Keterangan Lainnya</th>
                                            </tr>
                                        </tfoot>

                                    </table>
                                    <div className="mt-5 flex justify-end items-center gap-3">
                                        {message &&
                                            <>
                                                <div className="alert alert-success bg-base-300 flex-1 items-center justify-items-center  ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    <span className="w-full">{message}</span>
                                                </div>
                                            </>}


                                        {/* Button Tolak*/}
                                        <Link as='button' href={route('tolak.pengajuan')} method='delete' data={{ id: data.id }} onClick={() => setIsSubmit(true)} className="btn-glass">Tolak
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                                                <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </Link>

                                        {/* Button  Setuju*/}
                                        <Link as='button' href={route('setuju.pengajuan')} method='post' data={{ id: data.id, user_id: data.user_id }} onClick={() => setIsSubmit(true)} disabled={processing} className="btn-glass ">Setujui
                                            <svg xmlns="http://www.w3.org/2000/svg" className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                        </Link>
                                    </div>
                                </>
                                :
                                <div className="text-gradient text-4xl m-20">Belum Ada Pengajuan Terbaru</div>
                        }
                    </div>
                </div>

                <Sidebar />
            </sidebar>
        </body>
    )
}

export default Pengajuan