import styles from '../../styles/HeroSection.module.scss'
import { AiOutlineArrowDown } from '@react-icons/all-files/ai/AiOutlineArrowDown'
import { ScrollIntoView } from '../../lib/scroll'
import Image from 'next/image'
import Button from "../common/Button";
import Stella from '../../public/images/stellapapantou.png'

export default function HeroSection() {
    return (
        <section className={`${styles.container} py-6 md:py-16`}>
            <div className='grid lg:grid-cols-12 grid-cols-1 xl:gap-8 relative pb-18 dark:darkPrimary'>
                <div className={`${styles["hero-content"]} lg:col-span-7 mb-10`}>
                    <p className="uppercase font-bold text-body-xs tracking-wider mb-10">Lead developer, design-oriented</p>
                    <h1 className='text-display-md md:text-display-xl mb-10'>Hey there, I am <span className='text-primary-600 dark:text-blue-200'>Stella Papantou</span> and I build digital products</h1>
                    <Button label="Connect with me" link="/#contact" size="lg" showArrow={false}/>
                </div>
                <div className="lg:col-span-5">
                    <div className="relative px-4 sm:px-0">
                        <Image src={Stella} width={450} height={420} priority alt="Stella Papantou profile picture" className="relative hover:animate-float"/>
                    </div>
                </div>
            </div>

            <div className={`${styles["arrow-btn"]} invisible lg:visible`}>
                <button className='cursor-pointer hover:text-white transition-colors duration-300' onClick={() => ScrollIntoView({id: 'about-section', block: 'center'})}>
                    <AiOutlineArrowDown size={24}/>
                </button>
            </div>
        </section>
    )
}