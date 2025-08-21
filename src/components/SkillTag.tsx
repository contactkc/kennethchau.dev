const SkillTag = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="bg-zinc-800 text-zinc-200 text-[0.7rem] font-bold py-1 px-2 rounded-lg">
            {children}
        </span>
    );
}

export default SkillTag;
