import NewsList from "@/components/news-list";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/db/queries";
import Link from "next/link";

export default async function ArchiveNewsByYear({ params }: { params: { filter: string[] | undefined } }) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];
  let links: number[] = await getAvailableNewsYears();
  let renderedNews = null;

  if (selectedYear && !selectedMonth) {
    // const news = getNewsForYear(+selectedYear);
    const news = await getNewsForYear(+selectedYear);
    links = await getAvailableNewsMonths(+selectedYear);

    if (news.length > 0) {
      renderedNews = <NewsList news={news} />;
    } else {
      renderedNews = <p>No news found for the selected period.</p>;
    }
  } else if (selectedYear && selectedMonth) {
    const news = await getNewsForYearAndMonth(+selectedYear, +selectedMonth);
    links = [];
    if (news.length > 0) {
      renderedNews = <NewsList news={news} />;
    } else {
      renderedNews = <p>No news found for the selected period.</p>;
    }
  }

  return (
    <>
      <h2 className='text-2xl'>Archive News</h2>
      <div className='mt-4 flex gap-4'>
        {links.map((link) => {
          const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

          return (
            <Link
              key={link}
              href={href}
              className='bg-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200'
            >
              {link}
            </Link>
          );
        })}
      </div>
      {renderedNews}
    </>
  );
}
