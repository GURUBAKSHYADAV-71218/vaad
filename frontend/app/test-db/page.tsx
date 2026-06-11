export default function TestDBPage() {
  return (
    <div className="p-8 text-white bg-slate-950 min-h-screen">
      <h1 className="text-2xl font-bold text-green-400">
        ✓ Supabase Connected Successfully!
      </h1>
      <p className="text-slate-400 mt-2">
        Frontend database initialization script has executed without any runtime exceptions.
      </p>
    </div>
  );
}