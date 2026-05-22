import React from 'react'
import { ArrowRight, Video, Zap, Star } from 'lucide-react';
import Navbar from './Navbar'
import ShowResume from '../../assets/image/show.webp'
import BadgeAv from './BadgeAv'
import HeadingAndPadding from './HeadingAndPadding';
import CtaButton from './CtaButton';


const Hero = () => {
    return (
        <div className=" bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg">

                {/* Background Glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
                    <div className="mt-10 sm:mt-16 w-125 h-125 rounded-full bg-indigo-300 opacity-20 blur-[120px] " />
                </div>

                {/* Inner container — max width + centered */}
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center pt-12 sm:pt-16 md:pt-20 pb-10 ">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-800 bg-blue-400/10 border border-indigo-200 rounded-full px-3 sm:px-4 py-1.5">
                        <Zap size={13} className="text-indigo-600 fill-indigo-500" />
                        <span>AI-Powered Resume Builder</span>
                    </div>

                    {/*  heading and Subheading*/}
                    <HeadingAndPadding />

                    {/* CTA Buttons */}
                    <CtaButton />

                    {/* Avatars + Stars */}
                    <div className="mt-8 sm:mt-10">
                        <BadgeAv />
                    </div>

                    {/* Preview Image Card */}
                    <div className="mt-10 sm:mt-12 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
                        <div
                            className="w-full aspect-video rounded-xl sm:rounded-2xl bg-cover bg-center bg-no-repeat shadow-xl shadow-indigo-100 border border-gray-100"
                            style={{ backgroundImage: `url(${ShowResume})` }}
                        />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero