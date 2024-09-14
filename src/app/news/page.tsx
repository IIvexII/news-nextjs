import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/data/news";

export default function NewsPage() {
  return (
    <div className='mt-6'>
      <h1 className='text-4xl mb-8'>News Articles</h1>
      <div className='grid grid-cols-3'>
        {DUMMY_NEWS.map((news) => (
          <Link
            href={`/news/${news.slug}`}
            key={news.id}
            className='hover:bg-white/10 px-4 py-4 rounded-lg transition-all duration-300 text-center'
          >
            <article className='flex flex-col gap-4'>
              <Image
                src={`/images/news/${news.image}`}
                alt={news.content}
                fill
                className='!relative object-cover !w-full !h-60 rounded-lg'
              />
              <h1 className='text-xl font-light tracking-wider'>{news.title}</h1>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
