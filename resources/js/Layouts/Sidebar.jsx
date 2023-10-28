import { Link } from '@inertiajs/react'
import React from 'react'


const Sidebar = () => {
    return (
        <sidebar className="drawer-side">
            <ul className="menu p-3 w-64 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <Link href={route('dashboard.admin')} active={route().current('dashboard.admin')} className={route().current('dashboard.admin') ? 'glass bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                    <li><a>Pengajuan Mahasiswa</a></li>
                </Link>

                <Link href={route('show.informasi')} active={route().current('show.informasi')} className={route().current('show.informasi') ? 'glass bg-primary/40 rounded-lg mx-1' : 'mx-2'}>
                    <li><a>Postingan</a></li>
                </Link>
            </ul>
        </sidebar>
    )
}

export default Sidebar