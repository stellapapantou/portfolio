import Button from "../common/Button";
import Section from "../common/Section"
import Image from 'next/image'
import Experience from '../../public/images/experience.png'

const ResumeIntro = () => {
  return (
    <Section title={"A bit about me"} id="about-section">
      <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center relative">
        <div className="lg:col-span-7 flex flex-col items-start lg:pr-14 mb-10"> 
          <p className="text-body-md pb-8">With more than 15 years of experience on full-stack development, systems design and UX/UI design, I bring a well-rounded skill set as a digital professional.
          </p>
          <p className="pb-8">
            Throughout my career, I've worn many
            hats – from coding wizard to design maestro, and for the past 5
            years, I've been steering the ship as a manager. My journey
            started with a love for crafting clean and functional code, but
            over the years, I realized the power of combining functionality
            with eye-catching design. That's where my unique blend of web
            development and design skills comes into play. 
          </p>
          <Button label="Read more" link="/about" size="lg" />
        </div>
        <div className="lg:col-span-5">
          <div className="relative px-4 sm:px-0">
            <Image src={Experience} width={450} height={440} priority alt="Stella's Papantou Experience graphic" className="relative hover:-translate-y-2 transition-transform duration-300"/>
          </div>
        </div>
      </div> 
    </Section>
  );
};

export default ResumeIntro;
