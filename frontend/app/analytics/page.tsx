import AnalyticsCard from "../../components/dashboard/AnalyticsCard";

export default function LiveSessionPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Analytics
      </h1>

      <p className="text-slate-400 mt-2">
        Discussion monitoring dashboard
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <AnalyticsCard
          title="Total Events"
          value="25"
        />

        <AnalyticsCard
          title="Participants"
          value="320"
        />

        <AnalyticsCard
          title="AI Evaluations"
          value="1045"
        />

        <AnalyticsCard
          title="Average Score"
          value="78"
        />
      </div>
    </div>
  );
}