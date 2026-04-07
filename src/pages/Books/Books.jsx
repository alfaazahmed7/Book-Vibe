import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../listedBooks/ListedReadList';
import ListedWishList from '../../listedBooks/ListedWishList';

const Books = () => {
    const { storedBooks, wishLists } = useContext(BookContext);

    return (
        <div className='w-10/12 mx-auto my-10'>
            <h2 className='text-center py-10 bg-gray-300 rounded-xl mb-5 font-bold text-3xl text-[#131313]'>Books</h2>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList />
                </TabPanel>
                <TabPanel>
                    <ListedWishList />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;