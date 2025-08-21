import { ReactElement, ElementType } from "react";

type SocialProps = {
    icon: ElementType;
    href: string;
};

const Social = ({ icon: Icon, href }: SocialProps) => {
    return (
            <a 
                target="_blank"
                rel="noopener noreferrer"
                href={href} 
                className="flex items-center justify-center text-zinc-500 size-4 border border-zinc-800 rounded-lg p-2 mt-2 w-fit h-fit hover:bg-zinc-800 hover:text-white transition-colors">
                <Icon className="h-4 w-4" />
            </a>
    );
}

export default Social;