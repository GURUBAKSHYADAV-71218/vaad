export default function ScoreTabs() {
  return (
    <div className="border border-purple-100 bg-white p-4 rounded-xl shadow-sm">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">🗂️ Score Tabs</p>
      <div className="flex gap-2 mt-2">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">AI Insights</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">Invigilator Review</span>
      </div>
    </div>
  );
}