import dynamic from "next/dynamic"
import Layout from "../components/layout/Layout"
import Image from "next/image"
import Link from "next/link"
import Stella2 from '../public/images/stellapapantou2.png'
import Quote from '../public/images/quote-left.svg'

const SkillSection = dynamic(() => import("../components/about/SkillSection"))

const ExperienceArray = [
    {
      year: "Sep 2018 - Present",
      company: "Workable",
      companyURL: "https://www.workable.com",
      title: "Tech Lead, Brand team",
      description: "Led web development projects while managing full-stack developers as part of the Brand team, ensuring seamless collaboration and high-quality deliverables."
    },
    {
      year: "Jul 2015 - Sep 2018",
      company: "Workable",
      companyURL: "https://www.workable.com",
      title: "Front-end Developer, Marketing",
      description: "Implemented dynamic, user-friendly web interfaces to promote and elevate Workable's global presence, ensuring seamless user experiences and aligning with international marketing strategies."
    },
    {
      year: "2010 - Present",
      company: "StellaPapantou.com",
      title: "Freelancer",
      description: "Creating tailored, visually appealing, and responsive websites for businesses of all sizes, delivering solutions that serve their unique goals and brand identity."
    },
    {
      year: "2014 - 2015",
      company: "Bethere app",
      companyURL: "https://apps.apple.com/gr/app/bethere-app/id727485838",
      title: "Front-End Developer / Web Designer",
      description: "As a contractor, I developed websites for a reservation and ordering app designed for coffee shops, restaurants, etc. Additionally, I enhanced their brand presence by creating assets ranging from advertising GIFs to soupla designs."
    },
    {
      year: "Sep 2013 - June 2015",
      company: "Computer Technology Institute",
      companyURL: "https://www.cti.gr/",
      title: "Front-End Developer / Web Designer",
      description: <>Contributed to educational projects, with a primary focus on designing and developing the <Link href='https://e-me.edu.gr' target='_blank' className='underline'>e-me platform</Link>, enhancing digital learning experiences in greek schools.</>
    },
    {
      year: "Apr 2011 - Jul 2013",
      company: "Ad agency Intros.gr",
      companyURL: "https://www.intros.gr/",
      title: "Front-End Developer / Web Designer",
      description: "Crafted engaging newsletters, social media campaigns, responsive websites, e-commerce platforms, and portals for a portfolio of renowned companies, ensuring high-quality, impactful digital experiences."
    }
  ]
  
  const EducationArray = [
    {
      year: "2009 - 2010",
      uni: "The University of Edinburgh, UK",
      title: "MSc, Design and Digital Media",
      description: "The programme offers the best of studio-based design learning and develops skills and insights in the creative use of design practices and technologies for digital media across a range of uses and platforms."
    },
    {
      year: "2004 - 2009",
      uni: "University of Macedonia, Greece",
      title: "BSc, Applied Informatics",
      description: "The programme provides students with high level of knowledge and skills in Computer Science and Technology and train them in modern informatics techniques and technologies as well as in their applications in the modern business environment."
    }
  ]
  
