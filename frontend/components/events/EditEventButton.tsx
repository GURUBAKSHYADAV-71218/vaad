"use client";

import Link from "next/link";

export default function EditEventButton({
  id,
}: {
  id: string;
}) {
  return (
    <Link href={`/events/${id}/edit`}>
      <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
        Edit Event
      </button>
    </Link>
  );
}