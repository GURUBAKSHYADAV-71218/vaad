export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-purple-400">
        VAAD
      </h1>

      <p className="text-sm text-slate-400 mt-2">
        AI Debate & GD Platform
      </p>

      <nav className="mt-10 space-y-4">
        <div>Dashboard</div>
        <div>Live Session</div>
        <div>Scores</div>
        <div>Leaderboard</div>
        <div>Reports</div>
        <div>History</div>
        <div>Analytics</div>
        <div>Create Event</div>
        <div>Settings</div>
      </nav>
    </aside>
  );
}