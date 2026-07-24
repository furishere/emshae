import React from 'react'
// introdutin and themeing 

function Hero() {
  return <div className='justify-center my-40 flex w-full flex-col items-center'>
    <h1 className='max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent'>
        Unleash the power of intuitive finance
    </h1>
    <p className='mx-auto mt-10 max-w-3xl text-center text-zl text-neutral-500 selection:bg-white'>Say goodbye to the outdated financial tols. every small business owner,
        regardless of the background, can now mange their buisness,
        simple. Intutuive. and never boring.
    </p>
    <div className='mt-12 flex w-full max-w-lg justify-center'>
    <input type="text" 
    className='mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-sky-500/50 focus:outline-none transition duration-200'
    placeholder='Enter your email' />
    <button className='relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white'>
        <div className='absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from transparent via-primary to-transparent'>
        </div>
            Join Waitlist
    </button>
    </div>
  </div>
}

export default Hero