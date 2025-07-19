import React, { useEffect, useState } from 'react'
import CodeEditor from "./components/TestComponents/Editor.jsx"
import problems from '../data/TestScreenData/Problems.js'
import QuestionDescription from './components/TestComponents/QuestionPanel.jsx'
import Navbar from './components/Navbar.jsx'
import PerformanceScreen from './screens/PerformanceScreen.jsx'
import TestScreen from './screens/TestScreen.jsx'

const App = () => {
  const totalProblems = problems.length;
  const [que_no, setQue_no] = useState(0);
  const [question, setQuestion] = useState(problems[0]);

  useEffect(() => {
    setQuestion(problems[que_no]);
  }, [que_no]);

  const changeQuesHandler = (val) => {
    setQue_no(val);
  }

  return (
    // <div className='w-full'>
    //   <nav className="w-full fixed z-10">
    //     <Navbar
    //       problems={problems}
    //       currProb={question.problem_no}
    //       changeQuesHandler={changeQuesHandler}
    //       setQue_no={setQue_no}
    //     />
    //   </nav>

      
    //   <div className='w-full flex lg:flex-row flex-col pt-12'>
        
    //     <div className='lg:w-1/2 w-full p-6 relative flex flex-col min-h-screen'>
          
    //       <QuestionDescription question={question} />

    //       {/* Previous and Next button */}
    //       <div className="sticky bottom-0 mt-auto flex justify-end items-end w-full p-4 gap-2 ">
    //         <button onClick={() => setQue_no((prev) => prev - 1 >= 0 ? prev - 1 : totalProblems - 1 )}className='bg-[#0d1929] h-10 text-white font-semibold w-[100px] rounded-sm px-4 cursor-pointer'>
    //           {`<`}
    //         </button>
    //         <button onClick={() => setQue_no((prev) => (prev + 1) % totalProblems)} className='bg-[#155dfc] h-10 text-white rounded-sm px-4 font-semibold w-[100px] cursor-pointer'>
    //           {`>`}
    //         </button>
    //       </div>
    //     </div>

    //     {/* Code Editor */}
    //     <div className='lg:w-1/2 w-full lg:fixed lg:right-0'>
    //       <CodeEditor question={question} />
    //     </div>
    //   </div>
    // </div>

    // <PerformanceScreen />
    <TestScreen />
  );
};

export default App;
