import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestArchiveDetault() {
  const news = getLatestNews();

  return (
    <>
      <h1 className='text-2xl mb-4'>Latest News</h1>
      <NewsList news={news} />
    </>
  );
}
