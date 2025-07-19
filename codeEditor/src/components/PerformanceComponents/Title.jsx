import React from 'react';
import exportIcon from '../../assets/performanceScreen/export-icon.svg';
import shareIcon from '../../assets/performanceScreen/share-icon.svg';

const Title = () => {
  return (
    <div className='flex justify-between items-center flex-wrap gap-4 px-6 py-4 shadow-sm bg-white'>
      {/* Left */}
      <div className='flex items-center gap-2 text-sm text-blue-600 cursor-pointer'>
        <span>←</span>
        <span>Back to Assessments</span>
      </div>

      {/* Middle (Title) */}
      <div className='flex flex-col items-center text-center mx-auto'>
        <h1 className='text-lg font-semibold'>Assessment Results</h1>
        <p className='text-sm text-gray-500'>Arrays and Lists</p>
      </div>

      {/* Right */}
      <div className='flex gap-2'>
        <button className='flex items-center gap-2 text-sm px-3 py-1 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition'>
          <img src={exportIcon} alt='Export' className='w-4 h-4' />
          Export
        </button>
        <button className='flex items-center gap-2 text-sm px-3 py-1 border border-gray-300 rounded-md shadow-sm hover:shadow-md transition'>
          <img src={shareIcon} alt='Share' className='w-4 h-4' />
          Share
        </button>
      </div>
    </div>
  );
};

export default Title;
