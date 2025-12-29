import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'


const App = () => {
  return (
    <div className='flex-center h-[100vh] '>
      <h1 className="text-3xl text-orange-600">Hello GSAP</h1>
    </div>
  );
}

export default App