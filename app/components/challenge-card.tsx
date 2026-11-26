'use client';

import { ChevronDown, Send, SendHorizonal, TrendingDown } from "lucide-react";
import { useRef } from "react";

/*
notes:
- used to not include solve history but now i am.
- other input types is not here yet.
*/
interface ChallengeCardProps {
    title: string;
    points: number;
    isDecreasing: boolean;
    description: string;
    solveHistory: string[];
}

export default function ChallengeCard({ title, points, isDecreasing, description }: ChallengeCardProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitSolution = () => {
        alert(inputRef.current?.value)
    }

    return (
        <div className="@container w-full flex flex-col bg-foreground max-w-96 min-h-80 rounded-lg p-3 drop-shadow-[0px_0px_15px_var(--foreground-color)]">
            <div className="challenge-card-header flex flex-row items-start justify-between gap-3">
                <h2 className="min-w-0 text-[clamp(1.25rem,6.5cqi,1.875rem)] wrap-break-word">{title}</h2>
                <div className="text-2xl bg-highlight drop-shadow-[0px_0px_5px_var(--highlight-color)] px-3 py-1 rounded-xl shrink-0 flex flex-row gap-2 items-center">
                    {
                        isDecreasing && <TrendingDown/>
                    }
                    <span>{points}</span>
                </div>
            </div>
            <span className="text-sm text-text-primary/50 mt-2 wrap-anywhere">{description}</span>
            <div className="bg-white w-full h-px my-5"/>
            <div className="flex flex-col">
                <span>Solve History</span>
            </div>
            <div className="mt-auto mb-3 flex flex-row items-center gap-2">
                <input ref={inputRef} className="w-full bg-lighter-foreground rounded-md h-8 outline-0 pl-2 placeholder-text-primary/20" placeholder="type ur answer here" type="text"/>
                <button onClick={submitSolution} className="hover:shadow-[inset_0px_0px_10px_var(--color-highlight)] w-10 h-10 p-2 transition-shadow rounded-xl duration-300">
                    <Send className="w-6 h-6"/>
                </button>
            </div>
        </div>
    )
}