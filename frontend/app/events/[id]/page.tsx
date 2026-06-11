import DeleteEventButton from "@/components/events/DeleteEventButton";
import EditEventButton from "@/components/events/EditEventButton";
import { supabase } from "@/lib/supabase";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: event } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (!event) {
    return (
      <div className="p-8">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        {event.title}
      </h1>

      <p className="mt-3 text-slate-400">
        {event.topic}
      </p>

      <div className="mt-6 bg-slate-900 p-4 rounded-xl">
        <p>
          Mode: {event.mode}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <EditEventButton
          id={event.id}
        />

        <DeleteEventButton
          id={event.id}
        />
      </div>
    </div>
  );
}