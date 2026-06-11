import Link from "next/link";

export default function ViewProfileButton() {
  return (
    <Link href="/participants/1">
      <button className="mt-3 bg-blue-600 px-3 py-1 rounded">
        View Profile
      </button>
    </Link>
  );
}