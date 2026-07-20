import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";

export default function WebsiteLayout({
children
}:{
children:React.ReactNode
}){


return (
 
<>

<Navbar/>

<main className="
pt-20
">
    <SmoothScroll>
        <AuroraBackground />
        {children}
    </SmoothScroll>

</main>


<Footer/>

</>

)

}