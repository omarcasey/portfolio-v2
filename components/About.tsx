import { motion } from 'framer-motion'
import React from 'react'
import profilePic from '../public/me.jpg'
import Image from 'next/image'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    pageinfo: PageInfo
}

export default function About({ pageinfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}>
            <div className='flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl 
        px-10 justify-evenly mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    About
                </h3>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Image src={urlFor(pageinfo?.profilePic).url()} alt='profilePic' height={2000} width={2000}
                    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]' />
                </motion.div>

                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#f7ab0a]'>little</span> background</h4>
                    <p className='text-lg'>{pageinfo?.backgroundInformation}</p>
                </div>
            </div>
        </motion.div>

    )
}