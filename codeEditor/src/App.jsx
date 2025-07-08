import React, { useEffect, useState } from 'react'
import CodeEditor from "./components/editor.jsx"
import problems from '../data/Problems.js'
import QuestionDescription from './components/QuestionPanel.jsx'

const App = () => {
  const totalProblems = problems.length;

  const [que_no, setQue_no] = useState(0);
  const [question, setQuestion] = useState(problems[0]);

  useEffect(() => {
    setQuestion(problems[que_no]);
  }, [que_no]);


  return (
    <div className='w-full'>
      <nav className='w-full h-10 bg-amber-400'>
        NAVBAR
      </nav>

      <div className='w-full flex lg:flex-row flex-col'>
        {/* Aryan Tera kaam niche wale div m */}
        <div className='lg:w-1/2 w-full p-6'>
          <QuestionDescription question={question} />
        </div>

        {/* Ye mera */}
        <div className='lg:w-1/2 w-full'>
          <CodeEditor question={question} />
        </div>
      </div>

      <div className='w-full h-20 flex p-4 gap-2 flex-row-reverse bg-blue-300'>
        <button onClick={() => setQue_no((prev) => ((prev + 1) % totalProblems))} className='bg-blue-600 text-white p-2 cursor-pointer'>Next</button>
        <button onClick={() => setQue_no((prev) => ((prev - 1) > 0 ? prev - 1 : totalProblems - 1))} className='bg-gray-400 text-white p-2 cursor-pointer'>prev</button>
      </div>


    </div>
  )
}

export default App