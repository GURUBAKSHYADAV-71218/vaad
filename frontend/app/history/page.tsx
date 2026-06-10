const events = [
  {
    topic: "Climate Change Debate",
    date: "10 June 2026",
    winner: "Rahul",
  },
  {
    topic: "AI Ethics Discussion",
    date: "09 June 2026",
    winner: "Priya",
  },
  {
    topic: "Future of Education",
    date: "08 June 2026",
    winner: "Aman",
  },
];

export default function HistoryPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-white mb-6">
        Event History
      </h1>

      <div className="bg-slate-900 rounded-xl overflow-hidden">

        {events.map((event) => (
          <div
            key={event.topic}
            className="p-4 border-b border-slate-800"
          >

            <div className="font-semibold">
              {event.topic}
            </div>

            <div className="text-slate-400">
              {event.date}
            </div>

            <div className="mt-1">
              Winner: {event.winner}
            </div>

            <button
              className="mt-3 bg-purple-600 px-3 py-1 rounded"
            >
              View Report
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}