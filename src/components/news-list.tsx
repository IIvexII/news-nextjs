import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  slug: string | null;
  image: string | null;
  title: string | null;
  content: string | null;
}

export default function NewsList({ news }: { news: News[] }) {
  if (!news.length) {
    return (
      <div className='flex flex-col justify-center items-center gap-4 mt-24 min-h-screen'>
        <h2 className='text-xl text-gray-400'>No News Articles</h2>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-3 -ml-4'>
      {news.map((singleNews) => (
        <Link
          href={`/news/${singleNews.id}`}
          key={singleNews.id}
          className='hover:bg-white/10 px-4 py-4 rounded-lg transition-all duration-300 text-center'
        >
          <article className='flex flex-col gap-4'>
            <Image
              src={`/images/news/${singleNews.image}`}
              alt={singleNews.content || ""}
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
