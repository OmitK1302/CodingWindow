import React from 'react'
import QuestionDescription from './components/QuestionPanel'

const CodingEditor = () => {
  return (
    <div>
      <nav className='bg-gray-800 text-white p-4 text-lg font-semibold'>
        navigation bar
      </nav>

      <div className='flex h-screen'>
        {/* Aryan Tera kaam niche wale div m */}
        <div className='w-1/2 p-6 border-r'>
          <QuestionDescription />
        </div>

        {/* Ye mera */}
        <div className='w-1/2 p-6 '>

        </div>
      </div>


    </div>
  )
}

export default CodingEditor