import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex mx-28 h-96 mt-20'>
                <div className='text-start'>
                    <h1 className='text-4xl font-semibold'>CODING BOOTCAMP FOR KIDS</h1>
                    <p className='text-xl'>Brought to you by India’s First Coding Bootcamp</p>
                    <p className='text-xl text-primary'>The Hacking School</p>

                    <br />

                    <p className='text-xl font-semibold'>Coding is the new literacy</p>
                    <p className=''>According to a research from NASA, the kids creativity is at its peak during this age i.e 6-14. “NOW” is the perfect time to introduce your kid to the coding culture .</p>
                </div>

                <div>
                    <img src="https://kids.code.in/static/media/homepic.9a0d4183.png" />
                </div>

            </div>
        </div>
    );
};

export default Banner;