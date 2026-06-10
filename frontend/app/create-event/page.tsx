export default function CreateEventPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">
        Create Event
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mt-6 max-w-3xl">

        <input
          placeholder="Event Name"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          placeholder="Topic"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          placeholder="Duration"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <button className="bg-purple-600 px-5 py-3 rounded-lg">
          Create Event
        </button>

      </div>
    </div>
  );
}