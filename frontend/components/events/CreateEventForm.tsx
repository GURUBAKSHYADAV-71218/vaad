
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreateEventForm() {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("Debate");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleCreateEvent = async () => {
    if (!title || !topic) {
      setMessage({ type: "error", text: "Please fill in all fields!" });
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      // Supabase table me live row insert karne ka logic
      const { error } = await supabase
        .from("events")
        .insert([{ title, topic, mode }]);

      if (error) throw error;

      setMessage({ type: "success", text: "✓ Event Created Successfully!" });
      
      // Form fields ko reset karna
      setTitle("");
      setTopic("");
      setMode("Debate");
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Event</h2>

      {message && (
        <div
          className={`p-3 rounded mb-4 text-sm ${
            message.type === "success"
              ? "bg-green-950/50 border border-green-900 text-green-400"
              : "bg-red-950/50 border border-red-900 text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <input
        className="w-full p-3 rounded bg-slate-800 mb-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={loading}
      />

      <input
        className="w-full p-3 rounded bg-slate-800 mb-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={loading}
      />

      <select
        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        disabled={loading}
      >
        <option value="Debate">Debate</option>
        <option value="GD">GD</option>
      </select>

      {/* Inside the form, below select, added the requested button */}
      <button
        onClick={handleCreateEvent}
        disabled={loading}
        className="mt-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold px-4 py-2 rounded w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </div>
  );
}