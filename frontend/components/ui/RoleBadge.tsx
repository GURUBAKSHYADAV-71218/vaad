type Props = {
  role: string;
};

export default function RoleBadge({
  role,
}: Props) {
  return (
    <span className="bg-slate-700 px-2 py-1 rounded text-sm">
      {role}
    </span>
  );
}