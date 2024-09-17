"use client";
import { useRouter } from "next/navigation";

export default function ModalBackdropBtn() {
  const router = useRouter();

  return (
    <form method='dialog' className='modal-backdrop bg-black/90'>
      <button type='button' onClick={() => router.back()}>
        close
      </button>
    </form>
  );
}
