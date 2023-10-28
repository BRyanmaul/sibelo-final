import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import pp from '../../image/profile.png'
import Echo from 'laravel-echo';
import axios from 'axios';
import moment from 'moment'
import route from 'ziggy-js';
import { useState } from 'react';

const Dashboard = ({ auth, catatan, unreadNotifications, readedNotifications }) => {
  const catatans = catatan
  const { notifications } = usePage().props;

  //   function pusherEvent() {
  //     var pusher = new Pusher(`${process.env.REACT_APP_PUSHER_API_KEY}`, {
  //       cluster: `${process.env.REACT_APP_PUSHER_CLUSTER}`,
  //     });

  //     var channel = pusher.subscribe("book-store");
  //     channel.bind("book-event", (data) => {
  //       this.setState({
  //         notification: true,
  //         books: [...this.state.books, data.book],
  //       });
  //     });
  // }

  // Echo.private(`App.Models.User.${auth.user.id}`)
  // .notification((notification) => {
  //   console.log(notification);
  // });
  // const message = "hello world"
  // Event(new MyEvent('my-event'));

  // axios.post('/catatan', { message: this.message })
  //   .then((response) => {
  //     this.message = 'hello';
  //   });
  // Echo.call(message)

  // console.log('isi notif', notifList.data)

  const unreadList = unreadNotifications.list
  const readedList = readedNotifications.list
  const [notif, setNotif] = useState([])





  console.log('isi unreadList ', unreadList)
  console.log('isi readedList ', readedList)
  console.log('isi Notif Sekarang dari state ', notif)
  console.log('unreadList Length ', unreadList.length)
  return (
    <div className='bg-white'>
      <navbar>
        <div className="navbar pt-0 -mb-2 bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn justify-end btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rnm, ounded-box w-52">
                <Link href={route('home')}><li><a>Homepage</a></li></Link>
                <Link href={route('lomba')}><li><a>Informasi Lomba</a></li></Link>
                <Link href={route('beasiswa')}><li><a>Informasi Beasiswa</a></li></Link>
              </ul>

            </div>
          </div>
          <div className='navbar-center text-xl'>Catatan Diri Mahasiswa</div>
          <div className="navbar-end dropdown flex justify-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator navbar-end">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className={'indicator-item ' + (unreadList.length > 0 && 'animate-ping scale-[0.025] badge badge-xs badge-primary')}></span>

                <ul className="dropdown-content menu-normal mt-3 z-[1] p-5 shadow bg-base-100/90 rounded-box w-96 h-96 text-left overflow-auto ">

                  {unreadList?.map((notif, i) => {
                    return (
                      <div key={i} className="bg-primary/10 rounded-2xl p-2 px-4 normal-case my-3 ">
                        <li className="mt-3 text-orange-900 font-medium" ><a> {i + 1 + ') '}  Pengajuan pencatatan Anda tentang {notif.data.catatan_beasiswa ? 'Beasiswa ' + notif.data.catatan_beasiswa : 'Lomba ' + notif.data.catatan_lomba} telah disetujui oleh Admin </a></li>
                        <li className="text-xs scale-90 origin-left text-left text-primary/60"><a>{moment(notif.created_at).fromNow()}</a></li>
                      </div>
                    )
                  })
                  }
                  {
                    readedList.length > 0 && readedList.map((notif, i) => {
                      return (
                        <div key={i} className="bg-base-200/30 rounded-2xl p-2 px-4 normal-case my-3 ">
                          <li className="mt-3 text-orange-900 font-medium" ><a> {i + 1 + ') '}  Pengajuan pencatatan Anda tentang {notif.data.catatan_beasiswa ? 'Beasiswa ' + notif.data.catatan_beasiswa : 'Lomba ' + notif.data.catatan_lomba} telah disetujui oleh Admin </a></li>
                          <li className="text-xs scale-90 origin-left text-left text-primary/60"><a>{moment(notif.created_at).fromNow()}</a></li>
                        </div>
                      )
                    })
                  }

                  <Link as="button" method='post' href={route('mark.all-read')} className='hidden bg-primary/30 px-2 p-1 rounded-md mt-16'> Mark As Read</Link>
                </ul>
              </div>

            </label>

          </div>
        </div>

        <section className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <label htmlFor="my-drawer-4" className="drawer-button 
     opacity-100   btn btn-primary btn-glass absolute right-96 bottom-11 top-96 left-96 text-cyan-200">Lihat Riwayat</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-3/4 bg-base-100 text-base-content">
              <li><a className='text-primary text-gradient px-6 text-2xl lg:text-3xl'>Riwayat Beasiswa</a></li>
              <div className="artboard artboard-horizontal phone-6 pt-3">

                <div className="overflow-x-auto px-13 items-center">
                  <table data-theme="bumblebee" className="rounded-lg table table-zebra w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Nama Beasiswa</th>
                        <th>Penyelenggara</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Berakhir</th>
                        <th>Poster</th>
                      </tr>

                    </thead>
                    {/* Mapping Data Beasiswa */}
                    {catatans?.map((data, i) => {
                      // if(i%2 == 0) {
                      console.log(i);
                      // }
                      return (
                        <tbody className='mb-10'>
                          {/* row 1 */}
                          {
                            i % 2 == 0 || i < 1 ?
                              <tr key={i} >
                                <th>{i + 1}</th>
                                <td>{data.nama_beasiswa}</td>
                                <td>{data.penyelenggara_beasiswa}</td>
                                <td>{data.tanggal_mulai_b}</td>
                                <td>{data.tanggal_berakhir_b}</td>
                                <td></td>
                              </tr> :
                              <>
                                <tr >
                                </tr>
                                {/* row 2 */}
                                <tr key={i}><th>{i + 1}</th>
                                  <td>{data.nama_beasiswa}</td>
                                  <td>{data.penyelenggara_beasiswa}</td>
                                  <td>{data.tanggal_mulai_b}</td>
                                  <td>{data.tanggal_berakhir_b}</td>
                                  <td></td>
                                </tr>
                              </>
                          }
                        </tbody>
                      )
                    })
                    }
                  </table>
                </div>
                <Link href={route('tambah.beasiswa')}>
                  <h1 className='text-primary m-7 ml-16 -mt-4 pt-7'>Catat Beasiswa Baru <span className='inline-block mt-7  h-5 w-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='stroke-primary' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span></h1>
                </Link>

              </div>
              <li><a className='text-primary text-gradient px-6  text-2xl lg:text-3xl pt-16'>Riwayat Lomba</a></li>
              <div className="overflow-x-auto px-13 items-center pt-4">
                <table data-theme="bumblebee" className="rounded-lg table table-zebra w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Nama Lomba</th>
                      <th>Jenis</th>
                      <th>Penyelenggara</th>
                      <th>Tingkat Kompetisi</th>
                      <th>Tanggal Mulai</th>
                      <th>Tanggal Berakhir</th>
                      <th>Prestasi</th>
                      <th>Sertifikat</th>
                      <th>Dosen Pembimbing</th>
                      <th>Bukti Kegiatan</th>
                    </tr>
                  </thead>
                  {catatans.map((data, i) => {
                    console.log(data.nama_lomba)
                    return (
                      <tbody className='mb-10'>
                        {/* row 1 */}
                        {
                          i % 2 == 0 || i < 1 ?
                            <tr key={i} >
                              <th>{i + 1}</th>
                              <td>{data.nama_lomba}</td>
                              <td>{data.jenis}</td>
                              <td>{data.penyelenggara_lomba}</td>
                              <td>{data.tingkat_kegiatan}</td>
                              <td>{data.tanggal_mulai_l}</td>
                              <td>{data.tanggal_berakhir_l}</td>
                              <td>{data.prestasi}</td>
                              <td>{data.sertif}</td>
                            </tr>

                            :
                            <>
                              <tr >
                              </tr>
                              {/* row 2 */}
                              <tr key={i}><th>{i + 1}</th>
                                <td>{data.nama_lomba}</td>
                                <td>{data.jenis}</td>
                                <td>{data.penyelenggara_lomba}</td>
                                <td>{data.tingkat_kegiatan}</td>
                                <td>{data.tanggal_mulai_l}</td>
                                <td>{data.tanggal_berakhir_l}</td>
                                <td>{data.prestasi}</td>
                                <td>{data.sertif}</td>
                              </tr>
                            </>
                        }
                      </tbody>
                    )
                  })
                  }
                </table>
              </div>
              <Link href={route('tambah.lomba')}>
                <h1 className='text-primary m-7 ml-16 pr-36 -mt-4 pt-7'>Catat Lomba Baru    <span className='inline-block mt-7  h-5 w-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='stroke-primary' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span></h1>
              </Link>
            </ul>
          </div>
        </section>
      </navbar>


    </div>
  )
}

export default Dashboard