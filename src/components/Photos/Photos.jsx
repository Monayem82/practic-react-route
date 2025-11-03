import React from 'react';
import { NavLink } from 'react-router';

const Photos = ({ photo }) => {
    const {albumId,title}=photo
    // console.log(photo)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{albumId}</p>
                <p>{title}</p>
                <div className="card-actions">
                    <NavLink to={`/photoDetails/${photo.id}`}><button className="btn btn-primary">Show Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Photos;