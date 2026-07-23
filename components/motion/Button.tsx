"use client"
import { motion} from "motion/react"

function Button() {
  return <div className='[perspective:1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center'
  style={{
    backgroundImage : `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 1px, transparent 0 )`,
    backgroundSize : "8px 8px",
    backgroundRepeat : "repeat",
     transformStyle: "preserve-3d",
  }}>
    <motion.button 
    initial= {{
        opacity : 0
    }}
    animate = {{
        opacity : 1
    }}
    whileHover={{
        rotateX : 25,
        rotateY : 10,
        boxShadow : "0px 20px 50px rgba(8, 112, 184, 0.7)",
        y : -5
    }}
    whileTap={{
        y : 0
    }}
    style={{
        translateZ : 100
    }}
    transition={{
        duration : 0.3,
        ease: "easeInOut"
    }}
    className='group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-lg'>
    <span className="group-hover:text-cyan-500 transition-colors duration-300">Subscribe</span>
    <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
    <span className='absolute opacity-0 group-hover:opacity-100  transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from transparent via-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm'></span>
    </motion.button>

  </div>
}

export default Button