"use client"
import Image from 'next/image'
import { Icon, Send, X } from 'lucide-react'
import {AnimatePresence, motion} from "motion/react"
import { useState } from 'react'

// Hover, exit, animation

function Card() {
    const [open, setOpen] = useState(true)

  return <div className='h-screen flex justify-center items-center bg-gray-50'>
    {/* always use this when u have exit animation in boolean or using states  */}
    <AnimatePresence>
   { open && <motion.div
   initial={{
    opacity : 0,
    scale : 0.98,
    filter : "blur(10px)"
   }}
   animate={{
    opacity : 1,
    scale : 1, 
    filter:"blur(0px)"
   }}
   exit={{
    opacity : 0,
    scale : 0.98,
    filter : "blur(10px)"
   }}
   transition={{
    duration : 0.5,
    ease : "easeInOut"
   }}
    className='w-72 min-h-[26rem] h-[26rem] rounded-xl shadow p-6 flex flex-col'>
        <h2 className='font-bold text-[10px]'>Aceternity UI Components</h2>
        <p className='text-neutral-600 mt-2 text-[10px]'>A collection of beautiful UI components, let's get on with it.</p>
        <div className='flex items-center justify-center'>
        <button onClick={() =>  setOpen(false)} className='flex items-center gap-1 text-[10px] mt-4 shadow-md rounded-md px-2 py-1'>
        <Image 
        width={50}
        height={50}
        className='h-4 w-4'
        alt='logo'
        src={"/juna.jpg"}
        />
        Aceternatiy
        <X className='h-3 w-3 text-neutral-400'/>
        </button>
        </div>

        <div className='bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
        
        {/* motion div */}
        <motion.div
        initial ={{
            opacity : 0,
            scale : 0.98,
            filter : "blur(10px)"
        }}
        whileHover={ {
            opacity : 1,
            scale : 1.05,
            filter : "blur(0px)"
        }}
        transition={{
            type : "spring",
            stiffness : 100,
            damping : 15
        }}
        className='absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200'>
        <div className='flex gap-2 p-4'>
        <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-md bg-white rounded-md flex items-center justify-center'>
        <Send className='h-3 w-3 text-neutral-600'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-[8px] font-bold text-neutral-600'>
                Aceternity UI Components
            </p>
            <p className='text-neutral-400 text-[8px] mt-1'>
                A collection of UI components
            </p>
        </div>
        </div>
        <div className='flex gap-2 p-4'>
        <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-md bg-white rounded-md flex items-center justify-center'>
        <Send className='h-3 w-3 text-neutral-600'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-[8px] font-bold text-neutral-600'>
                Aceternity UI Components
            </p>
            <p className='text-neutral-400 text-[8px] mt-1'>
                A collection of UI components
            </p>
        </div>
        </div>
        <div className='flex gap-2 p-4'>
        <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-md bg-white rounded-md flex items-center justify-center'>
        <Send className='h-3 w-3 text-neutral-600'/>
        </div>
        <div className='flex flex-col'>
            <p className='text-[8px] font-bold text-neutral-600'>
                Aceternity UI Components
            </p>
            <p className='text-neutral-400 text-[8px] mt-1'>
                A collection of UI components
            </p>
        </div>
        </div>
        </motion.div>
        </div>
        {/* motion end here */}
    </motion.div>}
    </AnimatePresence>
  </div>
}

export default Card