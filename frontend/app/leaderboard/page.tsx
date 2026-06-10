import SectionHeader from "../../components/layout/SectionHeader";
import LeaderboardTable from "../../components/leaderboard/LeaderboardTable";

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      {/* Professional Section Header replaced old h1 */}
      <SectionHeader
        title="Leaderboard"
        subtitle="Participant Rankings"
      />

      {/* Your Existing Leaderboard Table Component */}
      <LeaderboardTable />
    </div>
  );
}