import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/data/news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <div className='mt-6'>
      <h1 className='text-4xl mb-8'>News Articles</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
