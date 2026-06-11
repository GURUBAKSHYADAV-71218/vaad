"use client";

export default function AddParticipantForm() {
  return (
    <div className="bg-slate-900 p-5 rounded-xl mt-6">

      <input
        placeholder="Participant Name"
        className="w-full p-3 rounded bg-slate-800"
      />

      <button
        className="mt-4 bg-purple-600 px-4 py-2 rounded"
      >
        Add Participant
      </button>

    </div>
  );
}