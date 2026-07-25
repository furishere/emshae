"use client"
import { ArrowBigDown, ArrowBigUp, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Command, Option } from "lucide-react"
import { AudioLines, AudioWaveform, Circle, Grid2X2, ListVideo, Mic, Moon, ScanSearch, Search, Sun, SunDim, Volume1, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

export default function Home(){
    const Line1 = [{
      icon : <SunDim className="h-3 w-3"/>,
      title : "F1"
    },{
      icon : <Sun className="h-3 w-3"/>,
      title : "F2"
    },{
      icon : <Grid2X2 className="h-3 w-3" />,
      title : "F3"
    },{
      icon : <Search className="h-3 w-3"/>,
      title : "F4"
    },{
      icon : <Mic className="h-3 w-3"/>,
      title : "F5"
    },{
      icon : <Moon className="h-3 w-3"/>,
      title : "F6"
    },{
      icon : <AudioLines className="h-3 w-3"/>,
      title : "F7"
    },{
      icon : <AudioWaveform className="h-3 w-3" />,
      title : "F8"
    },{
      icon : <ListVideo className="h-3 w-3" />,
      title : "F9"
    },{
      icon : <VolumeX className="h-3 w-3"/>,
      title : "F10"
    },{
      icon : <Volume1 className="h-3 w-3"/>,
      title : "F11"
    },{
      icon : <Volume2 className="h-3 w-3"/>,
      title : "F12"
    },{
      icon : <Circle className="text-gray-200 text-center"/>,
    }]

    const Line2 = [{
      icon : "~",
      title : "`"
    },{
      icon : "!",
      title : "1"
    },{
      icon : "@",
      title : "2"
    },{
      icon : "#",
      title : "3"
    },{
      icon : "$",
      title : "4"
    },{
      icon : "%",
      title : "5"
    },{
      icon : "^",
      title : "6"
    },{
      icon : "&",
      title : "7"
    },{
      icon : "*",
      title : "8"
    },{
      icon : "(",
      title : "9"
    },{
      icon : ")",
      title : "0"
    },{
      icon : "_",
      title : "-"
    },{
      icon : "+",
      title : "="
    }]

    const Line3 = [
      {
        title : "Q"
      },
      {
        title : "w"
      },
      {
        title : "E"
      },
      {
        title : "R"
      },
      {
        title : "T"
      },
      {
        title : "Y"
      },
      {
        title : "U"
      },
      {
        title : "I"
      },
      {
        title : "O"
      },
      {
        title : "P"
      },{
        title : "{",
        icon : "["
      },{
        title : "}",
        icon : "]"
      }, {
        title : "|",
      }
    ]
  
    const Line4 = [
      {
        title : "A"
      },
      {
        title : "S"
      },
      {
        title : "D"
      },
      {
        title : "F"
      },
      {
        title : "G"
      },
      {
        title : "H"
      },
      {
        title : "J"
      },
      {
        title : "K"
      },
      {
        title : "L"
      },
      {
        title : ";",
        icon : ":"
      },
      {
        title : "'",
        icon : '"'
      }
    ]

    const Line5 = [
      {
        title : "Z"
      },
      {
        title : "X"
      },
      {
        title : "C"
      },
      {
        title : "V"
      },
      {
        title : "B"
      },
      {
        title : "N"
      },
      {
        title : "M"
      },
      {
        title : "<",
        icon : ","
      },
      {
        title : ">",
        icon : "."
      },
      {
        title : "?",
        icon : "/"
      },
    ]

    const Line6A = [
      {
        title : "fn",
        icon : <Sun  className="h-3 w-3"/>
      },
      {
        title : "control",
        icon : "^"
      },
      {
        title : "option",
        icon : <Option className="h-3 w-3"/>
      },
      {
        title : "command",
        icon : <Command className="h-3 w-3"/>
      },
    ]
    const Line6B = [
       {
        title : "control",
        icon : "^"
      },
      {
        title : "option",
        icon : <Option className="h-3 w-3"/>
      },
      {
        icon : <ChevronLeft  className="h-3 w-3"/>
      },
      {
        icon : <ChevronUp className="h-3 w-3"/>,
        title : " "
      },{
        icon : <ChevronRight className="h-3 w-3"/>
      }
    ]


  return <div className="flex flex-row justify-center items-center">

    
    <div className="flex justify-center flex-col gap-2 mt-24 mx-auto bg-gray-100 p-4 rounded-xl inset-shadow-sm">

      {/* Line 1 */}
      <div className="flex gap-2 justify-center">
      <Alphabate size="md" text="esc"/>
        {Line1.map(line => (
          <Alphabate text={line.title} icon={line.icon} key={line.title} size="sm"/>
        ))}
      </div>


      {/* Line 2 */}
     <div className="flex gap-4 justify-center">
        {Line2.map(line => (
          <Alphabate text={line.title} key={line.title} icon={line.icon} size="sm"/>
        ))}
        <Alphabate size="md" text="delete"/>
      </div>

      {/* Line 3 */}
     <div className="flex gap-4.5 justify-center">
      <Alphabate size="md" text="tab"/>
        {Line3.map(line => (
          <Alphabate text={line.title} icon={line.icon} key={line.title} size="sm"/>
        ))}
      </div>

      {/* linr 4 */}
     <div className="flex gap-4.5 justify-center">
      <Alphabate size="md" text="caps"/>
        {Line4.map(line => (
          <Alphabate text={line.title} icon={line.icon} key={line.title} size="sm"/>
        ))}
        <Alphabate size="md" text="return"/>
      </div>

     {/* Line 5 */}
      <div className="flex gap-5.5 justify-center">
      <Alphabate size="lg" text="shift"/>
        {Line5.map(line => (
          <Alphabate text={line.title} icon={line.icon} key={line.title} size="sm"/>
        ))}
        <Alphabate size="lg" text="shift"/>
      </div>

        {/* Line 6 */}
        <div className="flex  gap-3 justify-center">
        {Line6A.map(line => (
          <Alphabate size="sm"  icon={line.icon} key={line.title}/>
        ))}
        <Alphabate size="xl"/>
        {Line6B.map(line => (
          <Alphabate size="sm" icon={line.icon} key={line.title}/>
        ))}
        </div>
    </div>
  </div>
}

interface ButtonProps {
  text? : string,
  icon? : React.ReactNode,
  size : "sm" | "md" | "lg" | "xl",
  textSize? : "sm" | "md" | "lg"
}

const sizes = {
  sm : "w-12",
  md : "w-20 inset-x-0 text-3 bottom-text ",
  lg : "w-24 bottom-text",
  xl : "w-64"
}



function Alphabate({
  text,
  size,
  textSize,
  icon
}:ButtonProps){

  const playSound = () => {
      const audio  = new Audio("/sounds/click.mp3")
      audio.play()
  }

  return <button className={`h-12 inset-shadow-sm  bg-gray-2 rounded-lg border border-gray-300 cursor-pointer items-center text-center transition transform duration-150 active:scale-95 active:inset-shadow-sm active:border-gray-400 ${sizes[size]}`}
  onClick={playSound}>
    <div className="flex flex-col items-center">
    <div className="text-xs mb-1 mt-1">{icon}</div>
    <div className="items-center text-[
OKLCH(0.371 0 0)] align-bottom text-xs"> {text}</div>
    </div>
  </button>
}