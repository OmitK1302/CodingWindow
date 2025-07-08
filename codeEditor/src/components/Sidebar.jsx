import React from 'react'

const Sidebar = ({totalProblems, changeQuesHandler}) => {
    let val = 1;
    return (
        // const totalProblems = 5; // example number

        <div className='w-[80px] bg-[#dbeafe] text-black ml-4 mt-2 rounded-sm z-10 shadow-[10px_15px_40px_rgba(0,0,0,0.25)] max-h-lvh overflow-scroll bg-gradient-to-r from-[#dbeafe] to-[#bfdbff]'>
            {Array.from({ length: totalProblems }).map((_, i) => (
                <div key={i} className="w-full p-2 flex justify-center items-center cursor-pointer shadow-[0px_12px_60px_rgba(21,93,252,0.25)] hover:bg-[#155dfc] hover:text-white rounded-sm" onClick={() => changeQuesHandler(i)}> {i + 1}</div>
            ))}
        </div>

    )
}

export default Sidebar