import { Sun, Volume1, Volume2, VolumeX } from "lucide-react"

export default function Home(){
    const Line1 = [{
      icon : <Sun />,
      title : "F1"
    },{
      icon : <Sun />,
      title : "F2"
    },{
      icon : <Sun />,
      title : "F3"
    },{
      icon : <Sun />,
      title : "F4"
    },{
      icon : <Sun />,
      title : "F5"
    },{
      icon : <Sun />,
      title : "F6"
    },{
      icon : <Sun />,
      title : "F7"
    },{
      icon : <Sun />,
      title : "F8"
    },{
      icon : <Sun />,
      title : "F9"
    },{
      icon : <VolumeX />,
      title : "F10"
    },{
      icon : <Volume1 />,
      title : "F11"
    },{
      icon : <Volume2 />,
      title : "F12"
    },]

    const alphabate = ["Q","W","E","R","T","Y","U","I","O","P"]
    const alphateLin2 = ["A","S","D","F","G","H","J","K","L"]

  return <div className="flex justify-center items-center">
    <div className="w-full max-w-xl flex flex-col gap-1 mt-24 mx-auto">
     <div className="flex gap-1">
      <Alphabate size="md" text="tab"/>
        {alphabate.map(alpha => (
          <Alphabate text={alpha} key={alpha} size="sm"/>
        ))}
      </div>
     <div className="flex gap-1">
      <Alphabate size="md" text="tab"/>
        {alphabate.map(alpha => (
          <Alphabate text={alpha} key={alpha} size="sm"/>
        ))}
      </div>
     <div className="flex gap-1">
      <Alphabate size="md" text="caps"/>
        {alphateLin2.map(alpha => (
          <Alphabate text={alpha} key={alpha} size="sm"/>
        ))}
        <Alphabate size="md" text="return"/>
      </div>
     <div className="flex gap-1">
      <Alphabate size="lg" text="shift"/>
        {alphateLin2.map(alpha => (
          <Alphabate text={alpha} key={alpha} size="sm"/>
        ))}
        <Alphabate size="lg" text="shift"/>
      </div>
    </div>
  </div>
}

interface ButtonProps {
  text : string,
  icon? : React.ReactNode,
  size : "sm" | "md" | "lg" | "xl",
  textSize? : "sm" | "md" | "lg"
}

const sizes = {
  sm : "px-5",
  md : "px-10",
  lg : "px-12",
  xl : "px-32"
}



function Alphabate({
  text,
  size,
  textSize,
  icon
}:ButtonProps){
  return <div className={`py-3 inset-shadow-sm  bg-gray-2 rounded-lg border border-gray-200 cursor-pointer ${sizes[size]}`}>
    {text}
  </div>
}