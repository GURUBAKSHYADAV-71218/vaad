import ParticipantCard from "@/components/participants/ParticipantCard";
import AddParticipantForm from "@/components/participants/AddParticipantForm";
export default function ParticipantsPage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Participants
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <ParticipantCard
          name="Rahul"
          role="Participant"
        />

        <ParticipantCard
          name="Priya"
          role="Participant"
        />

      </div>
<AddParticipantForm />
    </div>
    
  );
}