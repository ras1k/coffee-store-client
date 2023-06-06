import React from 'react';

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="flex justify-between p-5 w-full">
                    <div className='mt-5'>
                        <h2 className="card-title">{name}</h2>
                        <p>{quantity}</p>
                        <p>{taste}</p>
                        <p>{supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className='btn-group btn-group-vertical space-y-4'>
                            <button className='btn btn-active'>View</button>
                            <button className='btn btn-accent text-white '>Edit</button>
                            <button className='btn btn-error text-white '>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;