import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";

export default function Home() {
  return (
    <PageContainer>

      <Topbar />

      <div className="grid grid-cols-4 gap-6 mt-8">
        <StatsCard
          title="Total Events"
          value="12"
        />

        <StatsCard
          title="Participants"
          value="86"
        />

        <StatsCard
          title="AI Evaluations"
          value="412"
        />

        <StatsCard
          title="Average Score"
          value="78"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        <RecentActivity />
        <UpcomingEvents />
      </div>

    </PageContainer>
  );
}