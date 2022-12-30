import React from 'react';

const Cards = () => {

    const details = [
        { id: 1, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 2, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 3, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 4, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 5, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 6, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 7, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 8, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 9, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 10, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 11, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' },
        { id: 12, logo: "https://res.cloudinary.com/dhznnpvlm/image/upload/v1635973254/kids-code-in/2021-11-03T21:00:53.197Z.png", header: 'Limitless Creativity', describe: 'Kids learn the fundamentals of coding and can apply on the go to build their very own unique game and product. Play. Learn. Build. (or) Play. Code. Create.' }
    ];

    return (
        <div className='m-20'>

            <h1 className='text-4xl text-primary my-10 underline underline-offset-8'>1:1 PROGRAMS</h1>

            <div className='grid grid-cols-3 gap-y-20 justify-center items-center pl-20'>
                {
                    details.map(detail =>
                        <div className='w-72 card shadow-2xl'>
                            <div className='m-5'>
                                <img src={detail.logo} alt="" />
                            </div>
                            <div className='mt-5'>
                                <div className='flex justify-between mx-2'>
                                    <h1 className='font-semibold'>{detail.header}</h1>
                                    <button class="btn btn-xs rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Aged above 13</button>
                                </div>
                                <p className='text-xs m-5'>{detail.describe}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Cards;