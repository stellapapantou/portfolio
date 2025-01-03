import Layout from "../components/layout/Layout"
import dynamic from "next/dynamic"
import HeroSection from "../components/home/HeroSection"

const ResumeIntro = dynamic(() => import("../components/home/ResumeIntro"))
const ServicesSection = dynamic(() => import("../components/services"))

export default function Home() {
  return(
    <Layout 
      title="Stella Papantou Personal Portfolio"
      description="Hey there, I am Stella Papantou and I build digital products"
    >
      <HeroSection/>
      <ResumeIntro/>
      <ServicesSection/>
    </Layout>
  )
}