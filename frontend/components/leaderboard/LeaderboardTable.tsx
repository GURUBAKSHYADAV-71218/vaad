const participants = [
  { rank: 1, name: "Rahul", score: 89 },
  { rank: 2, name: "Priya", score: 84 },
  { rank: 3, name: "Aman", score: 81 },
];

export default function LeaderboardTable() {
  return (
    <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

      <thead>

        <tr>

          <th className="p-4">
            Rank
          </th>

          <th>
            Name
          </th>

          <th>
            Score
          </th>

        </tr>

      </thead>

      <tbody>

        {participants.map((p) => (
          <tr
            key={p.rank}
            className="border-t border-slate-800"
          >
            <td className="p-4">
              {p.rank}
            </td>

            <td>
              {p.name}
            </td>

            <td>
              {p.score}
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}