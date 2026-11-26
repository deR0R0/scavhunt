import Image from "next/image";
import NavBar from "./components/navbar";
import ChallengeCard from "./components/challenge-card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl ml-4 mt-5">Have fun solving puzzles! :)</h1>
      <ChallengeCard title="Super Fun Challenge" points={500} isDecreasing={false} description="i really like cool scav comm challenges yep yep yep yep yep"/>
    </div>
  );
}