export default function About({skills}) {
    return(
        <Layout title={"Stella Papantou Portfolio | About Me"}>
          <section className="py-12 lg:py-16">
            <h1 className="lg:text-display-lg text-display-md font-semibold pb-4 mt-16">About me</h1>
            <div className="hr mb-8"></div>
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-start relative">
              <div className="lg:col-span-7 flex flex-col items-start"> 
                
                <p className="text-body-md pb-8 md:col-start-2">
                With more than 15 years of experience on full-stack development, systems design and UX/UI design, I bring a well-rounded skill set as a digital professional.
                </p>
                <p className="pb-8">
                Throughout my career, I've worn many
                  hats – from coding wizard to design maestro, and for the past 5
                  years, I've been steering the ship as a manager. My journey
                  started with a love for crafting clean and functional code, but
                  over the years, I realized the power of combining functionality
                  with eye-catching design. That's where my unique blend of web
                  development and design skills comes into play. </p>
                  <p className="pb-8">As a manager, I've honed my leadership skills, ensuring
                  that not only do we meet deadlines and deliver projects with high standards quality, but
                  we do it with style and excitement. My team and I thrive on transforming designs into impactful user experiences that resonate. From building responsive websites and refreshing outdated interfaces to leading a team of talented developers, I have the experience to bring projects to life seamlessly.</p>

                  <p className="pb-8">
                  Outside of work, the past few years, I got interested in calligraphy, lettering
                  and Procreate art. It's my happy me-time and I enjoy
                  experimenting with new practices. I'm also an interior design
                  enthusiast. It’s my
                  creative outlet, and I believe it adds a touch of artistic flair
                  to everything I do. I also enjoy spending time with my family, cooking, strolling around the city or running in a
                  playground. Trips are our favorite part. 
                </p>              
              </div>
              <div className="lg:col-span-5 relative px-4 sm:px-0 md:col-start-1">
                <Image src={Stella2} width={450} height={420} priority alt="Stella Papantou profile picture" className="relative mb-10"/>
                <div className="grid lg:grid-cols-12 flex-col items-center">
                  <div className="testimonial border border-violet-900 rounded-2xl text-center col-span-12 p-4 pb-8 m-auto">
                    <Image src={Quote} width={120} alt="quote image" className="relative m-auto text-primary-600"/>
                    <p class="text-body-lg font-semibold">Let's not just build
                  websites; let's craft digital experiences that leave a lasting
                  impression!</p>
                  </div>
                </div>
              </div>
              
            </div>
          </section>

          <SkillSection skills={skills}/> 

          <section className="py-12 lg:py-16">
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-12">
              <div className="lg:col-span-6 flex md:flex-row flex-col relative">
                <div className="">
                  <h2 className="lg:text-display-md text-display-sm font-semibold pb-4">
                    Experience
                  </h2>
                  <ul className="space-y-4 mb-24">
                    {ExperienceArray.map((experience, index) => (
                      <li key={index} className="px-4 py-2 mb-6 border-primary-600 dark:border-blue-200 border-l-2">
                        <p className="text-gray-500 text-body-md mb-2">{experience.year}</p>
                        <h4 className="text-body-xl font-semibold mb-2">{experience.title}</h4>
                        <p className="font-semibold text-body-md mb-2">
                          {experience.companyURL ? (
                            <Link href={experience.companyURL} target="_blank" className='underline'>
                              {experience.company}
                            </Link>
                          ) : (
                            experience.company
                          )}
                        </p>
                        {experience.description && 
                        <p className="text-gray-500 text-body-md mb-2">{experience.description}</p>
                    }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col basis-1/2 relative">
                <div className="">
                  <h2 className="lg:text-display-md text-display-sm font-semibold pb-4">
                  Education
                  </h2>
                  <ul className="space-y-4 mb-24">
                    {EducationArray.map((education, index) => (
                      <li key={index} className="px-4 py-2 mb-6 border-primary-600 dark:border-blue-200 border-l-2">
                        <p className="text-gray-500 text-body-md mb-2">{education.year}</p>
                        <h4 className="text-body-xl font-semibold mb-2">{education.uni}</h4>
                        <p className="font-semibold text-body-md mb-2">{education.title}</p>
                        <p className="text-gray-500 text-body-md mb-2">{education.description}</p>
                      </li>
                    ))}
                  </ul>
                  
                <div className="">
                  <h2 className="lg:text-display-md text-display-sm font-semibold pb-4">
                    Conferences
                  </h2>
                  <div className="space-y-4 mb-24">
                    <div className="px-4 py-2 mb-6 border-primary-600 dark:border-blue-200 border-l-2">
                      <p className="text-gray-500 text-body-md mb-2">2012</p>
                      <h4 className="text-body-xl font-semibold mb-2">JoomlaDay</h4>
                      <p className="font-semibold text-body-md mb-2">Talk: Pinterest grid style presentation</p>
                    </div>
                  </div>
                </div>

                  {/* <Button label="Download my CV" link="/" size="lg" /> */}
                </div>
              </div>
            </div>
          </section>

        </Layout>
    )
}
