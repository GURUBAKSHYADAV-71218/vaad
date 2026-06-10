const participants = [
  { rank: 1, name: "Rahul", score: 89 },
  { rank: 2, name: "Aman", score: 85 },
  { rank: 3, name: "Priya", score: 82 },
];

export default function LeaderboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">
        Leaderboard
      </h1>

      <table className="w-full bg-slate-900 rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="p-4">Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((p) => (
            <tr
              key={p.rank}
              className="border-t border-slate-800"
            >
              <td className="p-4">{p.rank}</td>
              <td>{p.name}</td>
              <td>{p.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}