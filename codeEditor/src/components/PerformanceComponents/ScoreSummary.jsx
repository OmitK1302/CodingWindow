// src/components/ScoreSummary.jsx
import React from 'react';
import checkIcon from '../../assets/performanceScreen/check-icon.svg'
import exclamationIcon from '../../assets/performanceScreen/exclamation-icon.svg'
import wrongIcon from '../../assets/performanceScreen/wrong-icon.svg'
import timerIcon from '../../assets/performanceScreen/timer-icon.svg'

const ScoreSummary = ({ data }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 my-6'>
      {/* Score Heading */}
      <div className='text-center mb-6'>
        <h2 className='text-5xl font-bold text-blue-600'>{data.score}%</h2>
        <p className='text-sm text-gray-500 mt-1'>Your Score</p>
        <p className='text-sm text-gray-500 mt-1'>Submitted on {data.submissionDate}</p>
      </div>

      {/* Summary Grid - responsive */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {/* Card 1: Correct */}
        <div className='flex items-center gap-4 bg-gray-100 rounded-md p-4 w-full'>
          <img src={checkIcon} alt='check' className='w-10 h-10' />
          <div>
            <p className='text-xl font-bold text-black leading-tight'>{data.correctAnswers}</p>
            <p className='text-sm text-gray-700'>Correct Answer{data.correctAnswers !== 1 && 's'}</p>
          </div>
        </div>

        {/* Card 2: Partial */}
        <div className='flex items-center gap-4 bg-gray-100 rounded-md p-4 w-full'>
          <img src={exclamationIcon} alt='partial' className='w-10 h-10' />
          <div>
            <p className='text-xl font-bold text-black leading-tight'>{data.partialCredit}</p>
            <p className='text-sm text-gray-700'>Partial Credit</p>
          </div>
        </div>

        {/* Card 3: Incorrect */}
        <div className='flex items-center gap-4 bg-gray-100 rounded-md p-4 w-full'>
          <img src={wrongIcon} alt='wrong' className='w-10 h-10' />
          <div>
            <p className='text-xl font-bold text-black leading-tight'>{data.incorrectAnswers}</p>
            <p className='text-sm text-gray-700'>Incorrect Answer{data.incorrectAnswers !== 1 && 's'}</p>
          </div>
        </div>

        {/* Card 4: Time */}
        <div className='flex items-center gap-4 bg-gray-100 rounded-md p-4 w-full'>
          <img src={timerIcon} alt='timer' className='w-10 h-10' />
          <div>
            <p className='text-xl font-bold text-black leading-tight'>{data.timeTaken}</p>
            <p className='text-sm text-gray-700'>Time Taken</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
