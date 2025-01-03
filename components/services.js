import Button from "./common/Button"
import Image from "next/image"
import { useTheme } from "next-themes"

import { FaCode } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";
import { GiSellCard } from "react-icons/gi";
import Quote from '../public/images/quote-left.svg'

const ServicesSection = () => {
  const {theme} = useTheme()
  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="lg:py-30 md:py-16 pt-5 pb-12">
        <div className="flex flex-col relative bg-blue-50 dark:bg-darkPrimary lg:py-0 py-10">
          <div className="absolute lg:block hidden h-16 bg-white dark:bg-darkPrimary bottom-0 left-0 right-0"></div>
          <div className="absolute lg:block hidden h-16 bg-white dark:bg-darkPrimary top-0 left-0 right-0"></div>
          <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center relative">
            <div className="lg:col-span-5 flex flex-col items-start xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4 pb-10">
              <h2 className="lg:text-display-lg text-display-md font-semibold pb-4">
                What I do in my projects
              </h2>
              <p className="text-body-md pb-8">
                As a versatile professional, I specialize in creating seamless and high-performing digital experiences. I build robust web applications tailored to your needs, design intuitive UI/UX solutions that enhance user engagement, and provide strategic digital marketing services to elevate your brand's online presence. 
              </p>
              <Button label="CONNECT WITH ME" link="/#contact" size="lg" showArrow={false} />
            </div>
            <div className="lg:col-span-7 flex md:flex-row flex-col lg:gap-8 gap-6 items-center xl:pr-16 lg:pr-10 lg:pl-0 md:px-8 px-5 relative">
              <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
              <div className="bg-white dark:bg-black p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <FaCode className="w-6 h-6 mb-6 text-primary-600 dark:text-blue-200"/>
                  <h3 className="text-display-xs font-semibold pb-4">
                    Web applications
                  </h3>
                  <p className="text-body-md">
                    I build dynamic, user-centric web applications that empower your business to connect with your audience effortlessly. My focus is on creating applications that enhance functionality, streamline user experiences, and deliver scalable solutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col basis-1/2 lg:gap-8 gap-6 relative">
              <div className="bg-white dark:bg-black p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <CgDesignmodo className="w-6 h-6 mb-6 text-primary-600 dark:text-blue-200"/>
                  <h3 className="text-display-xs font-semibold pb-4">
                    UI/UX Design
                  </h3>
                  <p className="text-body-md">
                    I bring ideas to life by implementing designs that are both visually engaging and highly functional. I thrive on solving digital problems, carefully analyzing user needs and transforming them into elegant solutions that not only look great but also work seamlessly. 
                  </p>
                </div>
                <div className="bg-white dark:bg-black p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <GiSellCard className="w-6 h-6 mb-6 text-primary-600 dark:text-blue-200"/>
                  <h3 className="text-display-xs font-semibold pb-4">
                    Digital Marketing
                  </h3>
                  <p className="text-body-md">
                    I help businesses grow their online presence. This includes building brand awareness and fostering audience engagement to expand your reach, optimizing websites for search engines (SEO) to increase visibility, and ensuring accessibility and inclusivity to connect with diverse audiences. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 flex-col items-center">
        <div className="testimonial border border-violet-900 rounded-2xl text-center lg:col-span-10 lg:col-start-2 p-12 m-auto">
          <Image src={Quote} width={120} alt="quote image" className="relative m-auto text-primary-600"/>
          <p className="text-body-lg font-semibold">By combining technical expertise and data-driven insights with creativity and strategic thinking, I deliver projects that align with your goals and resonate with your audience, making your brand stand out in today’s competitive digital landscape.</p>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;
