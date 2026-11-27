'use client';

interface ChallengeSectionProps {
    title: string;
    flavorText: string;
    children: React.ReactNode;
}

export default function ChallengeSection({title, flavorText, children} : ChallengeSectionProps) {
    return (
        <div className="flex flex-col">
            <h3 className="text-2xl">{title}</h3>
            <p className="mt-1 text-text-primary/30">{flavorText}</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(336px,1fr))] gap-y-5 gap-x-3 mt-5">
                {
                    children
                }
            </div>
        </div>
    )
}