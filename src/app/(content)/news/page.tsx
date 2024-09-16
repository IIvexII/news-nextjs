"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    }

    loadNews();
  }, []);

  return (
    <div className='mt-6 min-h-screen'>
      <h1 className='text-4xl mb-8'>News Articles</h1>
      {isLoading && (
        <div className='flex flex-col justify-center items-center gap-4 mt-24'>
          <span className='loading loading-ring w-24'></span>
          <h2 className='text-xl text-gray-400'>Loading News...</h2>
        </div>
      )}
      {!isLoading && <NewsList news={news} />}
    </div>
  );
}
