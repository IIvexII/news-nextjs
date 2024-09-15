import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ImageModal({ params }: { params: { slug: string } }) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);

  if (!news) {
    return notFound();
  }

  return (
    <>
      <div className='rounded-lg  flex flex-row justify-center'>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title}
          fill
          className='!relative !h-[87vh] object-contain !w-1/2 rounded-lg'
        />
      </div>
    </>
  );
}
