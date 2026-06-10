export default function RecentActivity() {
  const activities = [
    "Debate Session Completed",
    "New Event Created",
    "Leaderboard Updated",
    "Report Generated",
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-3">
        {activities.map((item, index) => (
          <div
            key={index}
            className="border-b border-slate-800 pb-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}