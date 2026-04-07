import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishLists, setWishLists] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        const isExistingBook = storedBooks.find((book) => book.bookId === Number(currentBook.bookId));

        if (isExistingBook) {
            toast.error("The book is already exist");
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast(`${currentBook.bookName} is added to the read list`);
        }
        console.log(currentBook, storedBooks, "books");
    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error("This book is already in the read wish list");
            return;
        }

        const isExistingBook = wishLists.find((book) => book.bookId === Number(currentBook.bookId));

        if (isExistingBook) {
            toast.error("The book is already exist");
        }
        else {
            setWishLists([...wishLists, currentBook]);
            toast(`${currentBook.bookName} is added to the wish list`);
        }
        console.log(currentBook, storedBooks, "books");
        console.log(currentBook, wishLists, "books");
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishLists,
        setWishLists,
        handleWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;