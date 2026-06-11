import CreateEventForm from "../../components/events/CreateEventForm";

export default function CreateEventPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Create Event
      </h1>

      <CreateEventForm />
    </div>
  );
}