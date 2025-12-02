import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                <div className='flex-1 pl-32'>
                    <motion.img
                        animate={{
                            y: [100, 150, 100]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity
                        }}

                        src={team1}
                        className="max-w-[350px] rounded-lg shadow-2xl border-blue-500 rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8"
                    />

                    <motion.img
                        animate={{
                            x: [100, 150, 100]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity
                        }}

                        src={team2}
                        className="max-w-[350px] rounded-lg shadow-2xl border-blue-500 rounded-t-[40px] rounded-br-[40px] border-s-8 border-b-8"
                    />
                    
                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: { duration: 2 }

                        }}
                        className="text-5xl font-bold">Remote
                        <motion.span
                            animate={
                                {
                                    color: ['#fcba03', '#2647b5', '#b52685'],
                                    transition: { duration: 2, repeat: Infinity }
                                }
                            }
                        >Job</motion.span> for you</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;