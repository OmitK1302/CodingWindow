import React from 'react'
import glitterIcon from '../assets/QueDesc/glitter.png';
import bookIcon from '../assets/QueDesc/book.svg';
import docIcon from '../assets/QueDesc/document.svg';
import boltIcon from '../assets/QueDesc/bolt.png';
import starIcon from '../assets/QueDesc/star.png';

const QuestionDescription = ({question}) => {
    const dummyQuestion = question;      

    return(
        <div>
        {/* Title + Points + Tags */}
            <div >
                {/* Title + Points */}
                <div className='flex justify-between items-center mb-4'>
                    {/* Title */}
                    <div>
                        <h1 className='text-2xl font-sans font-semibold mt-2 flex items-center gap-2'>
                            {dummyQuestion.problem_no}. {dummyQuestion.title}
                            {/* <img src={glitterIcon} alt="glitter" className="w-6 h-6" /> */}
                        </h1>
                    </div>
                    {/* Points */}
                    <div className='flex items-center gap-1 text-gray-600 text-sm font-medium'>
                        <img src={starIcon} alt="points" className='w-4 h-4'/>
                            {dummyQuestion.points} pts
                    </div>
                </div>

                {/* Tags */}
                <div className='flex gap-2 flex-wrap mb-10' >
                    {dummyQuestion.tags.map((tag, index) => (
                        <span key={index} className='bg-blue-100 font-serif text-blue-600 px-3 py-1 rounded-full text-sm font-medium'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

        {/* Problem Description */}
            <div className='mb-5'>
                <h2 className='text-lg font-semibold mb-2 flex items-center gap-2'>
                    <img src={docIcon} alt="problem description" className='className="w-5 h-5' />
                        Problem Description
                </h2>
                <p className='text-base font-serif'>{dummyQuestion.description}</p>
            </div>

        {/* Examples */}
            <div>
                <h3 className='text-lg font-bold mb-3 flex items-center gap-2'>
                    <img src={bookIcon} alt="examples" className='className="w-5 h-5' />
                        Examples:
                </h3>
                
                {/* Displaying Examples */}
                {dummyQuestion.examples.map((ex, index) => (
                    <div className='flex mb-2 rounded bg-gray-100' key = {index}>
                        
                        {/* Input */}
                        <p className='w-1/2 p-2'>
                            <span className='font-semibold font-serif text-gray-600 text-sm'>
                                Input:
                            </span> <br /> 
                            <code className='font-medium text-sm'> 
                                {ex.input} 
                            </code>
                        </p>    
                        
                        {/* Output */}
                        <p className='w-1/2 p-2'>
                            <span className='font-semibold font-serif text-gray-600 text-sm'> 
                                Output:
                            </span><br /> 
                            <code className='font-medium text-sm'> 
                                {ex.output} 
                            </code>
                        </p>    
                    </div>
                ))}
            </div>

        {/* Constraints */}
            <h3 className='text-lg font-bold mt-6 mb-2 flex items-center gap-1'>
                <img src={boltIcon} alt="constraints" className='className="w-5 h-5' />
                    Constraints:
            </h3>
            <ul>
                {dummyQuestion.constraints.map((item, index) => (
                    <li key={index} className=" mb-1 text-sm flex items-center gap-2">
                        <span className='text-gray-400 font-stretch-50%'>
                            {'>'}
                        </span>
                        <code className='inline-block bg-gray-100 px-2 py-1'>
                            {item}
                        </code>
                    </li>
                ))}
            </ul>
           
        </div>
        
    )
}

export default QuestionDescription;