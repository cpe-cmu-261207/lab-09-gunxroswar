import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="d-flex justify-content-center  fw-bold h5 p-3 gap-4"
      style={{ color: "#2173de" }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab-07</a>
      </Link>
    </div>
  );
}
