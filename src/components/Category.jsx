import React from 'react'

const Category = ({ finalCategory,setCatName}) => {
    // console.log("kkkkkk========>",finalCategory)
    let cat = finalCategory.map((v, i) => {
        return (
            <li onClick={()=>setCatName(v)} key={i} className='text-gray-500 rounded-md bg-[#ccc] p-[5px] cursor-pointer font-serif mb-2 hover:text-indigo-700'>
              {v}
            </li>
        )
    })

    return (
        <div>
            <h3 className='text-[20px]  p-[5px] text-indigo-600 font-semibold'>Products Category</h3>
            <ul>
                {  
                cat
                }
            </ul>
        </div>
    )
}

export default Category