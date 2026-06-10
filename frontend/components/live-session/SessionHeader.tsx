export default function SessionHeader() {
  return (
    <div className="bg-slate-900 rounded-xl p-5 mb-6">
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Climate Change Debate
          </h1>

          <p className="text-slate-400">
            AI Powered Debate Session
          </p>
        </div>

        <div className="text-right">

          <div className="text-green-500 font-bold">
            ● LIVE
          </div>

          <div className="text-slate-300">
            00:15:32
          </div>

        </div>

      </div>
    </div>
  );
}