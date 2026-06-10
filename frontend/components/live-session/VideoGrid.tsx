const users = [
  "Rahul",
  "Priya",
  "Aman",
  "Neha",
  "Ravi",
  "Karan",
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">

      {users.map((user) => (
        <div
          key={user}
          className="bg-slate-900 rounded-xl h-40 flex items-center justify-center"
        >
          {user}
        </div>
      ))}

    </div>
  );
}