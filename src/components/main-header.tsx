import Link from "next/link";

export function MainHeader() {
  return (
    <header className='py-4 flex justify-between items-center'>
      <Link
        href='/'
        className='text-3xl font-sans font-thin text-black px-2 py-2 rounded-md bg-white self-start select-none'
      >
        NextNews
      </Link>
      <Link
        href='/news'
        className='text-xl text-gray-400 font-normal hover:bg-white hover:text-black rounded-md px-3 py-1 transition-all duration-300'
      >
        News
      </Link>
    </header>
  );
}
