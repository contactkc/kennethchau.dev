import React from "react";

type projectProps = {
    title: string;
    href: string;
    description: string;
    tags: string[];
};

const ProjectCard = ({ title, href, description, tags }: projectProps) => {
    return (
        <div className="border border-zinc-800 rounded-lg p-8 w-54 h-60 bg-zinc-950 flex flex-col justify-between gap-8">
            <div>
                <a 
                target="_blank"
                rel="noopener noreferrer"
                href={href} 
                className="text-sm font-bold hover:underline">
                    {title}
                </a>
                <p className="text-xs text-zinc-500 font-thin">{description}</p>
            </div>

            <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-zinc-800 text-zinc-300 text-[0.6rem] font-medium mr-1 mb-1 px-1 py-0.5 rounded-lg">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;