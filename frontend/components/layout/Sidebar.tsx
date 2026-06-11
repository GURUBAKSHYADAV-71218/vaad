"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Events", href: "/events" }, // 👈 ✅ PHASE 48: Events link added here perfectly!
  { name: "Live Session", href: "/live-session" },
  { name: "Scores", href: "/scores" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Reports", href: "/reports" },
  { name: "History", href: "/history" },
  { name: "Analytics", href: "/analytics" },
  { name: "Create Event", href: "/create-event" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-purple-400">
        VAAD
      </h1>

      <p className="text-sm text-slate-400 mt-2">
        AI Debate & GD Platform
      </p>

      <nav className="mt-10 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block p-3 rounded-lg transition ${
              pathname === item.href
                ? "bg-purple-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}