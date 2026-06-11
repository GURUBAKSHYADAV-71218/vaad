import RoleBadge from "../ui/RoleBadge";

const participants = [
  {
    name: "Rahul",
    role: "Participant",
  },
  {
    name: "Priya",
    role: "Invigilator",
  },
  {
    name: "Aman",
    role: "Participant",
  },
  {
    name: "Neha",
    role: "Spectator",
  },
];

export default function ParticipantTable() {
  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h2 className="font-bold mb-4">
        Participants
      </h2>

      {participants.map((p) => (
        <div
          key={p.name}
          className="py-3 border-b border-slate-800"
        >
          <div className="flex justify-between items-center">
            <span>
              {p.name}
            </span>

            <RoleBadge role={p.role} />
          </div>
        </div>
      ))}
    </div>
  );
}