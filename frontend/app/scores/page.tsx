import AIScoreCard from "../../components/scores/AIScoreCard";
import FinalScoreCard from "../../components/scores/FinalScoreCard";
import InvigilatorPanel from "../../components/scores/InvigilatorPanel";
import ScoreTabs from "../../components/scores/ScoreTabs";

export default function ScoresPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Scores
      </h1>

      <ScoreTabs />

      <div className="grid grid-cols-3 gap-6 mt-6">

        <AIScoreCard />

        <InvigilatorPanel />

        <FinalScoreCard />

      </div>

    </div>
  );
}