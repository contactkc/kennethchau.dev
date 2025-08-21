import type { NextPage } from 'next';
import React from 'react';
import Social from '@/components/Social';
import { Github, Mail, Linkedin, Globe } from 'lucide-react'
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import SkillTag from '@/components/SkillTag';

const Home: NextPage = () => {
    const experienceData = [
        {
            title: "roblox developer",
            company: "ctstudio",
            duration: "february 2023 - june 2025",
            description: [
                "Developed Lua gameplay features with 5+ developers, boosting interactivity by 30%.",
                "Optimized backend logic, increasing game FPS by 25% for 25,000+ concurrent players.",
                "Enhanced event handling, driving peak engagement of 25,000+ concurrent users.",
                "Improved puzzle mechanics, reducing player drop-off by 15% in key game modes.",
                "Streamlined asset management, cutting load times by 20% for better user experience."
            ]
        },
        {
            title: "fullstack developer",
            company: "rivals tracker",
            duration: "january 2025 - may 2025",
            description: [
                "Built a full-stack web app in a 3-person team to track Marvel Rivals player stats.",
                "Developed RESTful backend with Java and Spring Boot for secure user authentication and APIs.",
                "Designed a responsive React frontend with Chakra UI, featuring real-time data visualizations.",
                "Integrated PostgreSQL and third-party APIs for dynamic data storage and retrieval.",
                "Implemented user authentication, encrypted password storage, and account management features."
            ]
        }
    ];

    const projectData = [
        {
            title: "broncosearch",
            href: "https://github.com/contactkc/broncosearch",
            description: "semantic search engine for cpp courses",
            tags: ["nextjs", "typescript", "tailwindcss", "python", "selenium"]
        },
        {
            title: "kennethchau.dev",
            href: "https://github.com/contactkc/kennethchau.dev",
            description: "personal cv site for me to show all my work",
            tags: ["nextjs", "typescript", "tailwindcss"]
        },
        {
            title: "rstalk",
            href: "https://github.com/contactkc/rstalk",
            description: "roblox player locater tool",
            tags: ["nextjs", "typescript", "tailwindcss", "roblox api"]
        }
    ];

    return (
        <>
            <div className="min-h-screen flex justify-center p-12">
                <div className="max-w-2xl w-full">
                    <h1 className="text-2xl mb-2">kenneth chau</h1>
                    <p className="text-sm text-zinc-400 font-light">full stack developer passionate about building and learning new things</p>
                    <div className="flex text-zinc-500 text-xs mt-1 items-center">
                        <Globe className="size-3 mr-1" />
                        <p>fountain valley, ca</p>
                    </div>
                    <div className="flex gap-2">
                        <Social icon={Mail} href="mailto:kenneth_chau@outlook.com" />
                        <Social icon={Github} href="https://github.com/contactkc" />
                        <Social icon={Linkedin} href="https://www.linkedin.com/in/contactkc/" />
                    </div>

                    <h2 className="text-xl mt-12 mb-2">about</h2>
                    <p className="text-sm text-zinc-400 font-light">i&apos;m a full stack developer pursuing a BS in computer science @ cal poly pomona. 
                        i enjoy designing responsive front end webapps w/ react & typescript.
                        i love cats, hiking, and exploring new technologies.
                    </p>

                    <h2 className="text-xl mt-12 mb-2">related experience</h2>
                    <div className="space-y-4">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                title={exp.title}
                                company={exp.company}
                                duration={exp.duration}
                                description={exp.description}
                            />
                        ))}
                    </div>

                    <h2 className="text-xl mt-12 mb-2">skills</h2>
                    <div className="flex flex-wrap gap-1">
                        {["javascript", "typescript", "react", "next.js", "tailwindcss", "node.js", "python", "springboot", "pinecone", "postgresql", "html", "css"].map((skill, index) => (
                            <SkillTag key={index}>{skill}</SkillTag>
                        ))}
                    </div>

                    <h2 className="text-xl mt-12 mb-2">projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {projectData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                href={project.href}
                                description={project.description}
                                tags={project.tags}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;