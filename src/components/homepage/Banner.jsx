import React from 'react';
import BannerImg from "../../assets/book.png";

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto lg:flex justify-between items-center gap-10 bg-base-300 my-5 rounded-xl md:px-10 lg:px-32 min-h-[60vh] py-5'>
            <div className='flex-1 text-center lg:text-left mb-10 lg:mb-0'>
                <h2 className='text-4xl lg:text-6xl font-bold lg:leading-[84px] mb-8 font-playfair'>Books to freshen up your bookshelf</h2>
                <a className="bg-[#23BE0A] py-3 px-5 rounded-lg text-white font-semibold">View The List</a>
            </div>
            <div className='flex-1 flex justify-center lg:justify-end'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;