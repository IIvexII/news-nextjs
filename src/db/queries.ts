import { eq, sql } from "drizzle-orm";
import { db } from "./index";
import { news } from "./schema";
import { desc } from "drizzle-orm";

export const getAllNews = async () => {
  return await db.select().from(news);
};

export const getNewsById = async (id: string) => {
  try {
    return await db.query.news.findFirst({ where: eq(news.id, id) });
  } catch (error) {
    throw new Error(`Failed to get news by id: ${id}`);
  }
};

export const getLatestNews = async () => {
  return await db.select().from(news).orderBy(desc(news.date)).limit(3);
};

export const getAvailableNewsYears = async () => {
  const allNews = await db.select({ date: news.date }).from(news);

  const years = allNews.reduce((years: number[], newsItem) => {
    if (newsItem.date) {
      const year = new Date(newsItem.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
    }
    return years;
  }, []);

  return years.sort((a, b) => b - a);
};

export const getAvailableNewsMonths = async (year: number) => {
  const allNews = await db.select({ date: news.date }).from(news);

  const months = allNews.reduce((months: number[], newsItem) => {
    if (newsItem.date) {
      const newsYear = new Date(newsItem.date).getFullYear();
      if (newsYear === year) {
        const month = new Date(newsItem.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
    }
    return months;
  }, []);

  return months.sort((a, b) => b - a);
};

export const getNewsForYear = async (year: number) => {
  const allNews = await db.select().from(news);
  const newsForYear = allNews.filter((newsItem) => {
    if (newsItem.date) {
      return new Date(newsItem.date).getFullYear() === year;
    }
    return false;
  });

  return newsForYear;
};

export const getNewsForYearAndMonth = async (year: number, month: number) => {
  const allNews = await db.select().from(news);
  const newsForYearAndMonth = allNews.filter((newsItem) => {
    if (newsItem.date) {
      return (
        new Date(newsItem.date).getFullYear() === year && new Date(newsItem.date).getMonth() === month - 1
      );
    }
    return false;
  });

  return newsForYearAndMonth;
};
