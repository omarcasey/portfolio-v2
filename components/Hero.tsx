import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageinfo: PageInfo
}

export default function Hero({ pageinfo }: Props) {
    const [text] = useTypewriter({
        words: [`${pageinfo?.name}`, '<FrontEndCodingWizard />', 'Guy-Who-Lifts-Weights.tsx', '{ teamPlayer: true }'],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageinfo?.heroImage).url()} alt='profilePic' height={2000} width={2000}/>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>{pageinfo?.role}</h2>
                <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}