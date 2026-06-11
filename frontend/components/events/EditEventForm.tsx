"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  initialTitle: string;
  initialTopic: string;
};

export default function EditEventForm({
  id,
  initialTitle,
  initialTopic,
}: Props) {
  const [title, setTitle] =
    useState(initialTitle);

  const [topic, setTopic] =
    useState(initialTopic);

  const router = useRouter();

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("events")
      .update({
        title,
        topic,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Event Updated");

    router.push(`/events/${id}`);
    router.refresh();
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl mt-6">

      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full p-3 rounded bg-slate-800 mb-3"
      />

      <input
        value={topic}
        onChange={(e) =>
          setTopic(e.target.value)
        }
        className="w-full p-3 rounded bg-slate-800 mb-3"
      />

      <button
        onClick={handleUpdate}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Save Changes
      </button>

    </div>
  );
}