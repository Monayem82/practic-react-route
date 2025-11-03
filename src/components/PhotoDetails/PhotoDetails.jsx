import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PhotoDetails = () => {
    const photoDetails = useLoaderData()
    console.log(photoDetails)

    const navigate=useNavigate()

    const handleGOBack=()=>{
        navigate('/about')
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm justify-center">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{photoDetails.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button onClick={handleGOBack} className="btn btn-primary">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetails;