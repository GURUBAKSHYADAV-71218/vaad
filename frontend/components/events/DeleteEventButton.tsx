"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function DeleteEventButton({
  id,
}: Props) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Delete this event?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("events")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Event Deleted");

    router.push("/events");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
    >
      Delete Event
    </button>
  );
}