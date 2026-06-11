import ViewProfileButton from "./ViewProfileButton";

type Props = {
  name: string;
  role: string;
};

export default function ParticipantCard({
  name,
  role,
}: Props) {
  return (
    <div className="bg-slate-900 p-4 rounded-xl flex flex-col justify-between min-h-[140px]">
      <div>
        <h3 className="font-semibold text-lg">
          {name}
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          {role}
        </p>
      </div>

      {/* Button placed neatly at the bottom inside the card */}
      <div className="mt-4">
        <ViewProfileButton />
      </div>
    </div>
  );
}