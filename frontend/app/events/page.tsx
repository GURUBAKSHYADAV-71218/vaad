import { supabase } from "../../lib/supabase";
import EventCard from "../../components/events/EventCard";
import ParticipantTable from "../../components/events/ParticipantTable";
import InviteLinks from "../../components/events/InviteLinks";

export default async function EventsPage() {

  const { data: events, error } =
    await supabase
      .from("events")
      .select("*");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Events
      </h1>

      {error && (
        <div className="text-red-400 mb-4">
          {error.message}
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">

        {events?.map((event) => (
         <EventCard
  key={event.id}
  id={event.id}
  title={event.title}
  topic={event.topic}
  status={event.mode}
/>
        ))}

      </div>

      <div className="mt-8">
        <ParticipantTable />
      </div>

      <div className="mt-8">
        <InviteLinks />
      </div>
    </div>
  );
}