import React, { useState } from 'react'
import Timer from './timer';
import hamburger from "../assets/CodeEditor/hamburger.svg"
import Sidebar from "./Sidebar.jsx"
import cross from "../assets/CodeEditor/cross.svg"

const Navbar = ({totalProblems, changeQuesHandler}) => {
    if ("getBattery" in navigator) {
        navigator.getBattery().then((battery) => {
            console.log("Battery level:", battery.level);
        });
    }

    const [showSidebar, setShowSidebar] = useState(false);
    // console.log(showSidebar);
    console.log(totalProblems);
    const sidebarHandler = () => {
        setShowSidebar(!showSidebar);
        
    }

    const submitHandler = () => {
        console.log("Submit clicked!");
        // Submit handler
    }


    return (
        
        <div>

            <div className='flex bg-[#dbeafe] p-2'>
                <div className='w-1/2 flex gap-2 items-center'>
                    <div className='flex items-center'>
                        <button onClick={() => sidebarHandler()}>
                            <img width={32} src={showSidebar ? cross : hamburger} alt="question menu" />
                        </button>
                    </div>

                    <div className=''>
                        <h1 className='p-0 text-3xl font-semibold'>Coding Platform</h1>
                    </div>
                </div>

                <div className='w-1/2 flex flex-row-reverse gap-2'>
                    <button className='px-4 cursor-pointer bg-[#155dfc] text-white rounded-sm' onClick={() => submitHandler()}> Submit </button>
                    <Timer />
                </div>
            </div>


            <div className= {`${!showSidebar && "hidden"} absolute z-10`}>
                <Sidebar totalProblems={totalProblems} changeQuesHandler={changeQuesHandler} />
            </div>
        </div>
        
    )
}

export default Navbar