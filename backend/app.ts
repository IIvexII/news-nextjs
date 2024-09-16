import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./db";
import { news as newsScheme } from "./db/schema";

const app = express();
const port = 8080;

app.use(cors());

app.get("/news", async (req: Request, res: Response) => {
  const news = await db.select().from(newsScheme);

  res.json(news);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
