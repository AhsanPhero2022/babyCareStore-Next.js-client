import React from 'react';

const CategoryBrand = () => {
    return (
        <div className='border px-16 py-12 border-1 my-12'>
            <h2 className='text-2xl font-semibold'>Category/Brand</h2>
           <div className='flex flex-col'>
            <button className='btn btn-ghost'>Baby Shoe</button>
            <button className='btn btn-ghost'>Baby Food</button>
            <button className='btn btn-ghost'>Baby Cloth</button>
            <button className='btn btn-ghost'>Baby Traveling</button>
            <button className='btn btn-ghost'>Baby Car</button>
            <button className='btn btn-ghost'>Baby Diaper</button>
           </div>
        </div>
    );
};

export default CategoryBrand;