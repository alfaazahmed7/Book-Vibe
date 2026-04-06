import React, { use } from 'react';
import BookCards from '../../ui/BookCards';

const bookPromise = fetch("/booksData.json")
    .then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);

    return (
        <div className='my-10 w-10/12 mx-auto'>
            <h2 className='font-playfair text-[40px] font-bold text-center mb-5'>Books</h2>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-20 justify-items-center'>
                {
                    books.map((book, index) => {
                        return (
                            <BookCards key={index} book={book} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;