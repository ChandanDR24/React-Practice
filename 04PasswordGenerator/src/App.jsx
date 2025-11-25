
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-+{}[]=<>?/|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordClipboard = useCallback(() => {
    return () => {
      passwordRef.current?.setSelectionRange(0, 100)
      navigator.clipboard.writeText(passwordRef.current.value)
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 250);
    }
  }, [password])



  return (
    <>
      <h1 className='mt-4 text-white flex items-center justify-center text-3xl font-mono '>Password Generator</h1>
      <div className=' select-none text-white  font-mono w-full max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-gray-700'>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text" readOnly value={password} placeholder='password' className={` select-none pointer-events-none w-full p-2 mb-4  bg-gray-800 border border-gray-600 rounded-l-lg `} ref={passwordRef} />
          <button onClick={copyPasswordClipboard()} className={`border border-gray-600 cursor-pointer  p-2 mb-4 shrink-0 rounded-r-lg ${copied ? "bg-gray-800" : "bg-blue-700"}  ${copied ? "text-blue-700" : "text-white"}`}>copy</button>
        </div>
        <div className=''>
          <div className='mb-4'>
            <input type="range" min="1" max="100" value={length} onChange={(e) => setLength(e.target.value)} />
            <span> Length: {length}</span>
          </div>
          <div className='' >
            <input type="checkbox" checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)} />
            <label> Numbers</label>
          </div>
          <div className=''>
            <input type="checkbox" checked={charAllowed} onChange={(e) => setCharAllowed(e.target.checked)} />
            <label> Special Characters</label>
          </div>
          <div className=''>
            <button onClick={passwordGenerator} className='mt-4 w-full bg-blue-700 p-2 rounded-lg'>Change Password</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
