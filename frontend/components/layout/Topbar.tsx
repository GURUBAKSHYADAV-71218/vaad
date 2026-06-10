export default function Topbar() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-400">
          Welcome to Vaad
        </p>
      </div>

      <button className="bg-purple-600 px-4 py-2 rounded-lg">
        Create Event
      </button>
    </div>
  );
}