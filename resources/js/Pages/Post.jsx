import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from 'react'
import { Head } from "@inertiajs/react";
import { useParams } from 'react-router-dom'
import { data } from "autoprefixer";

export default function Post(props) {
  console.log("data props: ", props)
  return (
    <AuthenticatedLayout
        user={props.auth.user} className=""> 
        <Head title="Single-Post"/>
    {/* Judul  */}
    <div  className="mx-10">

    <h1>{props.title}</h1>
    {/* <h1 >{props.data.id}</h1> */}
    <h1 >{props.kategori} </h1>
    {/* Content */}
    
    <div className="px-2">
        <p>{props.description}</p>
    </div>
    
    </div>
  </AuthenticatedLayout>
  )
  
}
  
