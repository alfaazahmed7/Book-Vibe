import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {
    const {storedBooks} = useContext(BookContext);
    console.log(storedBooks);
    
    return (
        <div>
            Books are here!
        </div>
    );
};

export default Books;