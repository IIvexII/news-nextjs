"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-xl rounded-md px-3 py-1 transition-all duration-300 ${
        pathname.startsWith(href)
          ? "bg-white text-black hover:bg-opacity-80"
          : "text-gray-400 font-normal hover:bg-white hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
}
