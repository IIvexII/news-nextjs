import ModalBackdropBtn from "@/components/modal-backdrorp-btn";
import { getNewsById } from "@/db/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ImageModalIntercepted({ params }: { params: { id: string } }) {
  const news = await getNewsById(params.id);

  if (!news) {
    return notFound();
  }

  return (
    <>
      <dialog id='image_modal' className='modal' open>
        <div className='modal-box h-full'>
          <Image src={`/images/news/${news.image}`} alt={news.title || ""} fill />
        </div>
        <ModalBackdropBtn />
      </dialog>
    </>
  );
}
