type Props = {
  title: string;
  value: string;
};

export default function AnalyticsCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 p-5 rounded-xl">

      <div>
        {title}
      </div>

      <div className="text-3xl mt-3">
        {value}
      </div>

    </div>
  );
}