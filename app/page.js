"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {

  //password numbervalidation charactervalidation length btn{-color(when clicked), text changing}
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberValidation, setNumberValidation] = useState(false)
  const [charvalidation, setCharvalidation] = useState(false)
  const [color, setColor] = useState("rgb(0, 55, 500)")
  const [text, setText] = useState("Copy")
  const ref = useRef(null)

  const copypass = () => {
    toast("Password Copied!");
    setColor("green")
    setText("Copied!")
    window.navigator.clipboard.writeText(password)
  }

  const Generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberValidation) str += "0123456789"
    if (charvalidation) str = str + "!@#$%%^&*"

    for (let i = 1; i <= length; i++) {
      let data = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(data)
    }
    setPassword(pass)

  }, [length, numberValidation, charvalidation])

  useEffect(() => {
    Generator()
    setColor("rgb(0, 55, 500)")
    setText("Copy")
  }, [length, numberValidation, charvalidation])

  return (
    <div className='w-full h-screen bg-zinc-900 flex justify-center '>
      <div className='px-3 py-5 mt-[3vw] w-[50vw] h-[30vh] rounded-xl bg-zinc-700' >
        <h1 className='text-center text-4xl'>
          Password Generator
        </h1>
        <div className='flex justify-center items-center gap-6 mt-4'>
          <input type="text" className='w-[30vw] outline-none py-3 px-4 rounded-xl text-xl'
            placeholder='PASSWORD'
            value={password}
            readOnly
            ref={ref}
          />
          <button
            onClick={copypass}
            className='px-6 py-3 font-medium rounded text-lg flex justify-center items-center text-white ' style={{ backgroundColor: color }}>
            {text}
          </button>
          <ToastContainer />
        </div>

        <div className='flex justify-around items-center mt-10'>
          <span className='flex gap-2  w-[14vw] ml-[-2vw] '>
            <input
              type='range'
              min={8}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <h2 className='text-xl'>Length: <span className='text-orange-500'>{length}</span> </h2>
          </span>


          <span className='flex gap-2  '>
            <input
              type='checkbox'
              className='cursor-pointer'
              onChange={() => {
                setNumberValidation((prev) => !prev)
              }}
            />
            <h2 className='text-2xl text-orange-500'>Number</h2>
          </span>
          <span className='flex gap-2'>
            <input
              type='checkbox'
              className='cursor-pointer'
              onChange={() => {
                setCharvalidation((prev) => !prev)
              }}
            />
            <h2 className='text-2xl text-orange-500'>Character</h2>
          </span>

        </div>
      </div>
    </div>


  )
}

export default page
