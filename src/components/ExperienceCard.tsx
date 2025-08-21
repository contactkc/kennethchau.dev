type ExperienceCardProps = {
    title: string;
    company: string;
    duration: string;
    description: string[];
};

const ExperienceCard = ({ title, company, duration, description }: ExperienceCardProps) => {
    return (
        <div className="border border-zinc-800 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-md font-bold">{title}</h2>
                <p className="text-sm text-zinc-500 font-thin">{duration}</p>
            </div>
            <p className="text-sm text-zinc-400 mb-4 font-thin">{company}</p>
            <ul className="list-disc list-inside">
                {description.map((item, index) => (
                    <li key={index} className="text-xs text-zinc-200 mb-2 font-thin">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;