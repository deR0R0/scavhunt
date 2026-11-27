import Image from "next/image";
import NavBar from "./components/navbar";
import ChallengeCard from "./components/challenge-card";
import ChallengeSection from "./components/challenge-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl ml-4 mt-5">Have fun solving puzzles! :)</h1>
      <div className="m-4 mt-10">
        <ChallengeSection title="Unsolvable" flavorText="These challenges are unsolvable. Don't even try.">
          <ChallengeCard isSolved={true} title="Test1" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
          <ChallengeCard isSolved={false} title="Test2" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
          <ChallengeCard isSolved={false} title="Test3" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
          <ChallengeCard isSolved={false} title="Test4" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
          <ChallengeCard isSolved={false} title="Test5" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
          <ChallengeCard isSolved={false} title="Test6" description="test test" points={500} isDecreasing={false} solveHistory={[{classOf: "2028", points: 500},{classOf: "2027", points: 300}, {classOf: "2024", points: 100}]}/>
        </ChallengeSection>
      </div>
    </div>
  );
}
