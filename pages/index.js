import Layout from "../components/layout/Layout"
import HeroSection from "../components/home/HeroSection"
import ResumeIntro from "../components/home/ResumeIntro"
import ServicesSection from "../components/services"

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
