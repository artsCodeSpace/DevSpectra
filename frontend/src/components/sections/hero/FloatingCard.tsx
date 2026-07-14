"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


interface FloatingCardProps {

  children:ReactNode;
  className?:string;
  delay?:number;

}


export default function FloatingCard({

children,
className="",
delay=0

}:FloatingCardProps){


return (

<motion.div

animate={{
 y:[0,-15,0]
}}

transition={{
 duration:5,
 repeat:Infinity,
 delay,
 ease:"easeInOut"
}}

className={`
 absolute
 rounded-2xl
 border
 border-white/10
 bg-white/5
 backdrop-blur-xl
 shadow-2xl
 ${className}
`}

>

{children}

</motion.div>

)

}