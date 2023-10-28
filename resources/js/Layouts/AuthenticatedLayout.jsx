import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { motion, useScroll, useSpring } from "framer-motion";
import pp from './../../image/profile.png'

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { scrollXProgress } = useScroll();
    const scaleY = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    // console.log("Isi Props : ", user , header, children )
    // console.log("Isi User : ", user );

    // Admin Menu
    // const[Admin, setAdmin] = useState(false)

    const isAdmin = user.is_admin;

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

            {/* Navbar */}
            <section className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('home')} active={route().current('home')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    Home
                                </NavLink>

                                <NavLink href={route('lomba')} active={route().current('lomba')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                    Lomba
                                </NavLink>

                                <NavLink href={route('beasiswa')} active={route().current('beasiswa')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    Beasiswa
                                </NavLink>

                                <NavLink href={route('about')} active={route().current('about')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="h-5 w-5 mr-1 feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                    Tentang
                                </NavLink>

                            </div>




                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown >
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            {/* Logika Profile Picture */}
                                            <img src={pp} className='w-8 h-8' alt="" />
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('catatan')}>Catatan Diri</Dropdown.Link>
                                        {isAdmin ? <Dropdown.Link id="admin" name="admin" href={route('dashboard.admin')}>Administrator</Dropdown.Link> : ''}

                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>

                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home')} active={route().current('home')}>
                            home
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>

            </section>


            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>

                </header>

            )}

            <main>{children}</main>

            {/* <motion.div className='progress-bar' style={{scaleY}}/> */}

            <footer className='relative bg-gradient-to-b from-orange-700/80 via-red-900/80  to-orange-950 opacity-100 shadow-inner  pt-40  pb-12'>

                <div className='container'>
                    <div className="flex flex-wrap">
                        <div className='w-full px-4 mb-12  font-medium md:w-1/3'>
                            <h2 className='font-bold text-4xl bg-clip-text text-transparent dark-gradient2 mb-5'>SIBELO</h2>
                            <h3 className='font-bold text-2xl mb-2 text-white/70 hover:text-secondary/50'>Hubungi Kami</h3>
                            <p className='text-white/70 hover:text-secondary/50 mb-2'>sibelouja@gmail.com</p>
                            <p className='text-white/70 '>Jl.Jambi, Mendalo Darat, Kec Jambi Luar Kota,</p> <span className='text-white/70'> Kabupaten Muaro Jambi</span>
                            <p className='text-white/70'>Jambi</p>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3" >
                            <h3 className='font-semibold text-2xl text-white/70 mb-8'>Kategori Informasi
                                <ul className='pt-2 text-white/70'>
                                    <li>
                                        <a href="#" className='inline-block text-base hover:text-secondary  '>Lomba</a>
                                    </li>
                                    <li>
                                        <a href="#" className='inline-block text-base hover:text-secondary mb-1'>Beasiswa</a>
                                    </li>
                                </ul>
                            </h3>
                        </div>
                        <div className="w-full px-4 mb-12 md:w-1/3" >
                            <h3 className='font-semibold text-2xl text-white/70 mb-5'>Tautan
                                <ul>
                                    <li>
                                        <a href="#home" className='inline-block text-base hover:text-secondary  '>Home</a>
                                    </li>
                                    <li>
                                        <a href="#informasi" className='inline-block text-base hover:text-secondary '>Informasi</a>
                                    </li>
                                    <li>
                                        <a href="#about" className='inline-block text-base hover:text-secondary '>Tentang</a>
                                    </li>
                                </ul>
                            </h3>
                        </div>

                        <h1 className='text-white/70 mb-2 mt-6 text-left pl-6'>Akun Sosial Media Kami :</h1>

                        <div className="md:place-self-center md:justify-self-end ml-7 pt-5">
                            <div className="grid grid-flow-col gap-6">
                                <a className='hover:fill-secondary scale-125 hover:scale-150 stroke-emerald-700 hover:stroke-secondary'>
                                    <svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35 17.5C35 7.83501 27.165 0 17.5 0C7.83501 0 0 7.83501 0 17.5C0 26.2346 6.39946 33.4746 14.7656 34.7874V22.5586H10.3223V17.5H14.7656V13.6445C14.7656 9.25859 17.3783 6.83594 21.3756 6.83594C23.2897 6.83594 25.293 7.17773 25.293 7.17773V11.4844H23.0863C20.9125 11.4844 20.2344 12.8334 20.2344 14.2188V17.5H25.0879L24.312 22.5586H20.2344V34.7874C28.6005 33.4746 35 26.2346 35 17.5Z" fill="white" />
                                    </svg>

                                </a>
                                <a className='scale-125 hover:scale-150 hover:fill-secondary  stroke-emerald-700 hover:stroke-secondary'>
                                    <svg width="24" height="24" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_22_664)">
                                            <path d="M18 3.15137C22.8094 3.15137 23.3789 3.17187 25.2703 3.25391C27.0281 3.3291 27.9773 3.61621 28.6102 3.85547C29.4469 4.16992 30.0516 4.55273 30.6773 5.16113C31.3102 5.77637 31.6969 6.35742 32.0203 7.1709C32.2664 7.78613 32.5617 8.71582 32.6391 10.418C32.7234 12.2637 32.7445 12.8174 32.7445 17.4863C32.7445 22.1621 32.7234 22.7158 32.6391 24.5547C32.5617 26.2637 32.2664 27.1865 32.0203 27.8018C31.6969 28.6152 31.3031 29.2031 30.6773 29.8115C30.0445 30.4268 29.4469 30.8027 28.6102 31.1172C27.9773 31.3564 27.0211 31.6436 25.2703 31.7188C23.3719 31.8008 22.8023 31.8213 18 31.8213C13.1906 31.8213 12.6211 31.8008 10.7297 31.7188C8.97188 31.6436 8.02266 31.3564 7.38984 31.1172C6.55313 30.8027 5.94844 30.4199 5.32266 29.8115C4.68984 29.1963 4.30313 28.6152 3.97969 27.8018C3.73359 27.1865 3.43828 26.2568 3.36094 24.5547C3.27656 22.709 3.25547 22.1553 3.25547 17.4863C3.25547 12.8105 3.27656 12.2568 3.36094 10.418C3.43828 8.70898 3.73359 7.78613 3.97969 7.1709C4.30313 6.35742 4.69688 5.76953 5.32266 5.16113C5.95547 4.5459 6.55313 4.16992 7.38984 3.85547C8.02266 3.61621 8.97891 3.3291 10.7297 3.25391C12.6211 3.17187 13.1906 3.15137 18 3.15137ZM18 0C13.1133 0 12.5016 0.0205078 10.582 0.102539C8.66953 0.18457 7.35469 0.485351 6.21563 0.916016C5.02734 1.36719 4.02188 1.96191 3.02344 2.93945C2.01797 3.91016 1.40625 4.8877 0.942188 6.03613C0.499219 7.15039 0.189844 8.42187 0.105469 10.2812C0.0210938 12.1543 0 12.749 0 17.5C0 22.251 0.0210938 22.8457 0.105469 24.7119C0.189844 26.5713 0.499219 27.8496 0.942188 28.957C1.40625 30.1123 2.01797 31.0898 3.02344 32.0605C4.02188 33.0313 5.02734 33.6328 6.20859 34.0771C7.35469 34.5078 8.6625 34.8086 10.575 34.8906C12.4945 34.9727 13.1062 34.9932 17.993 34.9932C22.8797 34.9932 23.4914 34.9727 25.4109 34.8906C27.3234 34.8086 28.6383 34.5078 29.7773 34.0771C30.9586 33.6328 31.9641 33.0313 32.9625 32.0605C33.9609 31.0898 34.5797 30.1123 35.0367 28.9639C35.4797 27.8496 35.7891 26.5781 35.8734 24.7188C35.9578 22.8525 35.9789 22.2578 35.9789 17.5068C35.9789 12.7559 35.9578 12.1611 35.8734 10.2949C35.7891 8.43555 35.4797 7.15723 35.0367 6.0498C34.5938 4.8877 33.982 3.91016 32.9766 2.93945C31.9781 1.96875 30.9727 1.36719 29.7914 0.922852C28.6453 0.492187 27.3375 0.191406 25.425 0.109375C23.4984 0.0205078 22.8867 0 18 0Z" fill="white" />
                                            <path d="M18 8.51074C12.8953 8.51074 8.75391 12.5371 8.75391 17.5C8.75391 22.4629 12.8953 26.4893 18 26.4893C23.1047 26.4893 27.2461 22.4629 27.2461 17.5C27.2461 12.5371 23.1047 8.51074 18 8.51074ZM18 23.3311C14.6883 23.3311 12.0023 20.7197 12.0023 17.5C12.0023 14.2803 14.6883 11.6689 18 11.6689C21.3117 11.6689 23.9977 14.2803 23.9977 17.5C23.9977 20.7197 21.3117 23.3311 18 23.3311Z" fill="white" />
                                            <path d="M29.7703 8.15528C29.7703 9.31739 28.8 10.2539 27.6117 10.2539C26.4164 10.2539 25.4531 9.31055 25.4531 8.15528C25.4531 6.99317 26.4234 6.05664 27.6117 6.05664C28.8 6.05664 29.7703 7 29.7703 8.15528Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_22_664">
                                                <rect width="36" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>

                                <a className='hover:fill-secondary scale-125 hover:scale-150 stroke-emerald-700 hover:stroke-secondary'>
                                    <svg width="24" height="24" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.8975 0H16.999V23.8405C16.999 26.6812 14.7304 29.0145 11.9071 29.0145C9.0839 29.0145 6.81525 26.6812 6.81525 23.8405C6.81525 21.0507 9.0335 18.7681 11.7559 18.6667V12.6812C5.75655 12.7826 0.916748 17.7029 0.916748 23.8405C0.916748 30.029 5.85737 35 11.9576 35C18.0577 35 22.9983 29.9783 22.9983 23.8405V11.6159C25.2166 13.2391 27.9389 14.2029 30.8126 14.2537V8.26812C26.3761 8.11595 22.8975 4.46376 22.8975 0Z" fill="white" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
