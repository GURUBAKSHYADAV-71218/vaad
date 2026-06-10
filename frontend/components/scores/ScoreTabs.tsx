export default function ScoreTabs() {
  return (
    <div className="flex gap-3">

      <button className="bg-purple-600 px-4 py-2 rounded-lg">
        AI Score
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Human Score
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Final Score
      </button>

    </div>
  );
}