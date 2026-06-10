"use client";

import { useState } from "react";

export default function CreateEventPage() {
  const [eventName, setEventName] = useState("");
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");

  // Phase 39
  const [mode, setMode] = useState("Debate");

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Create Event
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mt-6 max-w-3xl">
        <input
          value={eventName}
          onChange={(e) =>
            setEventName(e.target.value)
          }
          placeholder="Event Name"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <input
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          placeholder="Topic"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        {/* Phase 39 - Event Mode */}
        <select
          value={mode}
          onChange={(e) =>
            setMode(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        >
          <option>Debate</option>
          <option>Group Discussion</option>
        </select>

        <input
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
          placeholder="Duration"
          className="w-full p-3 rounded-lg bg-slate-800 mb-4"
        />

        <button className="bg-purple-600 px-5 py-3 rounded-lg">
          Create Event
        </button>

        {/* Phase 40 - Preview Card */}
        <div className="mt-8 border-t border-slate-700 pt-5">
          <h2 className="font-bold text-xl mb-3">
            Preview
          </h2>

          <p>
            Event: {eventName || "-"}
          </p>

          <p>
            Topic: {topic || "-"}
          </p>

          <p>
            Duration: {duration || "-"}
          </p>

          <p>
            Mode: {mode}
          </p>
        </div>
      </div>
    </div>
  );
}