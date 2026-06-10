type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-6">

      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="text-slate-400 mt-1">
        {subtitle}
      </p>

    </div>
  );
}