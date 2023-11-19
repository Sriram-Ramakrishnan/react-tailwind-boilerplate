import { useState } from 'react'

const contents = [
  "This is a simple boilerplate for starting React projects with Tailwind CSS. It comes pre-configured with the necessary setup to quickly get you up and running with a React application styled using Tailwind CSS.", 
  "You can add external frameworks such as DaisyUI and PrelineUI in the plugins section of tailwind.config.css",

]

function App() {
  return (
    <div className='flex flex-col gap-20 items-center justify-center bg-gray-800 w-full h-screen'>
        <h1
          class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-600"
        >
          React Tailwind boilerplate
        </h1>

        <ul className='w-1/2 list-disc grid grid-cols-1 gap-4 justify-items-start'>
          {contents.map((point) => {
            return  (
              <li className='text-xl text-blue-200 text-left self-start'>
                {point}
              </li>
            )
          })}    
        </ul> 

        <div className='text-blue-400 text-2xl font-bold'>
          For more information,refer the&nbsp;
          <a className=' transition ease-linear hover:underline hover:text-blue-600' href="https://tailwindcss.com/docs">TailwindCSS documentation</a>

        </div>

    </div>
  )
}

export default App;
