import { type News } from "@/data/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsList({ news }: { news: News[] }) {
  return (
    <div className='grid grid-cols-3 -ml-4'>
      {news.map((singleNews) => (
        <Link
          href={`/news/${singleNews.slug}`}
          key={singleNews.id}
          className='hover:bg-white/10 px-4 py-4 rounded-lg transition-all duration-300 text-center'
        >
          <article className='flex flex-col gap-4'>
            <Image
              src={`/images/news/${singleNews.image}`}
              alt={singleNews.content}
              fill
              className='!relative object-cover !w-full !h-60 rounded-lg'
            />
            <h1 className='text-xl font-light tracking-wider'>{singleNews.title}</h1>
          </article>
        </Link>
      ))}
    </div>
  );
}
