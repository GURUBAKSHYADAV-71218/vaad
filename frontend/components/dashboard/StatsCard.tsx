type Props = {
  title: string;
  value: string;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-slate-900 p-5 rounded-xl">
      <h3>{title}</h3>
      <p className="text-3xl mt-3 font-bold">
        {value}
      </p>
    </div>
  );
}