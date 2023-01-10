import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {
    pageinfo: PageInfo
}

export default function Contact({ pageinfo }: Props) {

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = formData => {
        console.log(formData);
        window.location.href = `mailto:omarcasey4@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
    justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I've got just what you need.{' '}
                    <span className='underline decoration-[#f7ab0a]/50'>Lets Talk.</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>{pageinfo?.phoneNumber}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>{pageinfo?.email}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>{pageinfo?.address}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type='text'></input>
                        <input {...register('email')} placeholder='Email' className='contactInput' type='email'></input>
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'></input>

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}