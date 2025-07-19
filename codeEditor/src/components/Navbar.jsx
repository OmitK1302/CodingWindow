import React, { useState } from 'react'
import Timer from './TestComponents/timer.jsx';
import hamburger from "../assets/CodeEditor/hamburger.svg"
import Sidebar from "./TestComponents/Sidebar.jsx"
import cross from "../assets/CodeEditor/cross.svg"

const Navbar = ({problems, currProb, changeQuesHandler, setQue_no}) => {
    
    if ("getBattery" in navigator) {
        navigator.getBattery().then((battery) => {
            console.log("Battery level:", battery.level);
        });
    }
    // console.log(currProb)

    const [showSidebar, setShowSidebar] = useState(false);
    // console.log(showSidebar);
    // console.log(totalProblems);
    const sidebarHandler = () => {
        setShowSidebar(!showSidebar); 
    }

    const submitHandler = () => {
        console.log("Submit clicked!");
        // Submit handler
    }


    return (
        
        <div>

            <div className='flex bg-[#dbeafe] py-2 px-6 justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='flex items-center cursor-pointer'>
                        <button onClick={() => sidebarHandler()} className='cursor-pointer'>
                            <img width={32} src={showSidebar ? cross : hamburger} alt="question menu" />
                        </button>
                    </div>

                    

                    <div className=''>
                        <h1 className='p-0 text-3xl font-semibold'>Coding Platform</h1>
                    </div>
                </div>


                {/* <div className='flex w-20 gap-2'>
                    <button onClick={() => setQue_no((prev) => ((prev - 1) >= 0 ? prev - 1 : totalProblems - 1))} className='bg-[#0d1929] text-white font-semibold w-1/2 rounded-sm cursor-pointer'>{`<`}</button>
                    <button onClick={() => setQue_no((prev) => ((prev + 1) % totalProblems))} className='bg-[#155dfc] text-white rounded-sm font-semibold w-1/2 cursor-pointer'>{`>`}</button>
                </div> */}



                <div className='flex flex-row-reverse gap-2'>
                    <button className='px-4 cursor-pointer bg-[#155dfc] text-white rounded-sm' onClick={() => submitHandler()}> Submit </button>
                    <Timer />
                </div>
            </div>


            {/* Backdrop – covers below navbar */}
            {showSidebar && (
            <div
                onClick={() => setShowSidebar(false)}
                className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black opacity-30 z-30"
            />
            )}

            {/* Sidebar – slides in below navbar */}
            <div
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out 
                ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}
            >
            <Sidebar
                problems={problems}
                currProb={currProb}
                changeQuesHandler={changeQuesHandler}
                setShowSidebar={setShowSidebar}
            />
            </div>



            {/* <div className= {`${!showSidebar && "hidden"} absolute z-10`}>
                <Sidebar problems={problems} currProb={currProb} changeQuesHandler={changeQuesHandler} setShowSidebar={setShowSidebar}/>
            </div> */}
        </div>
        
    )
}

export default Navbar