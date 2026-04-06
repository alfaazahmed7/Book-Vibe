import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';

const bookPromise = fetch("/booksData.json")
    .then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);
    console.log(books);

    return (
        <div className='my-10 w-10/12 mx-auto'>
            <h2 className='font-playfair text-[40px] font-bold text-center mb-5'>Books</h2>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center'>
                {
                    books.map((book) => {
                        return (
                            <div className="card bg-base-100 w-96 md:w-80 lg:w-96 xl:w-80 2xl:w-96 border border-[#13131310] rounded-2xl">
                                <figure className='bg-base-300 rounded-2xl py-5 mb-4 m-6'>
                                    <img className='w-28 h-32'
                                        src={book.image}
                                        alt="" />
                                </figure>

                                <div className='flex gap-3 px-6'>
                                    {
                                        book.tags.map((tag) => (
                                            <p className='bg-[#23BE0A10] px-3 py-1 text-green-500 rounded-full'>{tag}</p>
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
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;