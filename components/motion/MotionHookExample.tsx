"use client"
import { Rocket } from 'lucide-react'
import Image from 'next/image'

function MotionHookExample() {
  return <div className='flex min-h-screen items-center justify-center bg-neutral-900 w-full'>
    <div className='mx-auto flex max-w-4xl flex-col gap-10 py-40'>
    {features.map((feature, idx) => (
        <Card key={feature.title} features={feature} />
    ))}
    </div>
  </div>
}

const Card = ({features} : {features: Features}) => {

    return <div key={features.title} className='grid grid-cols-2 items-center gap-20 py-40'>
            <div className='flex flex-col gap-5'>
            {features.icon}
            <h2 className='text-4xl font-bold text-white'>
                {features.title}
            </h2>
            <p className='text-lg text-neutral-400'>{features.description}</p>
            </div>
            <div>{features.content}</div>
        </div>
}

type Features = {
    icon : React.ReactNode
    title : string
    description : string
    content : React.ReactNode
}

const features: Features[] = [
    {
        icon : <Rocket className='h-8 w-8 text-neutral-200'/>,
        title : "Generate ultra realistic Image",
        description : "hey bitch im fur fuck you",
        content : (
            <div>
                <Image 
                src={"/juna.jpg"}
                alt='juna'
                height={500}
                width={500}
                className='rounded-lg'/>
            </div>
        )
    },{
        icon : <Rocket className='h-8 w-8 text-neutral-200'/>,
        title : "Juna",
        description : "hey bitch im fur fuck you",
        content : (
            <div>
                <Image 
                src={"/juna.jpg"}
                alt='juna'
                height={500}
                width={500}
                className='rounded-lg'/>
            </div>
        )
    },{
        icon : <Rocket className='h-8 w-8 text-neutral-200'/>,
        title : "clairo",
        description : "hey bitch im fur fuck you",
        content : (
            <div>
                <Image 
                src={"/juna.jpg"}
                alt='juna'
                height={500}
                width={500}
                className='rounded-lg'/>
            </div>
        )
    },
]

export default MotionHookExample