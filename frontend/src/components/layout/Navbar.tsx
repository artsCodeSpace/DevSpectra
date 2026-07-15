"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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

  const [isOpen, setIsOpen] = useState(false);
return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="DevSpectra Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-foreground hover:text-primary transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <Link
        href="/contact?quote=1"
        className="hidden lg:flex bg-primary hover:brightness-110 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[11px] shadow-lg transition"
      >
        Get Quote
      </Link>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      
    </div>
    {/* Mobile Menu */}
    {isOpen && (
      <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
        <div className="flex flex-col p-6 gap-5">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact?quote=1"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-primary text-white rounded-full py-3 text-center font-bold"
          >
            Get Quote
          </Link>

        </div>
      </div>
    )}
  </nav>
);

}