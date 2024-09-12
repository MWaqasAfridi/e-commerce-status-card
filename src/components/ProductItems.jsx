import React from 'react'

const ProductItems = ({pdata}) => {

    // console.log(pdata)
    return (
        <>
            <div className="shadow-lg text-center pb-4">
                <img src={pdata.thumbnail} alt="" />
                <h4 className='text-gray-500'>{pdata.title}</h4>
                <b className='text-indigo-500'>${pdata.price}</b>
            </div>

        </>
    )
}

export default ProductItems