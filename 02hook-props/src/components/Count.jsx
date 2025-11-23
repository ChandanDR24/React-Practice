import React from 'react'

const Count = () => {
    const [count, setCount] = React.useState(0)
    const decrement = () => () => setCount((count) => count - 1)
  return (
    <>
      <div className="count-button flex gap-4 mb-4 p-4 ">
        <button className='bg-green-500 p-2 rounded-md m-2' onClick={() => setCount((count) => count + 1)}>
          increment count - {count}
        </button>

        <button className='bg-red-500 p-2 rounded-md m-2' onClick={decrement()  }>
          decrement count - {count}
        </button>
      </div>
      <p className='text-lg font-medium text-gray-500 p-4 m-2'>
        count is updated when you click the button. so now count is <span className='text-white text-2xl'>{count}</span>.
      </p>
    </>
  )
}

export default Count