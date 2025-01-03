import Button from "./Button";
import Link from 'next/link'
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillFacebook } from "react-icons/ai"
import { ImTumblr } from "react-icons/im";
import { FaEtsy } from "react-icons/fa";
import styles from '../../styles/HeroSection.module.scss'

const Prefooter = () => {

  const socials = [
    {url: "https://www.linkedin.com/in/stellapapantou/", label: <AiFillLinkedin size={24}/>},
    {url: "https://facebook.com/stella.papantou", label: <AiFillFacebook size={24}/>},
    {url: "https://www.instagram.com/stellapapantou", label: <AiFillInstagram size={24}/>},
    {url: "https://itdoeshappen.tumblr.com/", label: <ImTumblr size={24}/>},
    {url: "https://www.etsy.com/shop/itDoesHappen", label: <FaEtsy size={24}/>},
  ]

  return (
    <div id="contact">
        <div className="lg:py-10 md:py-16 pt-5 pb-12 text-center">
          <div className="flex flex-col relative bg-blue-50 dark:bg-darkPrimary lg:py-0 py-10">
            <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-8 items-center relative ">
              <div className="lg:col-span-12 flex flex-col items-center xl:px-18 lg:px-10 md:px-8 px-5 lg:py-32 md:pb-4">
                <div className="flex items-center pb-10">
                    <div className="bg-secondary-600 rounded-full w-3 h-3 mr-2"></div>
                    <p className="uppercase font-semibold tracking-wider text-body-xs">Available for freelance projects</p>
                </div>
                <h2 className="lg:text-display-lg text-display-md font-semibold pb-4 mb-8">
                Do you have an idea?
                </h2>
                <Button label="Let's talk" link="mailto:spapantou@gmail.com?subject=Website Contact" size="lg"/>
                <div className="lg:col-span-12 flex flex-col items-center mt-12">
                  <p className="text-body-lg font-semibold mb-4">
                  Do you just want to say hello? Get in touch.
                  </p>
                  <ul className="list-inside inline-flex">
                      {socials.map((social, i) => (
                        <li className={`${styles["social-media"]} p-2  hover:text-white transition-colors duration-300`} key={i}>
                          <Link href={social.url} aria-label={social.label} target="_blank">
                            {social.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>        
          </div>
        </div>
      </div>
  );
};

export default Prefooter;
