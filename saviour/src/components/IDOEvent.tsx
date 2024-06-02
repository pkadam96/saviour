import React, { useEffect, useState } from 'react';
import BackgroundImage from '../assets/images/IDOBackground.jpg';

const IDOEvent: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<string>('');

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const target = new Date();
            target.setHours(14, 0, 0, 0); 

            if (now > target) {
                target.setDate(target.getDate() + 1); 
            }

            const difference = target.getTime() - now.getTime();

            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    return (
        <div className='bg-dark text-white font-zcool-kuaile' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className='image-overlay' style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
                <h1 className='lg:text-4xl text-3xl pt-16 font-custom-h1 font-shojumaru text-pink text-center'>PARTICIPATE IN OUR IDO EVENT</h1>
                <div className='sm:flex items-center justify-center px:4 lg:px-12 py-4 '>
                    <div className='text-center lg:p-8 lg:w-1/2'>
                        <p className="lg:w-2/3 mx-4 lg:mx-auto leading-8 mb-6">During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success. <span className="lg:hidden">By participating in this exclusive event, you'll secure your position at the forefront of blockchain innovation, with the potential for high rewards.</span></p>
                        <button className="ml-auto px-2 py-2 lg:px-4 lg:py-3 text-white bg-pink rounded-xl lg:rounded-2xl font-shojumaru text-sm lg:text-base relative">TOKEN INFO</button>
                        <div style={{ marginTop: "-25px" }}>
                            <div className="flex items-center justify-center">
                                <div className="border-2 border-orange rounded-2xl p-8 lg:w-7/12 text-left">
                                    <table className="w-full">
                                        <tbody>
                                            <tr>
                                                <td>Total Token <br /> Supply</td>
                                                <td className="text-orange">20%</td>
                                            </tr>
                                            <tr>
                                                <td>Soft Cap</td>
                                                <td className="text-orange">200 BNB</td>
                                            </tr>
                                            <tr>
                                                <td>Initial exchange <br /> rate</td>
                                                <td className="text-orange">1 BNB</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="pl-0">Recommended Referral Commission</td>
                                            </tr>
                                            <tr>
                                                <td>1st Generation</td>
                                                <td className="text-orange">5%</td>
                                            </tr>
                                            <tr>
                                                <td>2nd Generation</td>
                                                <td className="text-orange">2%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button className="ml-auto px-2 py-2 lg:px-4 lg:py-3 text-white rounded-xl lg:rounded-2xl my-8 font-zcool-kuaile text-sm lg:text-base" style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}>Connect Wallet</button>
                            <h1 className='text:xl lg:text-2xl font-custom-h1 font-shojumaru text-pink w-9/12 mx-auto my-8'>BECOME AN AFFILIATE & EARN 7% AS COMMISSION!</h1>

                            <div className="flex border-2 border-orange rounded-full mt-5 w-full lg:w-3/4 lg:m-auto">
                                <input type="text" placeholder='Generate a unique referral link' className="bg-transparent px-5 py-3 w-2/3 outline-none" />
                                <button className=" ml-auto m-1 px-2 py-2 lg:px-4 lg:py-3 text-white bg-pink rounded-full lg:rounded-full font-zcool-kuaile text-sm lg:text-base">Generate</button>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-8 lg:w-1/2 ">
                        <h1 className="ml-auto px-2 py-2 lg:px-4 lg:py-2 text-white bg-dark font-poppins font-bold text-3xl relative inline-block border-2 border-orange">{timeLeft}</h1>
                        <div className="border-2 border-orange mx-4 lg:mx-12 lg:px-12 pt-8 rounded-2xl" style={{ marginTop: "-32px" }}>
                            <h1 className='text-4xl font-custom-h1 font-shojumaru text-pink mb-7 mt-8'>PRESALE 1</h1>
                            <p className="lg:mb-6 lg:text-custom-h1">1 Saviour = 0.657 USDT</p>
                            <p className="lg:mb-6 lg:text-xl">Next Stage Price = 0.723 USDT</p>
                            <p className="lg:mb-6 lg:text-xl">Sold - $34,56,56,764/$50,00,00,000</p>
                            <p className="lg:mb-6 lg:text-xl">Raised - $34,56,56,764/$40,00,00,000</p>
                            <input type="text" placeholder='Enter the amount (BNB)' className="border-2 px-4 py-2 border-orange rounded-full mt-4 lg:mt-5 lg:w-full lg:m-auto bg-transparent" /><br />
                            <input type="text" placeholder='Minimum Quantity to Buy' className="border-2 px-4 py-2 border-orange rounded-full mt-4 lg:mt-5 lg:w-full lg:m-auto bg-transparent" /><br />
                            <input type="text" placeholder='Maximum Quantity of Tokens' className="border-2 px-4 py-2 border-orange rounded-full mt-4 lg:mt-5 lg:w-full lg:m-auto bg-transparent" /><br />
                            <button className="m-8 px-5 py-3 text-white rounded-xl lg:rounded-3xl font-zcool-kuaile text-sm lg:text-base" style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}>Buy</button>
                            <button className="m-8 px-5 py-3 text-white rounded-xl lg:rounded-3xl font-zcool-kuaile text-sm lg:text-base" style={{ background: 'linear-gradient(90deg, #ED0137 0%, #F05733 100%)' }}>Claim Drop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { IDOEvent };
