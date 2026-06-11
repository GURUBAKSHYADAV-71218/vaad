import EditEventForm from "@/components/events/EditEventForm";
import { supabase } from "@/lib/supabase";

export default async function EditEventPage({
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
      <div>
        Event Not Found
      </div>
    );
  }

  return (
    <div>

      <h1 className="text-3xl font-bold">
        Edit Event
      </h1>

      <EditEventForm
        id={event.id}
        initialTitle={event.title}
        initialTopic={event.topic}
      />

    </div>
  );
}