import { Link } from '@inertiajs/react';
import { useState } from 'react';


const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
   

    // const[isPage,setIsPage]= useState(false)

    // for (let i = 0; i < meta.total; i++) {
    //   if(i== current) {
    //     () => setIsPage(true)
    //   }
    // }
  return (
    <div className='grid grid-cols-12 gap-7 w-[700px] mx-auto z-0'>

        {/* {prev && <Link href={prev} className="btn">«</Link>}
        <Link className="px-5 m-auto text-xl btn btn-outline ">{current}</Link>
        {next && <Link href={next} className="btn">»</Link>}
         */}

         {/* {!isPage == false ? 
         <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border-2 bg-clip-border border-primary  bg-white'> 1</div> 
         : 
         <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 1</div>
        } */}

          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 1</div>
          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 2</div>
          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 3</div>
          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 4</div>
          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 5</div>
          <div className='m-10 px-4 py-2 w-10 h-10 rounded-md border bg-clip-border border-primary/30 bg-white'> 6</div>
          <div className='mx-20 pt-10  mt-3  h-10 rounded-md   ml-44 text-lg'>... </div>
         
        {prev && 
        <Link href={prev} className='mr-10 mt-10 -ml-2  border w-[90px]  text-center  py-2 h-10 rounded-md bg-clip-border border-primary/30 bg-white  pr=  '>« Prev</Link>
        }
       
        {next && 
        <Link href={next} className='mr-10 mt-10 ml-24   border w-[90px]   text-center  py-2 h-10 rounded-md bg-clip-border border-primary/30 bg-white '>Next »</Link>}
    
    </div>
    
  )
}
 
export default Paginator