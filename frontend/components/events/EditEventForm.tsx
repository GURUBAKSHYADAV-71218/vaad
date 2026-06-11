"use client";

export default function EditEventForm() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6">
      <input
        placeholder="Title"
        className="w-full p-3 rounded bg-slate-800 mb-3"
      />

      <input
        placeholder="Topic"
        className="w-full p-3 rounded bg-slate-800 mb-3"
      />

      <button
        className="bg-green-600 px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}