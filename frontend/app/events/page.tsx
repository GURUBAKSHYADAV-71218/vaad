import EventCard from "../../components/events/EventCard";
import ParticipantTable from "../../components/events/ParticipantTable";
import InviteLinks from "../../components/events/InviteLinks";

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Events
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <EventCard
          title="Debate Round 1"
          topic="Climate Change"
          status="Active"
        />

        <EventCard
          title="GD Round"
          topic="Artificial Intelligence"
          status="Upcoming"
        />
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