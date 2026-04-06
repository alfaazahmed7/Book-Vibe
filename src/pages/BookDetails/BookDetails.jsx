import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();
    console.log(bookId);

    const books = useLoaderData();
    const expectedBook = books.find(book => book.bookId === Number(bookId));
    console.log("expectedBook", expectedBook);

    return (
        <div className='w-10/12 mx-auto lg:flex justify-between gap-10 my-10'>
            <div className='flex-1 bg-gray-200 py-10 rounded-xl mb-5'>
                <img
                    className='max-w-[425px] max-h-[600 px] mx-auto'
                    src={expectedBook.image} alt="" />
            </div>

            <div className='flex-1 space-y-4'>
                <h2 className='text-4xl font-bold font-playfair '>{expectedBook.bookName}</h2>
                <p className='font-semibold text-base'>By : {expectedBook.publisher}</p>
                <p className='border border-[#13131320]'></p>
                <p className='text-lg'>{expectedBook.category}</p>
                <p className='border border-[#13131320]'></p>
                <p><span className='font-bold'>Review : </span>{expectedBook.review}</p>
                <div className='flex items-center gap-8'>
                    <span className='font-bold'>Tag</span>
                    <div className='flex gap-4'>
                        {
                            expectedBook.tags.map((tag, index) => (
                                <p
                                    key={index}
                                    className='bg-[#23BE0A10] px-3 py-1 text-green-500 rounded-full'
                                >#{tag}</p>
                            ))
                        }
                    </div>
                </div>

                <div className='space-y-4'>
                    <div className='flex gap-10'>
                        <p className='opacity-70 w-40'>Number of Pages:</p>
                        <span className='font-bold'>{expectedBook.totalPages}</span>
                    </div>
                    <div className='flex gap-10'>
                        <p className='opacity-70 w-40'>Publisher:</p>
                        <span className='font-bold'>{expectedBook.author}</span>
                    </div>
                    <div className='flex gap-10'>
                        <p className='opacity-70 w-40'>Year of Publishing:</p>
                        <span className='font-bold'>{expectedBook.yearOfPublishing}</span>
                    </div>
                    <div className='flex gap-10'>
                        <p className='opacity-70 w-40'>Rating:</p>
                        <span className='font-bold'>{expectedBook.rating}</span>
                    </div>
                </div>

                <div className='flex items-center gap-10'>
                    <a className='p-4 border border-[#13131350] text-xl rounded-lg font-semibold'>Read</a>
                    <a className='bg-[#50B1C9] p-4 rounded-xl font-semibold text-white'>Wishlist</a>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;