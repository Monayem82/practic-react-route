import React from 'react';
import { useNavigate } from 'react-router';

const HandleError = () => {
    const navigate=useNavigate()

    const handleGo=()=>{
        navigate('/')
    }
    return (
        <div>
            <h2 className='text-3xl text-center'>This page are not available please check your path or speling</h2>
            <button onClick={handleGo} className='btn btn-active'>Go to Home page</button>
        </div>
    );
};

export default HandleError;