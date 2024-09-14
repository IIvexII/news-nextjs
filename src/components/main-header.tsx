import Link from "next/link";

export function MainHeader() {
  return (
    <header className='bg-gray-800 text-white text-center py-4'>
      <h1 className='text-5xl font-bold'>News App</h1>
      <ul className='flex justify-center space-x-4'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/news'>News</Link>
        </li>
      </ul>
    </header>
  );
}
