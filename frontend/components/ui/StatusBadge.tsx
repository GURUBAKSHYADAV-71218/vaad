type Props = {
  text: string;
};

export default function StatusBadge({
  text,
}: Props) {
  return (
    <span className="bg-purple-600 px-3 py-1 rounded">
      {text}
    </span>
  );
}