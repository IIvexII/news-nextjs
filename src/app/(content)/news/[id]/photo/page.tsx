import { DUMMY_NEWS } from "@/data/news";
import { getNewsById } from "@/db/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImageModal({ params }: { params: { id: string } }) {
  // const news = DUMMY_NEWS.find((news) => news.slug === params.slug);
  const news = await getNewsById(params.id);

  if (!news) {
    return notFound();
  }

  return (
    <>
      <div className='rounded-lg  flex flex-row justify-center'>
        <Image
          src={`/images/news/${news.image}`}
          alt={news.title || ""}
          fill
          className='!relative !h-[87vh] object-contain !w-1/2 rounded-lg'
        />
      </div>
    </>
  );
}
