import Image from "next/image";
import { DUMMY_NEWS } from "@/data/news";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsById } from "@/db/queries";

interface NewsPageProps {
  params: {
    id: string;
  };
}
export default async function NewsPage({ params }: NewsPageProps) {
  const news = await getNewsById(params.id);

  if (!news) notFound();

  return (
    <article className='mt-8'>
      <Link href={`/news/${news.id}/photo`}>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.slug || ""}
          fill
          className='!relative object-cover !w-full !h-96 rounded-lg'
        />
      </Link>
      <h1 className='text-4xl mt-6'>{news.title}</h1>
      <time className='text-gray-400 !mt-1 block'>{news.date}</time>
      <p className='mt-4'>{news.content}</p>
    </article>
  );
}
