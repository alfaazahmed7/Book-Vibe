import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExistingBook = storedBooks.find((book) => book.bookId === Number(currentBook.bookId));

        if (isExistingBook) {
            toast("The book is already exist");
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.error(`${currentBook.bookName} is added to the list`);
        }
        console.log(currentBook, storedBooks, "books");
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;