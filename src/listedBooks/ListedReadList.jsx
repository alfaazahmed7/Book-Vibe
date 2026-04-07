import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';
import { CiLocationOn } from 'react-icons/ci';
import { RiAccountCircleLine, RiPagesLine } from 'react-icons/ri';

const ListedReadList = () => {
    const { storedBooks } = useContext(BookContext);

    return (
        <div className=''>
            {
                storedBooks.map((book) => (
                    <div className='lg:flex items-center gap-5 border p-5 mb-5 border-[#13131330] rounded-xl'>
                        <div className='bg-gray-300 px-15 py-5 rounded-xl mb-5 lg:mb-0'>
                            <img
                                className='w-28 h-36 mx-auto'
                                src={book.image} alt="" />
                        </div>

                        <div className='space-y-2 lg:space-y-3'>
                            <h2 className='text-[#131313] text-3xl font-semibold font-playfair'>{book.bookName}</h2>
                            <p className='font-semibold text-[#131313]'>By : {book.publisher}</p>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center gap-4'>
                                    <p className='font-bold'>Tag</p>
                                    <div className='flex gap-2'>
                                        {
                                            book.tags.map((tag, index) => (
                                                <p
                                                    key={index}
                                                    className='bg-[#23BE0A10] px-3 py-1 text-green-500 rounded-full'>#{tag}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='text-[#131313]'>
                                        <CiLocationOn />
                                    </div>
                                    <p className='text-[#131313cf]'>Year of Publishing: {book.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className='flex gap-5 text-[#13131380]'>
                                <div className='flex items-center gap-2'>
                                    <p><RiAccountCircleLine /></p>
                                    <p>Publisher: {book.publisher}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p><RiPagesLine /></p>
                                    <p>Page {book.totalPages}</p>
                                </div>
                            </div>
                            <p className='border border-[#13131310]'></p>

                            <div className='flex gap-3'>
                                <p className='text-[#328EFF] bg-[#328EFF30] px-3 py-1 rounded-full font-medium'>Cetegory: {book.category}</p>
                                <p className='bg-[#FFAC3330] px-3 py-1 rounded-full text-[#FFAC33] font-medium'>Rating: {book.rating}</p>
                                <a className='bg-[#23BE0A] px-3 py-1 rounded-full text-white font-medium'>View Details</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ListedReadList;