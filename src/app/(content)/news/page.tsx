import NewsList from "@/components/news-list";
import { getAllNews } from "@/db/queries";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className='mt-6 min-h-screen'>
      <h1 className='text-4xl mb-8'>News Articles</h1>
      <NewsList news={news} />
    </div>
  );
}
