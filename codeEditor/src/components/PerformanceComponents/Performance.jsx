import React from 'react'
// import performanceIcon from '../assets/performance-icon.svg'
import performanceIcon from "../../assets/PerformanceScreen/performance-icon.svg"

const Performance = ({data}) => {
    // converting second into hh:mm:ss format
    const formatTime = (totalSeconds) => {
        const totalMinutes = Math.ceil(totalSeconds / 60); // round up remaining seconds
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (hours > 0 && minutes === 0) {
            return `${hours} hour${hours > 1 ? 's' : ''}`;
        }

        if (hours > 0 && minutes > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }

        return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    };


    return (
        <div className='bg-white shadow-md rounded-lg p-6'>
            {/* Title */}
            <h1 className='font-semibold text-lg mb-4 flex items-center gap-2'>
                <img src={performanceIcon} alt='Performance Icon' className='w-5 h-5' />
                Performance 
            </h1>

            {/* Performance Parameters */}
            <div>
                <div className='flex justify-between text-sm text-gray-700'>
                    <p>Difficulty</p>
                    <p className={`font-medium ${
                        data.difficulty.toLowerCase() === 'easy'
                            ? 'text-green-500'
                        : data.difficulty.toLowerCase() === 'medium'
                            ? 'text-yellow-500'
                        : data.difficulty.toLowerCase() === 'hard'
                            ? 'text-red-500'
                        : 'text-gray-800'
                    }`}>
                        {data.difficulty}
                    </p>
                </div>

                <div className='flex justify-between text-sm text-gray-700'>
                    <p>Time Used</p>
                    <p className='font-medium text-gray-700'>{formatTime(data.timeUsed)}</p>
                </div>

                <div className='flex justify-between text-sm text-gray-700'>
                    <p>Total Time Alloted</p>
                    <p className='font-medium text-gray-800'>{formatTime(data.timeAlloted)}</p>
                </div>

                <div className='flex justify-between text-sm text-gray-700'>
                    <p>Total Questions</p>
                    <p className='font-medium text-gray-800'>{data.totalQuestions}</p>
                </div>
            </div>
        </div>
    );
};

export default Performance;