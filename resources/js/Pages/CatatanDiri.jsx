import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

import pp from '../../image/profile.png'

const CatatanDiri = (props) => {
  console.log("Isi Props: ",props)
  console.log("Isi Catatan Diri  Terbaru: ",props.catatan)
  return (
    <AuthenticatedLayout user={props.auth.user}>

    
    <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <label htmlFor="my-drawer-4" className="drawer-button 
    bg-gradient-to-br from-primary/95 via-amber-500/90 to-emerald-700/90 opacity-100 btn btn-primary dark-gradient3  text-cyan-200">Lihat Riwayat</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-3/4 bg-base-100 text-base-content">
    <li><a className='text-primary text-gradient px-6'>Riwayat Beasiswa</a></li>
    <div className="artboard artboard-horizontal phone-6 pt-3">
    
        <div className="overflow-x-auto px-13 items-center">
        <table data-theme="bumblebee" className="rounded-lg table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name Beasiswa</th>
              <th>Penyelenggara</th>
              <th>Tanggal Mulai</th>
              <th>Tanggal Berakhir</th>
              <th>Poster</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td></td >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href={route('tambah.beasiswa')}>
      <h1 className='text-primary m-7 ml-16 -mt-4'>Catat Beasiswa Baru <span className='inline-block mt-7  h-5 w-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='stroke-primary' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span></h1>
      </Link>

    </div>
      <li><a className='text-primary text-gradient px-6'>Riwayat Lomba</a></li>
      <div className="overflow-x-auto px-13 items-center">
        <table data-theme="bumblebee" className="rounded-lg table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name Lomba</th>
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
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td></td >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link href={route('tambah.lomba')}>
      <h1 className='text-primary m-7 ml-16 pr-36 -mt-4 '>Catat Lomba Baru    <span className='inline-block mt-7  h-5 w-5'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='stroke-primary' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></span></h1>
      </Link>
    </ul>
  </div>
</div>

    </AuthenticatedLayout>
  )
}

export default CatatanDiri