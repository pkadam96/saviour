import React from 'react';
import logo from '../assets/images/Logo.png';
import { FaTwitter, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <div className="bg-dark text-white p-8" style={{ background: 'linear-gradient(180deg, #030405 0%, #120101 100%)' }}>
            <div className="flex justify-center">
                <img src={logo} alt="logo"/>
            </div>
            <h1 className="font-poppins text-center mt-4 text-custom-h1 font-semibold" style={{ background: "linear-gradient(90deg, #FF002A 0%, #720005 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                SITEMAP
            </h1>

            <ul className="flex flex-wrap items-center justify-center gap-4 list-none text-center mt-4">
                <li>Home</li>
                <li>IDO</li>
                <li>Tokenomics</li>
                <li>Road Map</li>
                <li>Whitepaper</li>
                <li>Pledge</li>
                <li>NEF</li>
                <li>Games</li>
            </ul>
            <div className="flex justify-center mt-8 space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl text-pink" />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="text-2xl text-pink" />
                </a>
                <a href="mailto:support@example.com">
                    <FaEnvelope className="text-2xl text-pink" />
                </a>
            </div>
        </div>
    );
};

export { Footer };
