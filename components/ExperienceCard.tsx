import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'
import Image from 'next/image'

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={urlFor(experience?.companyImage).url()} alt='companyimage'
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }} />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech */}
                    {experience?.technologies.map((tech) => (
                        <Image key={tech._id} className='h-10 w-10 rounded-full' src={urlFor(tech?.image).url()} alt='technology' height={2000} width={2000} />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience?.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience?.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}