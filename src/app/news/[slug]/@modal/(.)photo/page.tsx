"use client";

import { DUMMY_NEWS } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ImageModalIntercepted({ params }: { params: { slug: string } }) {
  const news = DUMMY_NEWS.find((news) => news.slug === params.slug);
  const router = useRouter();

  if (!news) {
    return notFound();
  }

  return (
    <>
      <dialog id='image_modal' className='modal' open>
        <div className='modal-box h-full'>
          <Image src={`/images/news/${news.image}`} alt={news.title} fill />
        </div>
        <form method='dialog' className='modal-backdrop bg-black/90'>
          <button type='button' onClick={() => router.back()}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
}
