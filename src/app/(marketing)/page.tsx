import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className='flex flex-col gap-6 justify-center items-center min-h-screen'>
      <Image src={logo.src} alt='A newspaper' width={120} height={120} className='rounded-full' />
      <h1 className='text-4xl'>A News Site For The Next Generation</h1>
      <div className='text-center text-xl font-light flex flex-col gap-6'>
        <p>Next News is here to deliver you all the latest news - concise & unbiased!</p>

        <p>
          NextNews aims to provide you with the latest news in a concise and unbiased manner. We strive to
          deliver the news in a way that is easy to understand and to the point. We want to keep you informed
          without overwhelming you with unnecessary information.
        </p>

        <p>
          We employ a team of dedicated journalists who are committed to delivering the news in a fair and
          unbiased manner. Our team is passionate about keeping you informed and up to date with the latest
          news.
        </p>
      </div>
      <p>
        <Link href='/news' className='btn text-xl !px-8'>
          Read the latest news
        </Link>
      </p>
    </div>
  );
}
