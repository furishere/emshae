import React from 'react'
"use client"
import {motion} from "motion/react"

function AnimatedText() {
    const text = "kanchi is an anonymous emotional journaling platform where people can share feelings without chasing likes, followers, or popularity."
  return <div className='text-white max-w-4xl mx-auto font-bold text-4xl'>
    {text}
  </div>
}

export default AnimatedText