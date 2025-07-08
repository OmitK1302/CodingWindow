import React, { useEffect, useState } from 'react'
import CodeEditor from "./components/Editor.jsx"
import problems from '../data/Problems.js'
import QuestionDescription from './components/QuestionPanel.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  const totalProblems = problems.length;
  // console.log(totalProblems)
  const [que_no, setQue_no] = useState(0);
  const [question, setQuestion] = useState(problems[0]);

  useEffect(() => {
    setQuestion(problems[que_no]);
  }, [que_no]);

  const changeQuesHandler = (val) => {
    setQue_no(val);
  }

  return (
    <div className='w-full'>
      <nav className="w-full">
        <Navbar totalProblems={totalProblems} changeQuesHandler={changeQuesHandler}/>
      </nav>

      <div className='w-full flex lg:flex-row flex-col'>
        {/* Aryan Tera kaam niche wale div m */}
        <div className='lg:w-1/2 w-full p-6 relative'>
          <QuestionDescription question={question} />
          <div className='flex flex-col-reverse absolute bottom-5 right-5'>
            <div className='w-full h-20 flex p-4 gap-2'>
              <button onClick={() => setQue_no((prev) => ((prev - 1) > 0 ? prev - 1 : totalProblems - 1))} className='bg-[#0d1929] text-white font-semibold w-[100px] rounded-sm px-4 cursor-pointer'>Prev</button>
              <button onClick={() => setQue_no((prev) => ((prev + 1) % totalProblems))} className='bg-[#155dfc] text-white rounded-sm px-4 font-semibold w-[100px] cursor-pointer'>Next</button>
            </div>
          </div>
        </div>

        {/* Ye mera */}
        <div className='lg:w-1/2 w-full'>
          <CodeEditor question={question} />
        </div>
      </div>

      


    </div>
  )
}

export default App