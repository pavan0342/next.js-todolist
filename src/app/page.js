"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <button>
        <Link href="/pages">
           view todos
        </Link>
      </button>
    </div>
  );
}
