import React from 'react';

const TopicItem = ({ topic, correct, total, percentage }) => {
  return (
    <div className=' bg-gray-100 flex justify-between items-start px-6 py-3 mb-3 rounded-md'>
      {/* Left side: Topic info */}
      <div>
        <p className='font-semibold text-sm text-gray-800'>{topic}</p>
        <p className='text-xs text-gray-500'>{correct}/{total} correct</p>
      </div>

      {/* Right side: Percentage + small bar */}
      <div className='flex flex-col items-end gap-1'>
        <p className={`text-sm font-semibold ${
            percentage === 100
              ? 'text-green-500'
              : percentage >= 75
              ? 'text-yellow-500'
              : percentage >= 35
              ? 'text-orange-500'
              : 'text-red-500'
          }`}
        >
          {percentage}%
        </p>

        {/* Progress bar (small, fixed blue) */}
        <div className='w-24 bg-gray-200 rounded-full h-1'>
          <div
            className='h-1 rounded-full bg-blue-600 transition-all duration-300'
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TopicItem;
