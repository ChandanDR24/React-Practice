import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('#151414')
  return (
    <>
      <div className='w-full h-screen text-3xl flex justify-center'
        style={{ backgroundColor: bgColor }}
      >
        <div className='bg-white px-1   rounded-4xl absolute bottom-5 m-2 flex gap-2'>
          <button onClick={() => setBgColor("red")} className='bg-red-600 text-2xl p-4 m-2 ml-4  text-white rounded-full '>

          </button>
          <button onClick={() => setBgColor("blue")} className='bg-blue-800 text-2xl p-4 m-2 text-white rounded-full '>

          </button>
          <button onClick={() => setBgColor("orange")} className='bg-orange-400 text-2xl p-4 m-2 text-white rounded-full '>

          </button>
          <button onClick={() => setBgColor("green")} className='bg-green-700 text-2xl p-4 m-2 text-white rounded-full '>

          </button>
          <button onClick={() => setBgColor("pink")} className='bg-pink-200 text-2xl p-4 m-2 text-white rounded-full '>

          </button>

          <div className=' flex items-center justify-center rounded-full gap-1'>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className='w-9 h-9 mr-3 outline-none border-none cursor-pointer'
              alpha />
          </div>


        </div>
      </div>
    </>
  )
}

export default App
