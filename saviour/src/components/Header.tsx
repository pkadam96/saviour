import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';
import BackgroundImage from '../assets/images/Header_Background.jpg';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header className="bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url(${BackgroundImage})`, height: '588px' }}>
            <div className="w-full fixed top-0 flex items-center justify-between lg:justify-around p-4">
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={Logo} alt="Saviour logo" className="w-15 h-12 ml-6 lg:w-auto lg:h-auto" />
                    <h1 className="font-zcool-kuaile text-custom-h1 font-custom-h1 text-2xl lg:text-custom-h1 lg:font-custom-h1">Saviour</h1>
                </motion.div>
                <div>
                    <nav className={`fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center space-y-4 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 lg:bg-transparent lg:translate-x-0`}>
                        <ul className="flex flex-col items-center space-y-4 bg-black py-4 px-6 font-zcool-kuaile lg:flex-row lg:space-y-0 lg:space-x-8 lg:rounded-custom">
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            ><a href="#home">Home</a></motion.li>
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            ><a href="#ido">IDO</a></motion.li>
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            ><a href="#tokenomics">Tokenomics</a></motion.li>
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            ><a href="#roadmap">Roadmap</a></motion.li>
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <select className="bg-black text-white rounded-lg">
                                    <option value="coming-soon">Coming Soon</option>
                                    <option value="other-option">Other Option</option>
                                </select>
                            </motion.li>
                        </ul>
                    </nav>
                    <button onClick={() => setMenuOpen(!menuOpen)} className=" fixed left-2 top-5 mx-2 lg:hidden">
                        <span className="hamburger-icon">{menuOpen ? '✖' : '☰'}</span>
                    </button>
                </div>
                <motion.div
                    className="lg:flex"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <button className="ml-auto px-2 py-2 lg:px-4 lg:py-3 text-white rounded-xl lg:rounded-2xl font-poppins font-semibold text-sm lg:text-base" style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}>Connect Wallet</button>
                </motion.div>
            </div>
            <motion.div
                className="bg-black bg-opacity-25 lg:w-8/12 sm:bg-opacity-0 sm:w-full m-8 py-2 text-center rounded-3xl mt-16"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <h1 className="text-custom-h1 font-custom-h1 font-shojumaru">Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</h1>
            </motion.div>
        </header>
    );
};

export { Header };
