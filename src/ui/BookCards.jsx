import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCards = ({ book }) => {
    return (
        <Link
        to={`/bookDetails/${book.bookId}`}
        className="card bg-base-100 border border-[#13131310] rounded-2xl w-full">
            <figure className='bg-base-300 rounded-2xl py-5 mb-4 m-6'>
                <img className='w-28 h-32'
                    src={book.image}
                    alt="" />
            </figure>

            <div className='flex gap-3 px-6'>
                {
                    book.tags.map((tag, index) => (
                        <p
                            key={index}
                            className='bg-[#23BE0A10] px-3 py-1 text-green-500 rounded-full'>{tag}</p>
                    ))
                }
            </div>
            <div className="card-body">
                <h2 className="card-title font-playfair text-2xl font-bold">
                    {book.bookName}
                </h2>
                <p className='text-base font-medium text-[#131313]'>By : {book.publisher}</p>
                <span className='border border-dashed text-gray-300 my-2'></span>
                <div className="card-actions justify-between items-center">
                    <p className='text-[#131313] font-semibold text-base'>{book.category}</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#131313] font-semibold text-base'>{book.rating}</p>
                        <p className='text-2xl'><FaRegStar /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCards;