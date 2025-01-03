import Image from "next/image"
import { Tooltip } from "flowbite-react"
import Section from "../common/Section"

const SkillsBoxes = [
    {
        title: "Clean & efficient code",
        copy: "I write clean, reusable code that ensures optimal web performance and simplifies future maintenance.",
        bgColor: "bg-teal-50 dark:bg-darkPrimary"
    },
    {
        title: "User-Centered design",
        copy: "I focus on UX principles, accessibility, and consistent UI design to create engaging and inclusive digital experiences.",
        bgColor: "bg-blue-50 dark:bg-darkPrimary"
    },
    {
        title: "Organized and reliable",
        copy: "With strong project planning skills, I work methodically to deliver projects on time while maintaining high-quality standards.",
        bgColor: "bg-purple-100 dark:bg-darkPrimary"
    }
];

const SkillsArray = ["HTML5", "Css3", "Javascript", "React", "NextJs", "Tailwind", "Sass", "Git", "Wordpress", "PHP", "Hubspot", "Adobe", "Figma", "MySql", "MongoDB"];

const SkillsComponent = ({ theme }) => {
    return (
        <Section title={"My skills"}>
            <div className="my-12 flex flex-row basis-0 lg:gap-8 gap-6 relative">
                {SkillsBoxes.map((skills, i) => (
                    <div className={`p-8 rounded-2xl ${skills.bgColor}`} key={i}>
                        <h3 className="text-display-sm font-semibold pb-4">{skills.title}</h3>
                        <p className="text-body-md">{skills.copy}</p>
                    </div>
                ))}
            </div>
                
            <h3 className="text-display-sm font-semibold pb-4">Favorite tech stack and tools:</h3>
            <div className="grid lg:grid-cols-12 flex-col">
                <div className="grid grid-cols-8 gap-6 lg:col-span-8">
                {SkillsArray.map(skill => (
                <Tooltip
                    placement="bottom"
                    content={skill}
                    key={skill}
                >
                    <div className="bg-white dark:bg-neutral-700 p-2 md:p-3 rounded hover:bg-blue-200 dark:hover:bg-blue-500 hover:-translate-y-2 cursor-pointer transition duration-300 shadow-md">
                    <Image
                        src={`/images/skills/${skill.toLowerCase()}.svg`} // Dynamically create the src path
                        width={32}
                        height={32}
                        className={`${
                        skill.toLowerCase() === 'nextjs' && theme === "dark"
                            ? "invert"
                            : ""
                        }`}
                        style={{ aspectRatio: '1 / 1', objectFit: 'contain' }}
                        alt={`${skill} icon`}
                    />
                    </div>
                </Tooltip>
                ))}
                </div>
            </div>
        </Section>
    );
  };
  
  export default SkillsComponent;
  