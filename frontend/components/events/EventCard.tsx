import Link from "next/link";
import StatusBadge from "../ui/StatusBadge";

type Props = {
  id: string;
  title: string;
  topic: string;
  status: string;
};

export default function EventCard({
  id,
  title,
  topic,
  status,
}: Props) {
  return (
    <Link href={`/events/${id}`}>

      <div className="bg-slate-900 rounded-xl p-5 hover:bg-slate-800 transition cursor-pointer">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-slate-400 mt-2">
          {topic}
        </p>

        <div className="mt-4">
          <StatusBadge text={status} />
        </div>

      </div>

    </Link>
  );
}