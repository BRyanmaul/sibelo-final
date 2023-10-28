import { Link, router, usePage } from '@inertiajs/react'
import { data } from 'autoprefixer'
import React from 'react'


const isNews = (news) => {
    return news.map((data, i) => {
       
        return (
            
            <>
                <div key={i} className="w-max relative rounded-xl h-80 bg-slate-200 shadow-xl mb-6 ">
                    <figure>
                    
                        <img src="https://source.unsplash.com/360x200?competition" alt="" className='rounded-md rounded-b-none' /></figure>
                    <div className="w-[360px] rounded-xl px-2">
                        <h2 className="text-secondary text-lg lg:text-xl text-justify ">{data.title.substring(0,25)}
                        <div className="rounded-md absolute top-0 left-0 bg-primary w-fit px-1 text-center text-base text-white">NEW</div>
                        </h2>
                    <p className='rounded-none text-justify text-base lg:text-lg'>{data.description.substring(0,80)}</p>
                    <div className="rounded-md absolute top-0 right-0 w-fit px-1 text-center uppercase bg-secondary text-white ">
                        {data.category}
                    </div>
                        <Link href={route('post.show', { data })}>
                        <a  className=' text-primary bg-slate-300 rounded-lg shadow-2xl lg:text-lg text-base px-2'>Baca Selengkapnya.. </a>
                        </Link>
                    </div>
                    </div>   
               
            </>
        )
    })
}

export const Lomba = ({ news }) => {
    // console.log("data news yang ada di komponen anak: ", news)
    return !news ? noNews() : isNews(news) 
}

const noNews = () => {
    return (
        <div>Saat ini belum ada Informasi Lomba & Beasiswa Terbaru</div>
    )
}

