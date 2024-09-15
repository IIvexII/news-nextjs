import Link from "next/link";
import NavLink from "./nav-link";

export function MainHeader() {
  return (
    <header className='py-4 flex justify-between items-center'>
      <Link
        href='/'
        className='text-3xl font-sans font-thin text-black px-2 py-2 rounded-md bg-white self-start select-none'
      >
        NextNews
      </Link>
      <div className='flex flex-row gap-4'>
        <NavLink href='/archive'>Archive</NavLink>
        <NavLink href='/news'>News</NavLink>
      </div>
    </header>
  );
}
