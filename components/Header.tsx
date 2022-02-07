import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 px-10 md:px-20 my-3 flex justify-between items-center">
      <Link href="/">
        <a>
          <Image src="/logo.webp" alt="Lottie Logo" width={111} height={34} />
        </a>
      </Link>
      <nav>
        <Link href={"/search"} passHref>
          <a>SEARCH</a>
        </Link>
      </nav>
    </header>
  );
}
