import React, { useEffect, useState } from 'react';
import Img from '../assets/images/Brick_Matrix_Generate.png';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const introOffset = document.getElementById('introduction')?.offsetTop || 0;
            setIsVisible(scrollTop > introOffset - window.innerHeight / 2);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="introduction" className='text-white bg-dark relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 h-full w-full'></div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden pt-10 px-8 relative z-10">
                <motion.h1 
                    className='font-custom-h1 text-custom-h1 font-shojumaru text-pink mb-4 text-center'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.8 }}
                >
                    INTRODUCTION
                </motion.h1>
                <motion.img 
                    src={Img} 
                    alt="Brick_Matrix_Generate_image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.8 }}
                />
                <div className='text-center pb-8'>
                    <motion.p 
                        className='text-2xl text-center font-zcool-kuaile my-8'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        We've all been in the mud once, and now we've decided to fight it out. <br /> 
                        Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! <br /> 
                        Our mission is to empower everyone to share wealth and succeed. <br /> 
                        read more...
                    </motion.p>
                    <motion.button 
                        className="ml-auto text-lg px-5 py-3 lg:px-6 lg:py-4 text-white rounded-3xl lg:rounded-3xl font-zcool-kuaile font-semibold text-sm lg:text-base hover:shadow-lg transition-shadow"
                        style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Documents
                    </motion.button>
                </div>
            </div>

            {/* Laptop Layout */}
            <div className="hidden sm:flex items-center justify-center px-8 gap-x-8 relative z-10">
                <motion.div 
                    className='w-1/2 pl-28'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='text-4xl font-custom-h1 font-shojumaru text-pink'>INTRODUCTION</h1>
                    <p className='text-2xl font-zcool-kuaile my-8'>
                        We've all been in the mud once, and now we've decided to fight it out. <br /> 
                        Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! <br /> 
                        Our mission is to empower everyone to share wealth and succeed. <br /> 
                        read more...
                    </p>
                    <motion.button 
                        className="ml-auto px-2 py-2 lg:px-6 lg:py-4 text-white rounded-xl lg:rounded-3xl font-zcool-kuaile text-sm lg:text-base hover:shadow-lg transition-shadow"
                        style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Documents
                    </motion.button>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={Img} alt="Brick_Matrix_Generate_image" />
                </motion.div>
            </div>
        </div>
    );
};

export { Introduction };
