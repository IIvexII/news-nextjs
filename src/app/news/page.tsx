import Link from "next/link";

export default function NewsPage() {
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-bold'>News</h1>
      <ul className='text-blue-700'>
        <li>
          <Link href='/news/1'>News 1</Link>
        </li>
        <li>
          <Link href='/news/2'>News 2</Link>
        </li>
      </ul>
    </div>
  );
}
