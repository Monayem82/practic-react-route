import React from 'react';
import { useLoaderData } from 'react-router';
import Photos from '../Photos/Photos';

const Home = () => {
    const photos=useLoaderData()
    console.log(photos.length)
    return (
        <div>
            <h1 className='text-center text-3xl'>home Gallary</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    photos.map(photo=><Photos key={photo.id} photo={photo}></Photos>)
                }
            </div>
        </div>
    );
};

export default Home;