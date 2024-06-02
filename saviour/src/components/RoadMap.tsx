import phase1 from '../assets/images/Phase1.png';
import phase2 from '../assets/images/Phase2.png';
import phase3 from '../assets/images/Phase3.png';
import phase4 from '../assets/images/Phase4.png';
import BackgroundImage from '../assets/images/Rectangle 21.jpg';

const RoadMap = () => {
    const cardStyle = {
        display: 'inline-block',
        position: 'relative',
        transition: 'transform 0.3s, box-shadow 0.3s',
        animation: 'float 2s ease-in-out infinite',
        zIndex: 1,
    };

    const keyframesStyle = `
        @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
        }

        .card::before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -10px;
            width: 100%;
            height: 20px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0) 80%);
            transform: translateX(-50%);
            opacity: 0;
            transition: opacity 0.3s;
            z-index: -1;
        }

        .card:hover::before {
            opacity: 1;
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(255, 192, 203, 0.5);
        }
    `;

    return (
        <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <style>{keyframesStyle}</style>
            <div className='image-overlay pb-12' style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
                <h1 className='lg:text-4xl text-3xl pt-16 mb-8 lg:pb-20 font-custom-h1 font-shojumaru text-pink text-center'>ROAD MAP</h1>
                <div className='flex flex-wrap justify-between w-3/4 mx-auto mb-12'>
                    <div style={cardStyle} className="card w-36 mb-4 lg:w-auto">
                        <img src={phase1} alt="" className='w-full' />
                    </div>
                    <div style={cardStyle} className="card w-36 mb-4 lg:w-auto">
                        <img src={phase2} alt="" className='w-full' />
                    </div>
                    <div style={cardStyle} className="card w-36 mb-4 lg:w-auto">
                        <img src={phase3} alt="" className='w-full' />
                    </div>
                    <div style={cardStyle} className="card w-36 mb-4 lg:w-auto">
                        <img src={phase4} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { RoadMap }
