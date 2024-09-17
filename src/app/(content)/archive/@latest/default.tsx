import NewsList from "@/components/news-list";
import { getLatestNews } from "@/db/queries";

export default async function LatestArchiveDetault() {
  const news = await getLatestNews();

  return (
    <>
      <h1 className='text-2xl mb-4'>Latest News</h1>
      <NewsList news={news} />
    </>
  );
}
