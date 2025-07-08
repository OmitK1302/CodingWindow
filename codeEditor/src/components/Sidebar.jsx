import React from 'react'

const Sidebar = ({totalProblems, changeQuesHandler}) => {
    let val = 1;
    return (
        // const totalProblems = 5; // example number

        <div className='w-[80px] bg-amber-950 text-white px-1.5 m-2 rounded-sm z-10'>
            {Array.from({ length: totalProblems }).map((_, i) => (
                <div key={i} className="p-2 flex justify-center items-center border-b-1 cursor-pointer" onClick={() => changeQuesHandler(i)}> {i + 1}</div>
            ))}
        </div>

    )
}

export default Sidebar