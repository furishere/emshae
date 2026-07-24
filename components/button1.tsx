import React from 'react'

interface ButtonProPs {
  text : string
  icons? : React.ReactNode
  size? : "sm" | "md" | "lg"
}

const sizes = {
  sm : "",
  md : "",
  lg : ""
}

export const Button1 = ({
    text,
    icons,
    size
}: ButtonProPs) => {
  return <button className='bg-gray-2 p-5 py-3 border border-gray-100 rounded-md text-black cursor-pointer flex flex-col'>
    <span className='bg-white h-1 mt-0 w-full  rounded-md'/>
    <span className='text-xs text-gray-3'>
        {text}
    </span>
    </button>
}
