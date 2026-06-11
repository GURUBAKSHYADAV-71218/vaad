type Props = {
  name: string;
  role: string;
};

export default function ParticipantCard({
  name,
  role,
}: Props) {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">

      <h3 className="font-semibold">
        {name}
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        {role}
      </p>

    </div>
  );
}