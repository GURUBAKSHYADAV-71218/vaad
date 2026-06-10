import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

import StatsCard from "../components/dashboard/StatsCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-8">
          <PageContainer>
            {/* Topbar */}
            <Topbar />

            <h2 className="text-3xl font-bold mt-6">
              Dashboard
            </h2>

            <p className="text-slate-400 mt-2">
              Welcome to Vaad
            </p>

            {/* Stats Cards */}
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

            {/* Recent Activity + Upcoming Events */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <RecentActivity />
              <UpcomingEvents />
            </div>
          </PageContainer>
        </section>
      </div>
    </main>
  );
}