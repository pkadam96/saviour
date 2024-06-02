import React, { useState } from 'react';
import img from '../assets/images/image 1.png';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: '1     Why choose "Savior"?',
            answer: "'Savior' offers a unique approach to blockchain technology, focusing on community empowerment and wealth sharing. Our innovative ecosystem is designed to provide maximum benefits to early adopters and ensure long-term success for all participants."
        },
        {
            question: "2     Why is the IDO duration so long?",
            answer: "The extended IDO duration allows for more participants to join and contribute to the project. It ensures a fair distribution of tokens and provides ample time for the community to engage with and understand the project's vision."
        },
        {
            question: "3     When will trading go live?",
            answer: "Trading will go live shortly after the IDO concludes. We are committed to providing a seamless transition to the trading phase, ensuring that all participants can trade their tokens on supported exchanges without delay."
        },
        {
            question: "4     When can we claim the tokens?",
            answer: "Tokens can be claimed immediately after the IDO ends. Participants will be notified with detailed instructions on how to claim their tokens securely through our official channels."
        }
    ];

    const handleQuestionClick = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const cardStyle = (index: number) => ({
       
        borderColor: hoveredCard === index ? 'rgba(255, 192, 203, 0.5)' : 'pink',
        
    });

    const keyframesStyle = `
       
        @keyframes flip {
            0% { transform: rotateX(90deg); opacity: 0; }
            100% { transform: rotateX(0); opacity: 1; }
        }
    `;

    return (
        <div className='bg-dark lg:px-28'>
            <style>{keyframesStyle}</style>
            <h1 className='lg:text-4xl text-3xl pt-16 lg:ml-96 font-custom-h1 font-shojumaru text-pink text-center'>FAQ</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center mx-auto pb-12'>
                <img src={img} alt="FAQ Image" className="mb-8 lg:mb-0 w-64 lg:w-full" />
                <div className="w-full flex flex-col justify-end p-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="flex items-center mb-4 w-full lg:pr-12"
                            style={cardStyle(index)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                onClick={() => handleQuestionClick(index)}
                                className="px-5 w-full py-4 border-2 border-pink rounded-lg bg-transparent text-white cursor-pointer"
                            >
                                <input
                                    type="text"
                                    readOnly
                                    placeholder={faq.question}
                                    className="w-full bg-transparent outline-none cursor-pointer font-shojumaru"
                                />
                                {activeQuestion === index && (
                                    <div style={{ animation: 'flip 0.3s ease-in-out', transformOrigin: 'top center' }} className="mt-4 text-lg bg-black bg-opacity-70 p-4 rounded-lg font-zcool-kuaile">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { FAQ };
