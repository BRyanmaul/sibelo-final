import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import pp from "./../../../image/profile.png"
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import send from './../../../image/check-square.svg'
import Pengajuan from './Pengajuan';


const Index = (props) => {

  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,


  });

  return (
    <section>
      <Head title="Dashboard Admin" />
      <Pengajuan props={props} />
    </section>

  )
}

export default Index