import { Link, Head } from '@inertiajs/react';
import Login from './Auth/Login';
import foto from './../../image/Foto_home.jpg'
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen blur-xs hover:filter-none bg-dots-darker bg-center    dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                
                <div class="artboard flex artboard-horizontal blur-none gradient-base3 ">
                        <img src={foto} alt="" />
                        <div className='flex-col m-auto'>
                        <h1 className='text-gradient text-4xl mx-14 pb-5'>Selamat Datang Di SIBELO</h1>
                        <p className='text-gradient block text-base mx-14  flex-wrap m-auto'>Sistem Informasi Beasiswa dan Lomba Serta Pencatatan Diri Mahasiswa UNJA</p>
                        <div className="mt-20 text-center">
                    {auth.user ? 
                        <div className='mr-14'>
                     <p className='text-gradient flex-wrap m-auto'>Anda Sudah Login</p>
                        <Link
                            href={route('home')}
                            className="font-semibold btn-glass h-1"
                            >
                                                   

                            Lihat Home
                        </Link>
                            </div>
                     : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold btn-glass h-1"
                            >
                                Log in
                            </Link>
                            
                            
                            <Link
                                href={route('register')}
                                className="font-semibold mx-4 btn-glass2 "
                            >
                                Masuk Sebagai Tamu
                            </Link>
                        </>
                    )}
                </div>
                        </div>

                </div>
                
            </div>
            
            
         
     
        </>
    );
}
