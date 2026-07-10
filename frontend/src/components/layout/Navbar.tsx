import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name:"About",
    href:"/about"
  },
  {
    name:"Services",
    href:"/services"
  },
  {
    name:"Projects",
    href:"/projects"
  },
  {
    name:"Blog",
    href:"/blog"
  },
  {
    name:"Contact",
    href:"/contact"
  }
];


export default function Navbar(){

return (
 
<nav className="
fixed
top-0
left-0
right-0
z-50
bg-background/80
backdrop-blur-xl
border-b
border-white/10
">

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2">
<Image
src="/logo.png"
alt="DevSpectra Logo"
width={100}
height={100}
className="rounded-full"
/>
</Link>

<div className="flex items-center gap-8">

{
links.map((link)=>(
<Link
key={link.href}
href={link.href}
className="
text-foreground
hover:text-primary
transition
"
>
{link.name}
</Link>
))
}


</div>
<Link
  href="/contact?quote=1"
  className="bg-primary hover:brightness-110 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] sm:text-[11px] shadow-lg transition-all flex items-center gap-2 group flex-shrink-0"
>
  Get Quote                   
</Link>

</div>

</nav>

)

}