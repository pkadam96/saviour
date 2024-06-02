import Image from '../assets/images/Frame 1824.png';
import BackgroundImage from '../assets/images/Rectangle 20.jpg';

const TokenOmics = () => {
    return (
        <div className='bg-dark text-white font-zcool-kuaile' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className='image-overlay pb-12' style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>

                <h1 className='lg:text-4xl text-3xl pb-12 pt-16 lg:pb-20 font-custom-h1 font-shojumaru text-pink text-center'>TOKENOMICS</h1>
                <div className='sm:flex items-center justify-around '>
                    <div className='text-center px-4 lg:w-1/4'>
                        <button className="px-2 py-2 lg:px-4 lg:py-3 text-white bg-pink rounded-xl lg:rounded-2xl font-shojumaru text-sm lg:text-base">TOKEN DETAILS</button>
                        <div className="border-2 border-orange rounded-2xl p-12 lg:w-full text-left" style={{ marginTop: "-25px" }}>
                            <table className="w-full leading-10">
                                <tr>
                                    <td>Name</td>
                                    <td className="text-orange">Saviour</td>
                                </tr>
                                <tr>
                                    <td>Symbol</td>
                                    <td className="text-orange">SVR</td>
                                </tr>
                                <tr>
                                    <td>Total Supply</td>
                                    <td className="text-orange">1000 Trillion</td>
                                </tr>
                                <tr>
                                    <td>Decimals</td>
                                    <td className="text-orange">18</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-12 px-4">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export { TokenOmics }