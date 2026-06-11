import ParticipantCard from "@/components/participants/ParticipantCard";
import AddParticipantForm from "@/components/participants/AddParticipantForm";

import { getParticipants } from "@/lib/participants";

export default async function ParticipantsPage() {

  const participants =
    await getParticipants();

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Participants
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {participants.map((participant: any) => (
          <ParticipantCard
            key={participant.id}
            name={participant.name}
            role={participant.role}
          />
        ))}

      </div>

      <AddParticipantForm />

    </div>
  );
}